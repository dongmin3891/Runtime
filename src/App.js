import React from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Admin from "./Components/Admin";
import { Route } from "react-router";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Route path="/" component={Header} exact />
      <Route path="/" component={Main} exact />
      <Route path="/Admin" component={Admin} exact />
    </div>
  );
}

export default App;
