import styled from "styled-components";

export const Aside = styled.aside`
  border-radius: 20px;
  height: 100%;
  padding: 15px;
  max-width: 289px;
  min-width: 130px;
  box-shadow: 0 10px 30px rgb(209 213 223 / 50%);
  background-color: #fff;
  padding-top: 20px;
`;

export const Aside_Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 16px;
    color: #858997;
  }
`;

export const Aside_Body = styled.div`
  border-bottom: 1px solid #eeeff3;
  padding: 16px 0px;
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }
`;

export const Aside_Img = styled.div`
  img {
    max-width: 80px;
    min-height: 80px;
  }
`;

export const Aside_Data = styled.div`
  h6 {
    text-overflow: ellipsis;
    margin: 0;
    font-size: 16px;
    color: #000;
  }

  p {
    padding-top: 5px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: normal;
    font-size: 14px;
    color: #858997;
  }
`;
