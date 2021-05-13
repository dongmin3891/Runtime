import React from "react";
import styled from "styled-components";

const CartSection = styled.section`
  margin: 120px 120px;

  h2 {
    font-size: 24px;
    font-weight: bold;
    border-left: 3px solid #ff4e00;
    margin: 20px 0 50px 20px;
    padding-left: 15px;
  }
`;

function Cart() {
  return (
    <>
      <CartSection>
        <section>
          <h2>장바구니</h2>
        </section>
      </CartSection>
    </>
  );
}

export default Cart;
