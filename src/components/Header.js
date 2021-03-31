import React from "react";
import styled from "styled-components";

const Navbar = styled.div`
  background-color: black;
  padding-top: 48px;
  padding-left: 48px;
  h1 {
    color: red;
    font-size: 34px;
  }

  a {
    color: white;
  }

  ul {
  }
  li {
    display: inline-block;
    margin-right: 15px;
    font-size: 20px;
  }
`;

function Header() {
  return (
    <Navbar>
      <div className="header">
        {/* eslint-disable jsx-a11y/anchor-is-valid  */}
        <a href="#">
          <h1 className="header_title">Dong Dong Shop</h1>
        </a>
        <ul>
          <li>
            <a href="">내 정보</a>
          </li>
          <li>
            <a href="">상품</a>
          </li>
          <li>
            <a href="">장바구니</a>
          </li>
          <li>
            <a href="">게시판</a>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}

export default Header;
