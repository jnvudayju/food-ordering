import React from "react";

import Food from "../../Assets/img/carousel/food.jpg";
import Table from "../../Assets/img/carousel/tables.jpg";
import Counter from "../../Assets/img/carousel/counter.jpg";

const Carousel = (props) => {
  const size = 3;
  const [carousel, setCarousel] = React.useState({ active: 0 });

  const mod = (x, m) => {
    while (x < 0) {
      x += m;
    }
    return x % m;
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div
          className={`carousel-item ${carousel.active === 0 ? "active" : ""}`}
        >
          <img src={Food} className="d-block w-100 " alt="Food" />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div
          className={`carousel-item ${carousel.active === 1 ? "active" : ""}`}
        >
          <img src={Table} className="d-block w-100" alt="Table" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div
          className={`carousel-item ${carousel.active === 2 ? "active" : ""}`}
        >
          <img src={Counter} className="d-block w-100" alt="Counter" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href=""
        role="button"
        data-slide="prev"
        onClick={(e) => {
          e.preventDefault();
          const temp = mod(carousel.active - 1, size);
          setCarousel({ active: temp });
        }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href=""
        role="button"
        data-slide="next"
        onClick={(e) => {
          e.preventDefault();
          const temp = mod(carousel.active + 1, size);
          setCarousel({ active: temp });
        }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
