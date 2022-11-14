import React from "react";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Outlet } from "react-router-dom";
import { Container, Icon } from "../../global/global";
import Footer from "../footer";
import nav_data from "../../mock/navbar";
import { Wrapper } from "../main/style";

import {
  Header__top,
  Header__bottom,
  Header__top__group,
  Header__bottom__group,
  Header__logo,
  Header__search,
  Header__top_list,
  CountDiv,
  Count,
} from "./style";
import { useState } from "react";
import { Menu } from "../footer/style";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);


  const handleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };


  return (
    <header>
      <Header__top>
        <Container>
          <Header__top__group>
            <Header__logo>
              <Link to="/home">
                <img
                  src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg
"
                  alt="logo img"
                />
              </Link>
            </Header__logo>
            <Header__search>
              <form>
                <input type="text" placeholder="Поиск..." />
                <button>
                  <i>
                    <BiSearch />
                  </i>
                  <span>Искать</span>
                </button>
              </form>
            </Header__search>
            <Header__top_list>
              <a href="">
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg"
                  alt=""
                />
                <span>Оплатить</span>
              </a>
              <a href="">
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg"
                  alt=""
                />
                <span>Отследить</span>
              </a>
              <a href="">
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/header/language.svg
                  "
                  alt=""
                />
                <span>Русский</span>
              </a>
              <CountDiv>
                <a href="">
                  <img
                    src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg
                  "
                    alt=""
                  />
                  <Count>
                    <p>0</p>
                  </Count>
                  <span>Корзинка</span>
                </a>
              </CountDiv>
              <CountDiv>
                <a href="">
                  <img
                    src="https://asaxiy.uz/custom-assets/images/icons/header/heart.svg
                  "
                    alt=""
                  />
                  <Count>
                    <p>0</p>
                  </Count>
                  <span>Избранное</span>
                </a>
              </CountDiv>
              <a href="">
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg
                  "
                  alt=""
                />
                <span>Кабинет</span>
              </a>
            </Header__top_list>
            <Icon visible onClick={handleHamburger}>
              <GiHamburgerMenu />
            </Icon>
          </Header__top__group>
        </Container>
        <Menu isOpen={hamburgerOpen}>Hello</Menu>
      </Header__top>
      <Header__bottom>
        <Container>
          <Header__bottom__group>
            <Link>
              <Icon>
                <GiHamburgerMenu />
              </Icon>
              <span> Все категории</span>
            </Link>
            {nav_data.map(({ item, path }, index) => {
              return (
                <div key={index}>
                  <Link to={path}>
                    <span>{item}</span>
                  </Link>
                </div>
              );
            })}
          </Header__bottom__group>
          <Header__search hidden>
            <form>
              <input type="text" placeholder="Поиск..." />
              <button>
                <i>
                  <BiSearch />
                </i>
                <span style={{ color: "#fff" }}>Искать</span>
              </button>
            </form>
          </Header__search>
        </Container>
      </Header__bottom>

      <Wrapper>
        <Container>
          <Outlet />
        </Container>
      </Wrapper>
      <Footer />
    </header>
  );
};

export default Navbar;
