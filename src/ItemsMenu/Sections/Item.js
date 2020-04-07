import React from "react";

import VegRoll from "../../Assets/img/veg-roll.jpg";
import EggRoll from "../../Assets/img/egg-roll.jpg";
import ChickenRoll from "../../Assets/img/chicken-roll.jpg";
import VegBiryani from "../../Assets/img/veg-biryani.jpg";
import EggBiryani from "../../Assets/img/egg-biryani.jpg";
import ChickenBiryani from "../../Assets/img/chicken-biryani.jpg";
import MuttonBiryani from "../../Assets/img/mutton-biryani.jpg";
import VegThali from "../../Assets/img/veg-thali.jpg";
import NonVegThali from "../../Assets/img/non-veg-thali.jpg";

const Item = (props) => {
  const Image = {
    "Assets/img/veg-roll.jpg": VegRoll,
    "Assets/img/egg-roll.jpg": EggRoll,
    "Assets/img/chicken-roll.jpg": ChickenRoll,
    "Assets/img/veg-biryani.jpg": VegBiryani,
    "Assets/img/egg-biryani.jpg": EggBiryani,
    "Assets/img/chicken-biryani.jpg": ChickenBiryani,
    "Assets/img/mutton-biryani.jpg": MuttonBiryani,
    "Assets/img/veg-thali.jpg": VegThali,
    "Assets/img/non-veg-thali.jpg": NonVegThali,
  };

  const size = { width: "200px", height: "200px" };
  const { itemDetails, count } = props;
  const price = itemDetails.Price;
  const src = itemDetails.img;
  const alt = itemDetails.ItemName;
  const description = itemDetails.ItemDescription;
  const id = itemDetails.id;

  const buttonSelector = () => {
    if (count > 0) {
      return (
        <div
          className="rounded border border-danger ml-5 m-0 card-text"
          style={{ width: "130px", height: "40px" }}
        >
          <button
            className="btn text-danger float-left"
            onClick={() => {
              props.handleCounter(count - 1, id);
            }}
          >
            -
          </button>
          <span className="badge badge-danger">
            <h5 className="px-1">{count}</h5>
          </span>
          <button
            className="btn text-danger float-right"
            onClick={() => {
              props.handleCounter(count + 1, id);
            }}
          >
            +
          </button>
        </div>
      );
    }

    return (
      <button
        className="btn btn-outline-danger text-center"
        onClick={() => {
          props.handleCounter(1, id);
        }}
      >
        add +
      </button>
    );
  };

  return (
    <div className="card" style={{ maxWidth: "16.5rem" }}>
      <img
        src={Image[src]}
        className="card-img-top"
        alt={alt}
        width={size.width}
        height={size.height}
      />
      <div className="text-center card-body">
        <h5 className="card-title">{alt}</h5>
        <p className="card-text">{description}</p>
        <b className="card-text">₹{price}</b>
        <br />
        <br />
        {buttonSelector()}
      </div>
    </div>
  );
};

export default Item;
