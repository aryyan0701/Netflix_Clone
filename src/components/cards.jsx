import React from "react";


export default function cards(props) {
  return (
  
    <>
      <div>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="" className="card_img" />
            </div>
            <div className="card_info">
                <h3 className="card_title">{props.sname}</h3>
                <a  href={props.link} target="blank">
                    <button className="card-link ">Watch Now</button>
                </a>
            </div>
        </div>
      </div>
    </>
  );
}
