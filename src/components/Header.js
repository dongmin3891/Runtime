import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

  li .link {
    color: white;
  }

  li .link:hover {
    color: orange;
    transition: all 0.8s;
  }
`;

function Header() {
  return (
    <Navbar>
      <>
        {/* eslint-disable jsx-a11y/anchor-is-valid  */}

        <Link to="/" className="title_anker">
          <h1 className="header_title">Dong Dong Shop</h1>
        </Link>

        <ul>
          <li>
            <Link to="/Admin" className="link">
              내 정보
            </Link>
          </li>
          <li>
            <Link to="/Item" className="link">
              상품
            </Link>
          </li>
          <li>
            <Link to="/Cart" className="link">
              장바구니
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              게시판
            </Link>
          </li>
        </ul>
      </>
    </Navbar>
  );
}

export default Header;
