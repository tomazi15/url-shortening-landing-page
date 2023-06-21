import React, { FC } from "react";
import style from "./Button.module.scss";
import { ButtonType } from "../../../types";

const Button: FC<ButtonType> = ({ name }): JSX.Element => (
  <button className={style.buttonRound}>{name}</button>
);

export default Button;