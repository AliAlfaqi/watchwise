import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MediaContext = createContext(null)

const MediaContextProvider = (props) => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [trendingPerson, setTrendingPerson] = useState([]);

    async function getTrending(mediaType, callback) {
        let { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=1c76d8cad246ccd99e5b58258055a6ad`
        );
        callback(data.results);
    }

    useEffect(() => {
        getTrending("movie", setTrendingMovies);
        getTrending("tv", setTrendingTv);
        getTrending("person", setTrendingPerson);
    }, []);


    return <MediaContext.Provider value={{ trendingMovies, trendingPerson, trendingTv }}>
        {props.children}
    </MediaContext.Provider>
}

export default MediaContextProvider