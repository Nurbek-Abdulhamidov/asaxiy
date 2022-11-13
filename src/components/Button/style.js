import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "light":
      return {
        background: "#00CD98",
      };
    default:
      return {
        background: "#008dff  ",
        color: "#ffff",
      };
  }
};

export const Btn = styled.button`
  color: #fff;
  border-radius: 10px;
  /* background-color: ${({ rang }) => (rang ? "red" : "#008dff")}; */
  font-size: 13px;
  outline: none;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  ${getType}

  :hover {
    background-color: #0071cc;
  }
`;
