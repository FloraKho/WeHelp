import { useState, useEffect } from "react"
import { NavLink, useHistory } from "react-router-dom"

const SearchBar = ({ businesses }) => {
    const [query, setQuery] = useState("")
    const [showMenu, setShowMenu] = useState(false);

    const businessesArr = Object.values(businesses)
    const history = useHistory()

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true)
    }

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        }

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu)
    }, [showMenu]);

    const handleSearch = () => {
        history.push(`/search/${query}`)
    }

    return (
        <>
            <div id="search-input-button">
                <input
                    className="search-bar-input"
                    type="text"
                    placeholder="What do you want to eat?"
                    value={query}
                    onChange={event => {
                        openMenu()
                        setQuery(event.target.value)
                    }}
                />
                <div id="search-button-container" onClick={handleSearch}>
                    <i id="search-button" className="fa-solid fa-magnifying-glass fa-lg glass"  />
                </div>
                {showMenu &&
                    <div className="search-bar-drop-down-menu">
                        <p>your results here...</p>
                        {query && businessesArr.filter(business => {
                            if (query === "") {
                                //if query is empty
                                return business;
                            } else if (business.name.toLowerCase().includes(query.toLowerCase())) {
                                //returns filtered array
                                return business;
                            }
                        }).map((business, index) => (
                            <NavLink to={`/businesses/${business.id}`} onClick={() => setQuery("")} style={{ textDecoration: 'none', color: 'black' }}>
                                <div key={index} className="drop-down-unit">
                                    <p>{business.name}</p>
                                </div>
                            </NavLink>
                        )
                        )
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default SearchBar
