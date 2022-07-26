import { useState } from "react"
import { NavLink, useHistory } from "react-router-dom"

const SearchBar = ({ businesses }) => {
    const [query, setQuery] = useState("")
    const businessesArr = Object.values(businesses)
    const history = useHistory()

    const handleSearch = () => {
        history.push(`/search/${query}`)
    }

    return (
        <div>
            <input
                type="text"
                placeholder="What do you want to eat?"
                value={query}
                onChange={event => setQuery(event.target.value)}
            />
            <div onClick={handleSearch}><button>Search</button></div>
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
    )
}

export default SearchBar
