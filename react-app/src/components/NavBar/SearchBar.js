import { useState } from "react"
import { NavLink, useHistory } from "react-router-dom"

const SearchBar = ({ businesses }) => {
    const [query, setQuery] = useState("")
    const [showMenu, setShowMenu] = useState(false);

    const businessesArr = Object.values(businesses)
    const history = useHistory()

    const handleSearch = () => {
        history.push(`/search/${query}`)
    }

    return (
        <>
            <div>
                <input
                    className="search-bar-input"
                    type="text"
                    placeholder="What do you want to eat?"
                    value={query}
                    onChange={event => {
                        setShowMenu(true)
                        setQuery(event.target.value)}}
                    />
                <i className="fa-solid fa-magnifying-glass fa-2x glass" onClick={handleSearch} />
            { showMenu && 
                <div className="search-bar-drop-down-menu">
                    {query && businessesArr.filter(business => {
                        if (query === "") {
                            //if query is empty
                            return business;
                        } else if (business.name.toLowerCase().includes(query.toLowerCase())) {
                            //returns filtered array
                            return business;
                        }
                    }).map((business, index) => (
                        <NavLink to={`/businesses/${business.id}`} onClick={() => setQuery("")}>
                            <div key={index}>
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
