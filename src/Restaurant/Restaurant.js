import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import Food from "../Assets/img/carousel/food.jpg";

//Section
import Carousel from "./Section/Carousel";

const Restaurant = (props) => {
  return (
    <React.Fragment>
      <Navbar {...props} />
      <div>
        <div
          className="container-fluid p-4"
          style={{ margin: "0px", height: "26vh" }}
        >
          <div
            className="float-left pl-5"
            style={{ height: "18vh", width: "60vw" }}
          >
            <h1 className="display-4 bold" style={{ fontFamily: "robato" }}>
              The Park Restaurant
            </h1>
            <p className="lead">delicious food and great company</p>
          </div>
          <div className="text-center float-right">
            <p className="badge badge-success">4.8</p>
            <br />
            <div className="badge badge-warning">
              <p className="justify-content-start">1001</p>
              <p className="justify-content-end">Reviews</p>
            </div>
          </div>
        </div>
        <Carousel />
        <div className="p-4">
          <p className="h2">About Our Restaurant</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="text-center">
            <button
              style={{ fontSize: "40px" }}
              className="btn btn-outline-danger px-5"
              onClick={() => {
                props.history.push("/items-menu");
              }}
            >
              Menu
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Restaurant;
