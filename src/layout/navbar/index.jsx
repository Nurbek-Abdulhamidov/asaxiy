import React from "react";
import {
  Header__top,
  Header__bottom,
  Header__top__group,
  Header__bottom__group,
  Container,
  Header__logo,
} from "./style";

const Navbar = () => {
  return (
    <header>
      <Header__top>
        <Container>
          <Header__top__group>
            <Header__logo>
              <a href="">
                <img
                  src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg
"
                  alt="logo img"
                />
              </a>
            </Header__logo>
            <Header__search></Header__search>
            <Header__top_list></Header__top_list>
          </Header__top__group>
        </Container>
      </Header__top>
      <Header__bottom>
        <Container>
          <Header__bottom__group>bottom</Header__bottom__group>
        </Container>
      </Header__bottom>
    </header>
  );
};

export default Navbar;
