import React from "react";
import { Link } from "react-router-dom";

export default function MediaItem({ item  ,index}) {
  return (
    <>
      <div className="col-md-2" key={index}>
        <Link to={`/itemdetails/${item.id}/${item.media_type}`}>

          <div className="movie position-relative">
            <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path} className="w-100" alt="" />
            <h3 className="h6">{item.name??item.title}</h3>
            <div className="vote p-2 text-white position-absolute top-0 end-0">
              {item.vote_average.toFixed(1)}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
