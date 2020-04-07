import React from "react";

const CheckoutSection = (props) => {
  const { total, toPay } = props;
  return (
    <div
      className="text-light"
      style={{ fontFamily: "robato", fontSized: "16px" }}
    >
      <div className="float-left pt-2">
        <div className="align-self-start">
          <h4>{total} Items</h4>
        </div>
        <div className="align-self-end">
          <h4>₹{toPay}</h4>
        </div>
      </div>
      <div className="float-right">
        <button
          className="align-self-start p-3 btn btn-sm text-light"
          onClick={() => {
            props.history.push("/check-out");
          }}
        >
          <h4>Check-Out</h4>
        </button>
      </div>
    </div>
  );
};

export default CheckoutSection;
