import React from "react";

export default function cards(props) {
  return (
    <>
      <div>
        <div className="cards">
            <div className="card">
                <img src="" alt="" className="card_img" />
            </div>
            <div className="card_info">
                <span className="card_category">{props.title}</span>
                <h3 className="card_title">{props.sname}</h3>
                <a href={props.link} target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
      </div>
    </>
  );
}
