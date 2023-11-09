import React from "react";

const Activities = (props) => {
  let badgeText = "";

  if (props.openSpots === "0") {
    badgeText = "SOLD OUT";
  } else if (props.country === "online" && props.openSpots > "0") {
    badgeText = "ONLINE";
  }
  return (
    <div className="cards">
      {badgeText && <p className="status">{badgeText}</p>}
      <img src={`assets/${props.img}`} alt="zaferesImg" className="image" />
      <div className="desc">
        <div className="rating">
          <img src="assets/Star.png" alt="star" />
          <p>{props.rate}</p>
          <p>({props.review}) .</p>
          <p>{props.country}</p>
        </div>
        <p className="title">{props.title}</p>
        <p className="price">
          <span className="bold">From{props.price}</span>/person
        </p>
      </div>
    </div>
  );
};

export default Activities;
