import React from "react";
import Header from "./Components/Header";
import styled from "styled-components";

const AdminSection = styled.section`
  * {
    box-sizing: border-box;
  }
  div {
    display: flex;
    align-items: center;
  }
  span {
    display: block;
  }

  label {
    vertical-align: baseline;
  }
  .imgUrl {
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: block;
    background-color: grey;
    background-image: url("http://superkts.com/img/css/bg0426.gif");
    background-repeat: no-repeat;
    background-size: cover;
  }

  #file {
    display: none;
  }
`;
function Fiex(){
    return(
    <>
        <Header/>
    </>
);}
function Admin() {
  return (
      {Fiex}
    <AdminSection>
      <>
        <section>
          <h1>내 정보</h1>
          <div>
            <span>사진</span>
            <input id="file" type="file" accept="image/*" />
            <label for="file">
              <div className="imgUrl"></div>
            </label>
            <button>사진 내리기</button>
          </div>
          <div>
            <span>이메일</span>
            <p>rlaehdals753@naver.com</p>
          </div>
          <div>
            <span>이름</span>
            <input type="text" />
          </div>
          <div>
            <span>소개</span>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <button></button>
            <button></button>
          </div>
        </section>
      </>
    </AdminSection>
  );
}

export default Admin;
