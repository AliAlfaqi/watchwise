import React, { useContext } from 'react'
import { MediaContext } from '../context/MediaContext'

const Pagination = ({ media }) => {

    const { trendingMovies, getTrending, setTrendingMovies, setTrendingTv, setGlobalPage, globalPage } = useContext(MediaContext)
    const pageNumber = [1, 2, 3, 4, 5];
    let mediaSetter = null
    if (media == "movie") {
        mediaSetter = setTrendingMovies
    } else if (media == "tv") {
        mediaSetter = setTrendingTv
    }

    const setNextPage = () => {
        getTrending(media, mediaSetter, globalPage + 1)
        console.log(media);
    }
    const setPrevtPage = () => {
        getTrending(media, mediaSetter, globalPage - 1)
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination d-flex justify-content-center my-5">
                <li className="page-item" onClick={setPrevtPage}>
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {pageNumber.map((page, index) => <li className="page-item" onClick={() => getTrending(media, mediaSetter, page)}><a className="page-link" href="#">{page}</a></li>)}

                <li className="page-item" onClick={setNextPage}>
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav >
    )
}

export default Pagination