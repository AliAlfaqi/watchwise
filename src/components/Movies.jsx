import React, { useContext } from 'react'
import MediaItem from './MediaItem'
import { MediaContext } from '../context/MediaContext'
import Pagination from './Pagination'

export default function Movies() {
    const { trendingMovies } = useContext(MediaContext)
    return (
        <>
            <div className="row mb-5">
                {trendingMovies.length > 0 ? trendingMovies.map((item, index) => (
                    <MediaItem index={index} item={item} />
                )) : <div className="d-flex justify-content-center align-items-center"><i className="fas fa-spin fa-spinner fa-4x"></i></div>}
            </div>
            <Pagination media={"movie"} />
        </>
    )
}
