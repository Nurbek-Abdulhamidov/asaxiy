import React from "react";
import { Btn } from "./style";

const Button = ({ children, onClick, type, width, height }) => {
  return (
    <Btn onClick={onClick} type={type} width={width} height={height}>
      {children || "Generic button"}
    </Btn>
  );
};

export default Button;
