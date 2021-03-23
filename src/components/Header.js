import React from "react";

function Header() {
  return (
    <div>
      <div className="title">
        <h1>Dong Dong Mall</h1>
      </div>
      <div className="itemList">
        <button className="item_btn">모두보기</button>
        <button className="item_btn">아우터</button>
        <button className="item_btn">상의</button>
        <button className="item_btn">하의</button>
        <button className="item_btn">악세사리</button>
      </div>
    </div>
  );
}

export default Header;
