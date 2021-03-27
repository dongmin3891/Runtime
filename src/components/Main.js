import React from "react";

function Main() {
  return (
    <div>
      <section className="main">
        <div className="home">
          <h2>홈</h2>
        </div>
        <ul className="home_item">
          <li className="hom_item1">
            <a href="#">
              <img src="" alt="" />
              정보수정
            </a>
          </li>
          <li className="hom_item1">
            <a href="#">
              <img src="" alt="" /> 상품보기
            </a>
          </li>
          <li className="hom_item1">
            <a href="#">
              <img src="" alt="" /> 장바구니
            </a>
          </li>
          <li className="hom_item1">
            <a href="#">
              <img src="" alt="" /> 게시판
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Main;

/* eslint-disable jsx-a11y/anchor-is-valid  */
