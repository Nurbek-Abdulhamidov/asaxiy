import React, { useState } from "react";
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
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { BsCartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Button from "../../components/Button/index";

const Card = ({ product }) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };
  return (
    <div>
      <CardWrapper>
        {product?.discount ? <Skidka>СКИДКА</Skidka> : ""}

        <Busket>
          <i>
            <BsCartFill />
          </i>
        </Busket>
        <Heart isLike={like} onClick={handleLike}>
          <i>
            <BsFillSuitHeartFill />
          </i>
        </Heart>
        <Product_Item_Img>
          <img src={product?.image} alt="" />
        </Product_Item_Img>
        <Product__Item_Info>
          <a href="">
            <span>{product?.title}</span>
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
            <span>{product?.comment} отзывов</span>
          </Product_Item_Rating>
          <Product_Item_Info_price>
            <DeletePrice>{product?.oldPrice} сум</DeletePrice>
            <span>{product?.item_price} сум</span>
            <Installed_Price>
              {product?.installedPrice} сум / {product?.month} мес
            </Installed_Price>
            <Discount>
              {product?.installedPriceDiscount} сум / {product?.month} мес
            </Discount>
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
