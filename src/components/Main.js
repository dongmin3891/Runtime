import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArchive,
  faShoppingCart,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

function Main() {
  return (
    <div>
      {/* eslint-disable jsx-a11y/anchor-is-valid  */}
      <section className="main">
        <div className="home">
          <h2>홈</h2>
        </div>
        <ul className="home_item">
          <li className="home_item1">
            <a href="">
              <div className="item_inner">
                <FontAwesomeIcon icon={faUser} size="2x" />
              </div>
              정보수정
            </a>
          </li>
          <li className="home_item1">
            <a href="#">
              <div className="item_inner">
                <FontAwesomeIcon icon={faArchive} size="2x" />
              </div>
              <img src="" alt="" /> 상품보기
            </a>
          </li>
          <li className="home_item1">
            <a href="#">
              <div className="item_inner">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
              </div>
              <img src="" alt="" /> 장바구니
            </a>
          </li>
          <li className="home_item1">
            <a href="#">
              <div className="item_inner">
                <FontAwesomeIcon icon={faBookOpen} size="2x" />
              </div>
              <img src="" alt="" /> 게시판
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Main;
