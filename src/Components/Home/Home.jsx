import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaItem from "../MediaItem/MediaItem";
import {Helmet} from "react-helmet"

export default function Home() {
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

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WatchWise</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="row mb-5">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="horzLine w-25 mb-3"></div>
            <h2 className="h5">
              Trending Movies
              <br />
              To Watch Right Now
            </h2>
            <p className="text-muted py-2">
              Most Wanted Movies TO Watch Right Now
            </p>
            <div className="horzLine w-100 mt-3"></div>
          </div>
        </div>
        {trendingMovies.length > 0 ? trendingMovies.slice(0, 10).map((item, index) => (
          <MediaItem index={index} item={item} />
        )): <div className="d-flex justify-content-center align-items-center"><i className="fas fa-spin fa-spinner fa-4x"></i></div> }
      </div>
      <div className="row">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="horzLine w-25 mb-3"></div>
            <h2 className="h5">
              Trending Series
              <br />
              To Watch Right Now
            </h2>
            <p className="text-muted py-2">
              Most Wanted Series TO Watch Right Now
            </p>
            <div className="horzLine w-100 mt-3"></div>
          </div>
        </div>
        {trendingTv.slice(0, 10).map((item, index) => (
          <MediaItem index={index} item={item} />
        ))}
      </div>
    </>
  );
}
