import React from "react";
import Products from "./products";

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-black text-white border-0">
        <img src="/image/landpage.jpg" class="card-img opacity-50" alt="background"  height="600px"/>
        <div class="card-img-overlay d-flex  flex-column justify-content-center">

          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0 ">NEW SEASION ARRIVALS</h5>
            <p class="card-text  lead fs-2">
               CHECK OUT ALL THE TRENDS
                </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
