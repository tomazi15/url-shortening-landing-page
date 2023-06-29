import React, { FC } from "react";
import style from "./Button.module.scss";
import { ButtonType } from "../../../types";

const Button: FC<ButtonType> = ({ name, type }) => (
  <button className={!type ? style.buttonRound : style.buttonSquare}>
    {name}
  </button>
);

export default Button;
