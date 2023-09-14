import React, { useContext } from 'react'
import { MediaContext } from '../context/MediaContext'
import MediaItem from './MediaItem'
import Pagination from './Pagination'

export default function Tv() {
    const { trendingTv } = useContext(MediaContext)
    return (
        <>
            <div className="row mb-5">
                {trendingTv.length > 0 ? trendingTv.map((item, index) => (
                    <MediaItem index={index} item={item} />
                )) : <div className="d-flex justify-content-center align-items-center"><i className="fas fa-spin fa-spinner fa-4x"></i></div>}
            </div>
            <Pagination media={"tv"} />
        </>
    )
}
