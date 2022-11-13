import React from "react";
import Footer from "../footer";
import Navbar from "../navbar";
import { Wrapper } from "./style";
import { Container } from "../../global/global";

const Main = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Main;
