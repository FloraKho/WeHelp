import React from "react";
import { useParams } from "react-router-dom";

const SearchResult = () => {
    const {searchterms} = useParams()

    const searchArr = searchterms.split(' ')
    console.log(searchArr)

    return (
        <h1>THis is the result</h1>
    )
}

export default SearchResult;

