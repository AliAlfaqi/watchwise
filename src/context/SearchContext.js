import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext(null)


const SearchContextProvider = (props) => {
    const [query, setQuery] = useState("")
    const [searchResult, setSearchResult] = useState([])


    useEffect(() => {
        searchMedia(query)
        console.log('hello')
    }, [query])

    async function searchMedia(query) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1&api_key=1c76d8cad246ccd99e5b58258055a6ad`)
        setSearchResult(data.results)
        console.log((searchResult));
    }
    return <SearchContext.Provider value={{ searchResult, setQuery, setSearchResult }}>
        {props.children}
    </SearchContext.Provider>
}


export default SearchContextProvider