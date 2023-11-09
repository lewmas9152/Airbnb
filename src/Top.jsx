import React from "react";

const Top = () => {
  return (
    <>
      <main className="container">
        <nav>
          <img src="assets/airbnb logo.png" alt="airbnb-logo" />
        </nav>

        <header>
          <img
            src="assets/headerImgs.png"
            alt="headerImg"
            className="headerImg"
          />
        </header>

        <div className="card">
          <h1>Online Experiences</h1>
          <p className="join">
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </main>
    </>
  );
};

export default Top;
