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
    </ItemSection>
  );
}

export default Item;
