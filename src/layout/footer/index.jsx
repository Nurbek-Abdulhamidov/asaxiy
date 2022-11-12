import React from "react";
import { Container, Href, Icon } from "../../global/global";
import { BsTelephone } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import {
  FaYoutube,
  FaInstagram,
  FaTelegramPlane,
  FaFacebookF,
} from "react-icons/fa";
import {
  Column,
  ColumnMd,
  DivHover,
  Features,
  Features_List,
  Feature_Img,
  Feature_Text,
  Feature__Item,
  FooterDiv,
  Footer__Bottom,
  Row,
  RowMd,
} from "./style";

const Footer = () => {
  return (
    <div>
      <FooterDiv>
        <section>
          <Features>
            <Container>
              <Features_List>
                <Href>
                  <Feature_Img>
                    <img
                      src="https://asaxiy.uz/custom-assets/images/icons/market.svg"
                      alt=""
                    />
                  </Feature_Img>
                  <Feature_Text>
                    <h5>Больше не нужно ходить на базар</h5>
                    <p>У нас выгодные цены и доставка до дома</p>
                  </Feature_Text>
                </Href>
                <Href>
                  <Feature_Img>
                    <img
                      src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg"
                      alt=""
                    />
                  </Feature_Img>
                  <Feature_Text>
                    <h5>Быстрая доставка</h5>
                    <p>Наш сервис удивит вас</p>
                  </Feature_Text>
                </Href>
                <Href>
                  <Feature_Img>
                    <img
                      src="https://asaxiy.uz/custom-assets/images/icons/return.svg
                      "
                      alt=""
                    />
                  </Feature_Img>
                  <Feature_Text>
                    <h5>Удобства для вас</h5>
                    <p>
                      Быстрое оформление и гарантия на возврат в случае
                      неисправности
                    </p>
                  </Feature_Text>
                </Href>
                <Href>
                  <Feature_Img>
                    <img
                      src="https://asaxiy.uz/custom-assets/images/icons/card.svg
                      "
                      alt=""
                    />
                  </Feature_Img>
                  <Feature_Text>
                    <h5>Рассрочка</h5>
                    <p>Без предоплаты на 3, 6, 9 и 12 месяцев</p>
                  </Feature_Text>
                </Href>
              </Features_List>
            </Container>
          </Features>
        </section>
        <Features>
          <Container>
            <Row>
              <ColumnMd>
                <Row>
                  <Column>
                    <strong>Информация</strong>
                    <Href>
                      <Feature__Item>
                        <DivHover>
                          Публичная оферта (Пользовательское соглашение)
                        </DivHover>
                      </Feature__Item>
                    </Href>
                    <Href>
                      <Feature__Item>
                        <DivHover>Оферта для покупок в рассрочку</DivHover>
                      </Feature__Item>
                    </Href>
                    <Href>
                      <Feature__Item>
                        <DivHover>Условия рассрочки</DivHover>
                      </Feature__Item>
                    </Href>
                    <Href>
                      <Feature__Item>
                        <DivHover>Оплата и доставка товара</DivHover>
                      </Feature__Item>
                    </Href>
                    <Href>
                      <Feature__Item>
                        <DivHover>Отмена заказа и возврат товара</DivHover>
                      </Feature__Item>
                    </Href>
                    <Href>
                      <Feature__Item>
                        <DivHover>О нас</DivHover>
                      </Feature__Item>
                    </Href>
                  </Column>
                  <Column>
                    <strong>Для связи</strong>
                    <Feature__Item>
                      <DivHover>
                        <i>
                          <BsTelephone />
                        </i>
                        <Href href="tel:+998 71 200 01 05">
                          +998 71 200 01 05
                        </Href>
                      </DivHover>
                    </Feature__Item>
                    <Feature__Item>
                      <DivHover>
                        <i>
                          <BiEnvelope />
                        </i>
                        <Href href="mailto:info">info@asaxiy.uz</Href>
                      </DivHover>
                    </Feature__Item>
                    <Feature__Item>
                      <DivHover>
                        <i>
                          <MdLocationOn />
                        </i>
                        <Href href="mailto:info">Чиланзар 3, Ташкент</Href>
                      </DivHover>
                    </Feature__Item>
                  </Column>
                </Row>
                <RowMd>
                  <Column>
                    <strong>Мы в соц. сетях :</strong>
                    <Feature__Item>
                      <i>
                        <FaFacebookF />
                      </i>
                      <i>
                        <FaTelegramPlane />
                      </i>
                      <i>
                        <FaInstagram />
                      </i>
                      <i>
                        <FaYoutube />
                      </i>
                    </Feature__Item>
                  </Column>
                </RowMd>
              </ColumnMd>
            </Row>
            <Column>
              <Footer__Bottom line>
                <RowMd>
                  <div>
                    <strong>Виды оплаты :</strong>
                  </div>
                  <div>
                    <img
                      src="https://asaxiy.uz/custom-assets/images/click-logo.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://asaxiy.uz/custom-assets/images/payme.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://asaxiy.uz/custom-assets/images/visa.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://asaxiy.uz/custom-assets/images/mastercard.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://asaxiy.uz/custom-assets/images/humo.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="	https://asaxiy.uz/custom-assets/images/uzcard.svg"
                      alt=""
                    />
                  </div>
                </RowMd>
              </Footer__Bottom>
            </Column>
            <Column>
              <Footer__Bottom>
                <p>
                  2015-2022 Интернет-магазин asaxiy.uz: Бытовая техника и др.
                  Доставка товаров осуществляется во все регионы. Все права
                  защищены.
                </p>
              </Footer__Bottom>
            </Column>
          </Container>
        </Features>
      </FooterDiv>
    </div>
  );
};

export default Footer;
