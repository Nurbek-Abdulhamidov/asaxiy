import styled from "styled-components";

export const FooterDiv = styled.div`
  padding-top: 42px;
  padding-bottom: 27px;
  background-color: #008dff;
  position: relative;
`;
export const Features = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 15px;
`;

export const Features_List = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: #fff;
  margin-bottom: 40px;
  box-shadow: 0px 10px 30px rgb(209 213 223 / 50%);
  padding: 25px 50px;
  border-radius: 20px;

  @media (max-width: 1150px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

export const Feature__Item = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  line-height: 19px;

  i {
    font-size: 20px;
    cursor: pointer;
  }

  :hover div {
    transition: all 0.3s ease;
    transform: translateX(10px);
  }
  :not():hover div {
    transition: all 0.3s ease;
  }
`;

export const DivHover = styled.div`
  display: flex;
  gap: 14px;
  margin: 5px 0;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  line-height: 19px;
`;

export const Feature_Img = styled.div`
  margin-right: 20px;
`;

export const Feature_Text = styled.div`
  max-width: 260px;
  padding: 0 10px;
  h5 {
    font-size: 16px;
    font-weight: 500;
    color: #282830;
    line-height: 19px;
    margin-bottom: 4px;
  }

  p {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 21px;
    color: #858997;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

export const RowMd = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;

  img {
    height: 24px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    color: #fff;
    margin-bottom: 20px;
  }
`;

export const ColumnMd = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Footer__Bottom = styled.div`
  display: flex;
  justify-content: center;
  border-top: ${({ line }) =>
    line ? "0.2px solid rgba(255, 255, 255, 0.4)" : ""};
  border-bottom: ${({ line }) =>
    line ? "0.2px solid rgba(255, 255, 255, 0.4)" : ""};
  margin-top: ${({ line }) => (line ? "20px" : "")};
  padding: ${({ line }) => (line ? " 12px 0" : "")};

  p {
    color: #fff;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
`;
