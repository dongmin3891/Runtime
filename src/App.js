import React from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Admin from "./Components/Admin";
import Item from "./Components/Item";
import { Route } from "react-router";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Route path="/" component={Header} />
      <Route path="/" component={Main} exact />
      <Route path="/Admin" component={Admin} />
      <Route path="/Item" componet={Item} />
    </div>
  );
}

export default App;
