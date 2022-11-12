import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 15px;
`;

export const Href = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 5px;
  cursor: pointer;
  color: #fff;

  :hover span {
    transition: all 0.3s ease;
    color: #008dff;
  }
`;

export const Icon = styled.i`
  svg {
    padding-top: 5px;
    color: #008dff;
  }
`;
