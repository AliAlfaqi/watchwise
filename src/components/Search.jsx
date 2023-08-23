import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { SearchContext } from '../context/SearchContext'

const Search = () => {


  // const [query, setQuery] = useState("")
  // const [searchResult, setSearchResult] = useState([])


  // useEffect(() => {
  //   searchMedia(query)
  // }, [query])

  // async function searchMedia(query) {
  //   let { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1&api_key=1c76d8cad246ccd99e5b58258055a6ad`)
  //   setSearchResult(data.results)
  //   console.log((searchResult));
  // }

  const [searchTerm, setSearchTerm] = useState('');

  const { setQuery, setSearchResult } = useContext(SearchContext)
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setQuery(e.target.value)
    }
  }
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleChange} onKeyDown={e => handleKeyPress(e)} />
      {/* 
      <div className="row">
        {searchResult.map((item, index) =>
          item.poster_path ? <div className="col-md-3 my-3" key={index}>
            <div className="movie position-relative">
              <img src={'https://images.tmdb.org/t/p/w500' + item.poster_path} className='w-100' alt="" />
              <div className='vote p-2 text-white position-absolute top-0 end-0'>{item.vote_average}</div>
            </div>
          </div> : ""
        )}
      </div> */}


    </>
  )
}

export default Search