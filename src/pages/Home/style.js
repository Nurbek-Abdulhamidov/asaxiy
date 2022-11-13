import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Left = styled.div`
  flex: 2;
  padding-right: 10px;
`;

export const Right = styled.div`
  flex: 7;
  padding: 0 20px;
`;
export const Space = styled.div`
  margin-bottom: 10px;
`;
export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`;
