import React from "react";
import styled from "styled-components";

const ItemSection = styled.section`
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
  ul {
    display: flex;
  }
  .item__list {
    border: 1px solid #ddd;
  }

  span {
    display: block;
  }
`;

function Item() {
  return (
    <ItemSection>
      <section>
        <h2>상품</h2>
      </section>
      <ul>
        <li className="item__list">
          <div>
            <img src="" alt="" />
            <span>나이키</span>
            <span>100,000</span>
            <button>
              <img src="" alt="" />
              <span>담기</span>
            </button>
          </div>
        </li>
        <li className="item__list">
          <div>
            <img src="" alt="" />
            <span>에어맥스</span>
            <span>100,000</span>
            <button>
              <img src="" alt="" />
              <span>담기</span>
            </button>
          </div>
        </li>
        <li className="item__list">
          <div>
            <img src="" alt="" />
            <span>에어포스</span>
            <span>100,000</span>
            <button>
              <img src="" alt="" />
              <span>담기</span>
            </button>
          </div>
        </li>
        <li className="item__list">
          <div>
            <img src="" alt="" />
            <span>운동화</span>
            <span>100,000</span>
            <button>
              <img src="" alt="" />
              <span>담기</span>
            </button>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <button>1</button>
        </li>
        <li>
          <button>2</button>
        </li>
        <li>
          <button>3</button>
        </li>
        <li>
          <button>4</button>
        </li>
      </ul>
    </ItemSection>
  );
}

export default Item;
