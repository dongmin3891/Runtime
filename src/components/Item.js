import React from "react";
import styled from "styled-components";
import item from "../shoes";

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
    text-align: center;
  }
  li {
  }

  .item__list {
    border: 1px solid #ddd;
    margin-left: 20px;
  }
  .item__box {
    padding: 15px;
    width: 300px;
    height: 450px;
  }
  .item__img {
    width: 100%;
  }
  .item__name {
    margin-top: 30px;
    padding-top: 15px;
    border-top: 1px solid #ddd;
    font-size: 18px;
  }
  .item__price {
    margin: 15px 0;
    font-size: 15px;
    color: yellowgreen;
  }
  .item__put__btn {
    background-color: orange;
    color: white;
    font-size: 16px;
    width: 60px;
    height: 40px;
    font-weight: bold;
    border-style: none;
    border-radius: 10px;
  }
  .item__put {
  }

  .order__list {
    margin-top: 40px;
    justify-content: center;
  }
  .order__items {
    margin-right: 10px;
  }
  .order__items__btn {
    width: 30px;
    height: 30px;
    border-color: blue;
    border-radius: 14px;
    background-color: white;
    color: blue;
    font-weight: bold;
  }
  span {
    display: block;
  }
`;

function Item() {

  console.log(item);

  return (
    <ItemSection>


      <section>
        <h2>상품</h2>
      </section>
      <ul>
        <li className="item__list">
          <div className="item__box">
            <img
              src="http://image.player.co.kr/goods_img1/20191010/1490570/1490570_a_500.jpg"
              className="item__img"
              alt="에어 맥스2"
            />
            <span className="item__name">에어 맥스2</span>
            <span className="item__price">129,000 원</span>
            <button className="item__put__btn">
              <span className="item__put">담기</span>
            </button>
          </div>
        </li>
        <li className="item__list">
          <div className="item__box">
            <img
              src="data:image/jpeg;base64,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"
              className="item__img"
              alt=""
            />
            <span className="item__name">에어 맥스97</span>
            <span className="item__price">100,000 원</span>
            <button className="item__put__btn">
              <span className="item__put">담기</span>
            </button>
          </div>
        </li>
        <li className="item__list">
          <div className="item__box">
            <img
              src="https://www.nike.com/kr/ko_kr/cmsstatic/product/CU8591-001/e5755bc8-9b5f-44b2-814f-a6d630a08ee9_primary.jpg?gallery"
              className="item__img"
              alt="에어 포스1"
            />
            <span className="item__name">에어 포스1</span>
            <span className="item__price">130,000 원</span>
            <button className="item__put__btn">
              <span className="item__put">담기</span>
            </button>
          </div>
        </li>
        <li className="item__list">
          <div className="item__box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBEKUwvYx5URK9477j8hHq5SWP459dYSnwmg&usqp=CAU"
              className="item__img"
              alt=""
            />
            <span className="item__name">에어 포스 1 쉐도우</span>
            <span className="item__price">200,000 원</span>
            <button className="item__put__btn">
              <span className="item__put">담기</span>
            </button>
          </div>
        </li>
        <li className="item__list">
          <div className="item__box">
            <img
              src="https://www.nike.com/kr/ko_kr/cmsstatic/product/CW2288-111/5d0b11ce-ebb2-4961-9664-cc7f77d1c165_primary.jpg?gallery"
              className="item__img"
              alt="에어 포스2"
            />
            <span className="item__name">에어 포스2</span>
            <span className="item__price">300,000원</span>
            <button className="item__put__btn">
              <span className="item__put">담기</span>
            </button>
          </div>
        </li>
      </ul>
      <ul className="order__list">
        <li className="order__items">
          <button className="order__items__btn">1</button>
        </li>
        <li className="order__items">
          <button className="order__items__btn">2</button>
        </li>
        <li className="order__items">
          <button className="order__items__btn">3</button>
        </li>
        <li className="order__items">
          <button className="order__items__btn">4</button>
        </li>
      </ul>
    </ItemSection>
  );
}

export default Item;
