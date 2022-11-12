import React from "react";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../../components/Button";
import { Container, Href, Icon } from "../../global/global";

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
          </Header__top__group>
        </Container>
      </Header__top>
      <Header__bottom>
        <Container>
          <Header__bottom__group>
            <Href href="">
              <Icon>
                <GiHamburgerMenu />
              </Icon>
              <span> Все категории</span>
            </Href>
            <Href href="">
              <Button>11.11</Button>
            </Href>
            <Href href="">
              <span>Новости</span>
            </Href>
            <Href href="">
              <span>Новинки</span>
            </Href>
            <Href href="">
              <span>Скидки</span>
            </Href>
            <Href href="">
              <span>Книги</span>
            </Href>
            <Href href="">
              <span>Телефоны и гаджеты</span>
            </Href>
          </Header__bottom__group>
        </Container>
      </Header__bottom>
    </header>
  );
};

export default Navbar;
