import React, { FC } from "react";
import style from "./Button.module.scss";
import { ButtonType } from "../../../types";

const Button: FC<ButtonType> = ({ name, isRound, onClick }) => (
  <button
    type="submit"
    className={!isRound ? style.buttonRound : style.buttonSquare}
    onClick={onClick}
  >
    {name}
  </button>
);

export default Button;
