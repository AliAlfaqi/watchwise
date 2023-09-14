import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MediaContext = createContext(null)

const MediaContextProvider = (props) => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [trendingPerson, setTrendingPerson] = useState([]);
    const [globalPage, setGlobalPage] = useState(1)

    async function getTrending(mediaType, callback, pageNumber) {
        let { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=1c76d8cad246ccd99e5b58258055a6ad&page=${pageNumber}`
        );
        callback(data.results);
        setGlobalPage(pageNumber)
    }

    useEffect(() => {
        getTrending("movie", setTrendingMovies, globalPage);
        getTrending("tv", setTrendingTv, globalPage);
        getTrending("person", setTrendingPerson, globalPage);
    }, []);

    // const getTrendingByPage = async(mediaType , pageNumber) =>{
    //     const  {data}  =  await axios.get(
    //         `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=1c76d8cad246ccd99e5b58258055a6ad&${pageNumber}`
    //     )
    //     setT
    // }


    return <MediaContext.Provider value={{ trendingMovies, trendingPerson, trendingTv, getTrending, setTrendingMovies, setTrendingTv, globalPage, setGlobalPage }}>
        {props.children}
    </MediaContext.Provider>

}

export default MediaContextProvider