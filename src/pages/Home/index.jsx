import React from "react";
import Books from "../../components/Books";
import Card from "../../components/Card";
import products from "../../mock/products";
import { GridDiv, Left, Right, Space, Wrapper } from "./style";

const Home = () => {
  console.log(products);
  return (
    <Wrapper>
      <Left>
        <Space>
          <Books />
        </Space>
        <Space>
          <Card />
        </Space>
      </Left>
      <Right>
        <GridDiv>
          {products.map((product, index) => (
            <div key={index}>
              <Card product={product} />
            </div>
          ))}
        </GridDiv>
      </Right>
    </Wrapper>
  );
};

export default Home;
