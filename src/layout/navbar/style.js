import styled from "styled-components";

export const Header__top = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e6e8ee;
  padding: 17px 0;
`;

export const Header__bottom = styled.div`
  display: flex;
  justify-content: center;
  padding: 17px 0;

  span {
    font-size: 15px;
    font-weight: 500;
    color: #282830;
    line-height: 19px;
  }
`;

export const CountDiv = styled.div`
  position: relative;
`;

export const Count = styled.div`
  position: absolute;
  bottom: 28px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #008dff;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  p {
    font-size: 12px;
    color: #fff;
  }
`;

export const Header__top__group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header__bottom__group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header__logo = styled.div`
  margin-right: 20px;
`;

export const Header__search = styled.div`
  flex: 3;
  form {
    width: calc(100% - 1.5rem);
    height: 100%;
    display: flex;
    position: relative;
    background-color: #008dff;
    border-radius: 10px;
  }

  input {
    width: 100%;
    z-index: 2;
    padding: 5px 10px;
    color: #008dff;
    line-height: 16px;
    border: 2px solid #008dff;
    border-radius: 10px;
    padding: 7px;
    outline: none;
    ::placeholder {
      color: gray;
      font-size: 14px;
    }
  }

  button {
    display: flex;
    align-items: center;
    background-color: #008dff;
    font-size: 16px;
    border-radius: 0 10px 10px 0;
    border: none;
    outline: none;
    color: #fff;
    gap: 5px;
    margin-right: 10px;
    cursor: pointer;

    i {
      font-size: 20px;
      padding-top: 5px;
    }
  }
`;

export const Header__top_list = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 2;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;

    img {
      height: 24px;
    }

    i {
      font-size: 30px;
    }

    span {
      font-size: 14px;
      font-weight: normal;
      color: #000;
    }
  }
`;
