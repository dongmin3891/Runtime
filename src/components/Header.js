import React from "react";

function Header() {
  return (
    <div className="header">
      <a href="#">
        <h1 className="header_title">Shop</h1>
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
  );
}

export default Header;
