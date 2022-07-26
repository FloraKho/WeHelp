import { useState } from "react"

const SearchBar = ({businesses}) => {
    // console.log("THIS IS NAVI BAR BUSINESSES",businesses)
    const [query, setQuery] = useState("")
    console.log("SEARCH BAR QUERY", query)
    const businessesArr = Object.values(businesses)


    return(
        <div>
            <input 
                type="text"
                placeholder="What do you want to eat?"
                value={query}
                onChange={event => setQuery(event.target.value)}
            />
            {businessesArr.filter(business => {
                    if (query === "") {
                    //if query is empty
                    return business;
                    } else if (business.name.toLowerCase().includes(query.toLowerCase())) {
                    //returns filtered array
                    return business;
                    }
                }).map((business, index) => (
                    <div key={index}>
                        <p>{business.name}</p>
                    </div>
                    )
                )
            }       
            
            <button>Search</button>
        </div>
    )
}

export default SearchBar

// Data.filter(post => {
//     if (query === "") {
//       //if query is empty
//       return post;
//     } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
//       //returns filtered array
//       return post;
//     }
//   });