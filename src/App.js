import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ItemsMenu from "./ItemsMenu/ItemsMenu";
import CheckOut from "./CheckOut/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";

//Import Data
import Items from "./Database/VirtualDatabase";

function App() {
  const [items, setItems] = React.useState({
    Total: 0,
    TotalPay: 0,
    Items: {},
  });

  return (
    <div className="">
      <Router>
        <Switch>
          <Route
            exact
            path="/items-menu"
            component={(props) => (
              <ItemsMenu
                handleCounter={(items) => {
                  setItems(items);
                }}
                avilableItems={Items}
                selectedItems={items}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/check-out"
            component={(props) => (
              <CheckOut
                resetOrders={() => {
                  setItems({
                    Total: 0,
                    TotalPay: 0,
                    Items: {},
                  });
                }}
                selectedItems={items}
                {...props}
              />
            )}
          />
          <Route
            path="*"
            component={() => (
              <div>
                <p>Page Not Found</p>
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
