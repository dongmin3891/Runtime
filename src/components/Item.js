import React from "react";
import styled from "styled-components";

const ItemSection = styled.section`
  margin: 120px 120px;

  /* main title */
  h2 {
    font-size: 24px;
    font-weight: bold;
    border-left: 3px solid #ff4e00;
    margin: 20px 0 50px 20px;
    padding-left: 15px;
  }
`;

function Item() {
  return (
    <ItemSection>
      <section>
        <h2>상품</h2>
      </section>

      <ul>
        <li>
          <div>
            <img src="" alt="" />
            <span>1</span>
            <span>100,000</span>
            <button>
              <img src="" alt="" />
              <span>담기</span>
            </button>
          </div>
        </li>
        <li>
          <div>
            <img src="" alt="" />
            <span>1</span>
            <span>100,000</span>
            <button>
              <img src="" alt="" />
              <span>담기</span>
            </button>
          </div>
        </li>
        <li>
          <div>
            <img src="" alt="" />
            <span>1</span>
            <span>100,000</span>
            <button>
              <img src="" alt="" />
              <span>담기</span>
            </button>
          </div>
        </li>
        <li>
          <div>
            <img src="" alt="" />
            <span>1</span>
            <span>100,000</span>
            <button>
              <img src="" alt="" />
              <span>담기</span>
            </button>
          </div>
        </li>
      </ul>
    </ItemSection>
  );
}

export default Item;
