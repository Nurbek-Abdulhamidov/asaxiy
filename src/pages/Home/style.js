import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Left = styled.div`
  flex: 2;
  padding-right: 10px;
`;

export const Right = styled.div`
  flex: 7;
  padding: 0 20px;
  @media (max-width: 550px) {
    padding: 0;
  }
`;
export const Space = styled.div`
  margin-bottom: 10px;
`;
export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  @media (max-width: 1160px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 940px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 730px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
