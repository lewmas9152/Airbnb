import { useState } from "react";
import "./App.css";
import Activities from "./Activities";
import data from "./Api";
import Top from "./Top";

function App() {
  
  const cards = data.map((item) => {
    return (
      
      <Activities
        key= {item.id}
        img={item.image}
        rate={item.rating}
        review={item.review}
        country={item.country}
        title={item.service}
        price={item.cost}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <div className="main">
       
    <Top />
      <div className="card-elements">
      {cards}
      </div>
    </div>
  );
}

export default App;
