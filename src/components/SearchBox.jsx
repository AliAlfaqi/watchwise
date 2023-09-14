import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { SearchContext } from '../context/SearchContext'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {


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

  const navigate = useNavigate()

  useEffect(() => {     //remember me feature
    if (localStorage.getItem("userToken") !== null) {
      setSearchVisible(true)
    } else {
      setSearchVisible(false)
    }
  }, [localStorage.getItem("userToken")]);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchVisible, setSearchVisible] = useState(false)

  const { setQuery, searchResult } = useContext(SearchContext)
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate('/Search')
      console.log(searchResult);
    }
  }
  const handleChange = (e) => {
    setQuery(e.target.value)
  };


  return (
    <>
      {searchVisible && <input type="text" className='search-box' placeholder='Search' onChange={handleChange} onKeyDown={e => handleKeyPress(e)} />}
    </>
  )
}

export default SearchBox