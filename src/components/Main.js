import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

  .link {
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
              <Link to="/Admin" className="link">
                <FontAwesomeIcon icon={faUser} size="3x" />
                <h3>정보수정</h3>
              </Link>
            </li>
            <li className="home_item1">
              <Link to="/" className="link">
                <FontAwesomeIcon icon={faArchive} size="3x" />
                <h3>상품보기</h3>
              </Link>
            </li>
            <li className="home_item1">
              <Link to="/" className="link">
                <FontAwesomeIcon icon={faShoppingCart} size="3x" />
                <h3>장바구니</h3>
              </Link>
            </li>
            <li className="home_item1">
              <Link to="/" className="link">
                <FontAwesomeIcon icon={faBookOpen} size="3x" />
                <h3>게시판</h3>
              </Link>
            </li>
          </ul>
        </section>
      </>
    </MainSection>
  );
}

export default Main;
/* 
취직했어요


준비한 기간과 생각했던 연봉에 비하면

아쉬움이 남지만

면접볼 때 이 사람들은 믿고 따라가도 괜찮겠다 싶어서 확정을 지었네요.

오늘은 쉬고 내일부터 다시 제 커리어를 위해서 꾸준히 노력하고 회사에 도움될 수 있는 인재로 거듭하기 위해 열심히 해볼게요

감사합니다.
*/
