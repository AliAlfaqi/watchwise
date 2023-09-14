import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import MediaItem from './MediaItem'

const Search = () => {
    const { searchResult } = useContext(SearchContext)

    return (
        <div className="row mb-5">
            {searchResult.length > 0 ? searchResult.slice(0, 10).map((item, index) => (
                <MediaItem index={index} item={item} />
            )) : <div className="d-flex justify-content-center align-items-center"><i className="fas fa-spin fa-spinner fa-4x"></i></div>}
        </div>
    )
}

export default Search