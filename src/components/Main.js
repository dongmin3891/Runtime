import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArchive,
  faShoppingCart,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

/* Main영역 전체 */
const MainSection = styled.div`
  margin: 120px 120px;

  * {
    box-sizing: border-box;
  }

  /* main title */
  h2 {
    font-size: 24px;
    font-weight: bold;
    border-left: 3px solid #ff4e00;
    margin: 20px 0 50px 20px;
    padding-left: 15px;
  }

  /* main item_list */
  ul {
    display: flex;
    flex-wrap: wrap;
    color: #383838;
  }

  li {
    flex-basis: 25%;
    max-width: 25%;
    padding: 15px;
    text-align: center;
  }

  li:hover {
    color: orange;
    transition: all 0.8s;
  }

  a {
    display: block;
    border: 2px solid #999;
    border-radius: 8px;
    padding: 40px 0;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
  }
`;

function Main() {
  return (
    <MainSection>
      <>
        {/* eslint-disable jsx-a11y/anchor-is-valid  */}
        <section className="main">
          <h2>홈</h2>

          <ul className="home_item">
            <li className="home_item1">
              <a href="">
                <FontAwesomeIcon icon={faUser} size="3x" />
                <h3>정보수정</h3>
              </a>
            </li>
            <li className="home_item1">
              <a href="#">
                <FontAwesomeIcon icon={faArchive} size="3x" />

                <h3>상품보기</h3>
              </a>
            </li>
            <li className="home_item1">
              <a href="#">
                <FontAwesomeIcon icon={faShoppingCart} size="3x" />

                <h3>장바구니</h3>
              </a>
            </li>
            <li className="home_item1">
              <a href="#">
                <FontAwesomeIcon icon={faBookOpen} size="3x" />

                <h3>게시판</h3>
              </a>
            </li>
          </ul>
        </section>
      </>
    </MainSection>
  );
}

export default Main;
