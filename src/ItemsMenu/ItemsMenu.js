import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

//Section
import Item from "./Sections/Item";
import CheckoutSection from "./Sections/CheckoutSection";

const ItemsMenu = (props) => {
  const { avilableItems, selectedItems } = props;

  const populateItems = () => {
    const outerList = [];
    for (let i = 0; i < avilableItems.length; i++) {
      const innerList = [];
      const item = avilableItems[i].Items;
      for (let j = 0; j < item.length; j++) {
        const temp = item[j];
        const count =
          selectedItems.Items[temp.id] === undefined
            ? 0
            : selectedItems.Items[temp.id].Count;

        innerList.push(
          <Item
            key={temp.id}
            itemDetails={temp}
            count={count}
            handleCounter={(currentCount, id) => {
              countHandler(currentCount, id);
            }}
          />
        );
      }
      outerList.push(
        <div className="card" key={i}>
          <div className="card-header">
            <h1 className="text-center">{avilableItems[i].Catagery}</h1>
          </div>
          <div className="card-deck p-4">{innerList}</div>
        </div>
      );
    }
    return outerList;
  };

  const countHandler = (currentCount, id) => {
    const itemObject = { ...selectedItems };

    let total = itemObject.Total;
    let totalPay = itemObject.TotalPay;
    let price = 0;

    for (let i = 0; i < avilableItems.length; i++) {
      const item = avilableItems[i].Items;
      for (let j = 0; j < item.length; j++) {
        if (item[j].id === id) {
          price = item[j].Price;
        }
      }
    }

    if (itemObject.Items[id] === undefined) {
      total++;
      totalPay += price;
    } else {
      if (currentCount > itemObject.Items[id].Count) {
        total++;
        totalPay += price;
      } else {
        total--;
        totalPay -= price;
      }
    }

    itemObject.Total = total;
    itemObject.TotalPay = totalPay;
    itemObject.Items[id] = {
      Count: currentCount,
      Price: price,
    };

    props.handleCounter(itemObject);
  };

  return (
    <div>
      <Navbar {...props} />
      {selectedItems.Total > 0 && (
        <div
          className="px-3 my-2 mx-4 fixed-bottom bg-danger"
          style={{ borderRadius: "25px" }}
        >
          <CheckoutSection
            total={selectedItems.Total}
            toPay={selectedItems.TotalPay}
            {...props}
          />
        </div>
      )}
      <div className="p-4" id="main">
        {populateItems()}
      </div>
      <Footer />
    </div>
  );
};
export default ItemsMenu;
