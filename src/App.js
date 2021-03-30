import React from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Main />
    </div>
  );
}

export default App;
