import React, { useState } from "react";
import Books_data from "../../mock/Books_Data";
import {
  Aside,
  Aside_Body,
  Aside_Data,
  Aside_Header,
  Aside_Img,
} from "./style";

const Books = () => {
  const [data, setData] = useState(Books_data);
  return (
    <Aside>
      <Aside_Header>
        <h3>Книги</h3>
        <a href="">
          <img
            src="	https://assets.asaxiy.uz/uploads//5f46535c8c1c3.png"
            alt=""
          />
        </a>
      </Aside_Header>
      {data.map((info, index) => (
        <Aside_Body key={index}>
          <a href="">
            <Aside_Img>
              <img src={info.image} alt="" />
            </Aside_Img>
            <Aside_Data>
              <h6>{info.title}</h6>
              <p>{info.paragraph}</p>
            </Aside_Data>
          </a>
        </Aside_Body>
      ))}
    </Aside>
  );
};

export default Books;
