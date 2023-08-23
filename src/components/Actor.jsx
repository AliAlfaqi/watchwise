import React from 'react'

const Actor = ({ item, index }) => {
    return (
        <>
            <div className='col-md-2'>
                <div className="position-relative">
                    <img src={"https://image.tmdb.org/t/p/w500" + item.profile_path} className="w-100" alt="" />
                    <h3 className="h6">{item.name ?? item.title}</h3>
                    <div className="vote p-2 text-white position-absolute top-0 end-0">
                        {item.popularity.toFixed(1)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Actor