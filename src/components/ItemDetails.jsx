import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ItemDetails() {

    let { id, media_type } = useParams();
    const [itemDetails, setitemDetails] = useState({})
    async function getitemDetails(id, media_type) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=1c76d8cad246ccd99e5b58258055a6ad&language=en-US`);
        setitemDetails(data);
    }
    useEffect(() => {
        getitemDetails(id, media_type);
        console.log(itemDetails.genres);
    }, [])

    return <>
        <div className="row">
            <div className="col-md-3">
                <img src={"https://image.tmdb.org/t/p/w500" + itemDetails.poster_path} className="w-100" alt="" />
            </div>
            <div className="col-md-9">
                <h3>{itemDetails.title} {itemDetails.name}</h3>
                <div className='d-flex my-2'>
                    {itemDetails.genres?.map((genre) => <div className='bg-info rounded me-1 p-1'>{genre.name}</div>)}
                </div>
                <p className='text-muted'>{itemDetails.overview}</p>

            </div>
        </div>
    </>
}
