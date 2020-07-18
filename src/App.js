import React from "react";
import { Switch, Route } from "react-router-dom";
import "./sass/base/_reset.scss";
import "./sass/base/_base.scss";
import "./sass/base/_typography.scss";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
