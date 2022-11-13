import React from "react";
import {
  Btndiv,
  Busket,
  CardWrapper,
  DeletePrice,
  Discount,
  Heart,
  Installed_Price,
  MessageIcon,
  Product_Item_Img,
  Product_Item_Info_price,
  Product_Item_Rating,
  Product__Item_Info,
  Skidka,
} from "./style";
import { FiHeart, FiMessageSquare } from "react-icons/fi";
import { BsCartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Button from "../../components/Button/index";

const Card = () => {
  return (
    <div>
      <CardWrapper>
        <Skidka>11.11</Skidka>
        <Busket>
          <i>
            <BsCartFill />
          </i>
        </Busket>
        <Heart>
          <i>
            <FiHeart />
          </i>
        </Heart>
        <Product_Item_Img>
          <img
            src="https://assets.asaxiy.uz/product/main_image/desktop//614ee35e81de7.png.webp"
            alt=""
          />
        </Product_Item_Img>
        <Product__Item_Info>
          <a href="">
            <span>Планшет Xiaomi Pad 5 6/128Gb Wi-Fi Gray </span>
          </a>
          <Product_Item_Rating>
            <div>
              <i>
                <AiFillStar />
              </i>
              <i>
                <AiFillStar />
              </i>
              <i>
                <AiFillStar />
              </i>
              <i>
                <AiFillStar />
              </i>
              <i>
                <AiFillStar />
              </i>
            </div>
            <MessageIcon>
              <FiMessageSquare />
            </MessageIcon>
            <span>30 отзывов</span>
          </Product_Item_Rating>
          <Product_Item_Info_price>
            <DeletePrice>519 000 сум</DeletePrice>
            <span>399 000 сум</span>
            <Installed_Price>42 300 сум / 12 мес</Installed_Price>
            <Discount>43 300 сум / 12 мес</Discount>
          </Product_Item_Info_price>
          <Btndiv>
            <Button type={"light"}>Рассрочка</Button>
            <Button>Купить в 1 клик </Button>
          </Btndiv>
        </Product__Item_Info>
      </CardWrapper>
    </div>
  );
};

export default Card;
