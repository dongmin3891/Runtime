import React from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Main from "./components/Main";
import Admin from "./components/Admin";
import Item from "./components/Item";
import Cart from "./components/Cart";
import { Route } from "react-router";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Route path="/" component={Header} />
      <Route path="/" component={Main} exact />
      <Route path="/Admin" component={Admin} />
      <Route path="/Item" component={Item} />
      <Route path="/Cart" component={Cart} />
    </div>
  );
}

export default App;
