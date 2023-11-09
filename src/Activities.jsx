import React from "react";

const Activities = (props) => {
  let badgeText = "";

  if (props.item.openSpots === "0") {
    badgeText = "SOLD OUT";
  } else if (props.item.country === "online" && props.item.openSpots > "0") {
    badgeText = "ONLINE";
  }
  return (
    <div className="cards">
      {badgeText && <p className="status">{badgeText}</p>}
      <img src={`assets/${props.item.image}`} alt="zaferesImg" className="image" />
      <div className="desc">
        <div className="rating">
          <img src="assets/Star.png" alt="star" />
          <p>{props.item.rating}</p>
          <p>({props.item.review}) .</p>
          <p>{props.item.country}</p>
        </div>
        <p className="title">{props.item.service}</p>
        <p className="price">
          <span className="bold">From{props.item.cost}</span>/person
        </p>
      </div>
    </div>
  );
};

export default Activities;
