import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  padding: 15px;
  background-color: #fff;
  outline: 0;
  transition: all 0.2s ease;
  border-radius: 20px;
  height: 100%;
  max-width: 289px;
  min-width: 200px;
  box-shadow: 0px 10px 30px rgb(209 213 223 / 50%);

  :hover a {
    color: #007bff;
    cursor: pointer;
  }
`;

export const Busket = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  background-color: #0071cc;
  color: #fff;
  padding: 4px 8px;
  border-radius: 10px;
  cursor: pointer;
`;

export const Heart = styled.div`
  position: absolute;
  top: 50px;
  right: 17px;
  font-size: 26px;
  color: #c9cdd6;
  padding: 4px 8px;
  cursor: pointer;
`;

export const Skidka = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
  border-radius: 5px;
  font-size: 12px;
  color: #ffff;
  padding: 4px 8px;
  cursor: pointer;
  background-color: #ff9800;
`;

export const Product_Item_Img = styled.div`
  display: flex;
  justify-content: center;
  img {
    height: 160px;
  }
`;

export const Product__Item_Info = styled.div`
  a {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 10px;
    transition: color 0.2s ease;
    font-size: 14px;
    color: inherit;
    line-height: 20px;
    text-decoration: none;
    text-decoration: none;
    font-weight: 500;
  }
`;

export const Product_Item_Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  i {
    font-size: 16px;
    color: #008dff;
  }

  span {
    margin-left: 5px;
    font-size: 12px;
    line-height: 20px;
    color: #c2c6d1;
  }
`;

export const MessageIcon = styled.div`
  color: #c2c6d1;
  font-size: 14px;
`;

export const Product_Item_Info_price = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;

  span {
    font-size: 18px;
    line-height: 20px;
    color: #141821;
  }
`;

export const DeletePrice = styled.del`
  font-size: 14px;
  line-height: 20px;
  -webkit-text-decoration-line: line-through;
  text-decoration-line: line-through;
  color: #af5679;
`;

export const Installed_Price = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: red;
  margin: 0;
`;

export const Discount = styled.del`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.7);
`;

export const Btndiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin-top: 25px;
`;
