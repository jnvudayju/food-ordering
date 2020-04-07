import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ItemsMenu = (props) => {
  const { Total, TotalPay, Items } = props.selectedItems;
  const list = [];

  let i = 0;
  for (const item in Items) {
    if (Items[item].Count > 0) {
      i++;
      list.push(
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={i}
        >
          <div className="align-self-center">
            <b>{item.toUpperCase()}</b>
            <br />
            <b>₹ {Items[item].Count * Items[item].Price}</b>
          </div>
          <h1>
            <span className="badge badge-danger badge-pill">
              {Items[item].Count}
            </span>
          </h1>
        </li>
      );
    }
  }

  return (
    <React.Fragment>
      <Navbar {...props} />
      {(Total <= 0 || Total === undefined) && (
        <div
          className="p-4 d-flex stylish-color-light"
          style={{ minHeight: "80vh" }}
        >
          <div className="align-self-center mx-auto">
            <p className="h2">Your cart is empty</p>
            <div style={{ paddingLeft: "65px" }}>
              <button
                className="btn btn-danger btn-lg"
                onClick={() => {
                  props.history.push("/items-menu");
                }}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      )}
      {Total > 0 && (
        <div className="p-1" style={{ minHeight: "70vh" }}>
          <div className="d-flex align-items-center p-1">
            <div className="align-self-center pl-4">
              <h3>
                <span className="badge badge-dark">Address : </span>
              </h3>
            </div>
            <div className="align-self-center pl-2">
              <p className="h5">Jadavpur,Kolkata, WestBengal, India, 700000</p>
            </div>
          </div>

          <ul className="list-group rounded p-4 pt-0">
            {list}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="align-self-center">
                <b className="h2">Total: ₹{TotalPay}</b>
              </div>
              <h1>
                <span className="badge badge-danger badge-pill">
                  {Total} Items
                </span>
              </h1>
            </li>
          </ul>

          <div className="mx-auto text-center pb-4">
            <button
              className="btn btn-lg btn-outline-danger px-4 m-2"
              onClick={() => {
                alert(`Order Placed! \n You Paid ₹${TotalPay}`);
                props.resetOrders();
              }}
            >
              Pay
            </button>
            <button
              className="btn btn-lg btn-outline-danger m-2"
              onClick={() => {
                props.history.push("/items-menu");
              }}
            >
              Shop More
            </button>
          </div>
        </div>
      )}
      <Footer />
    </React.Fragment>
  );
};
export default ItemsMenu;
