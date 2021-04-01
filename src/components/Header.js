import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  * {
    box-sizing: border-box;
  }

  /* header 영역 전체 */
  display: flex;
  background-color: #383838;
  padding: 18px;

  .title_anker {
    margin-right: 120px;
  }

  /* header title */

  h1 {
    color: orange;
    font-size: 30px;
    font-weight: bold;
  }

  /* header item_list */
  ul {
    display: flex;
  }
  li {
    margin-right: 48px;
    font-size: 20px;
    padding-top: 7px;
  }

  li a {
    color: white;
  }

  li a:hover {
    color: orange;
    transition: all 0.8s;
  }
`;

function Header() {
  return (
    <Navbar>
      <>
        {/* eslint-disable jsx-a11y/anchor-is-valid  */}

        <a className="title_anker" href="#">
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
      </>
    </Navbar>
  );
}

export default Header;
