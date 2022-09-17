import React from "react";
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import { MdAlbum } from "react-icons/md";
import { BsCaretDown } from "react-icons/bs";

const Track = (props) => {
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          
          <p className="card-text">
            <strong>
              <AiFillPlayCircle />
              Artist
            </strong>
            :{track.track_name}
            <br />
            <strong>
              <MdAlbum />
              Album
            </strong>
            :{track.album_name}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <BsCaretDown />
            View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Track;
