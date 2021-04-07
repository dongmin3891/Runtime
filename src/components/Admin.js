import React from "react";
import styled from "styled-components";

const AdminSection = styled.section`
  margin: 120px 120px;

  * {
    box-sizing: border-box;
  }

  form {
    display: block;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    border-left: 3px solid #ff4e00;
    margin: 20px 0 50px 20px;
    padding-left: 15px;
  }

  .admin_box {
    width: 400px;
  }

  .item_list {
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-bottom: 20px;
    font-size: 0.875rem;
  }
  span {
    display: block;
    flex-basis: 100px;
  }

  label {
    vertical-align: baseline;
  }
  .imgUrl {
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 6px;
    display: block;
    background-color: grey;
    background-image: url("http://superkts.com/img/css/bg0426.gif");
    background-repeat: no-repeat;
    background-size: cover;
  }

  #file {
    display: none;
  }
  .picture_button {
    font-size: 0.75rem;
    align-items: fiex-end;
    margin-left: 10px;
    background-color: #383838;

    padding: 3px 5px;
  }
  .button_save {
    color: yellowgreen;
  }
  .button_logout {
    color: red;
  }
  button {
    cursor: pointer;
    border-radius: 6px;
  }
`;

function Admin() {
  return (
    <>
      <AdminSection>
        <section>
          <h1>내 정보</h1>
          <form className="admin_box" action="">
            <div className="item_list">
              <span>사진</span>
              <input id="file" type="file" accept="image/*" />
              <label for="file">
                <div className="imgUrl"></div>
              </label>
              <button className="picture_button">사진 내리기</button>
            </div>
            <div className="item_list">
              <span>이메일</span>
              <p>rlaehdals753@naver.com</p>
            </div>
            <div className="item_list">
              <span>이름</span>
              <input type="text" />
            </div>
            <div className="item_list">
              <span>소개</span>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="item_list">
              <button className="button_save">저장하기</button>
              <button className="button_logout">로그아웃</button>
            </div>
          </form>
        </section>
      </AdminSection>
    </>
  );
}

export default Admin;
