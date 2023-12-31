import React, { FC } from "react";
import style from "./Button.module.scss";
import { ButtonType } from "../../../types";

const Button: FC<ButtonType> = ({ name, buttonStyle, onClick }) => {
  const buttonTypeStyle = (setButtonStyle: string): string =>
    ({
      round: style.buttonRound,
      square: style.buttonSquare,
      smallSquare: style.buttonSmallSquare,
      smallSquareCopied: style.buttonSmallSquareCopied,
    }[setButtonStyle]);

  return (
    <button
      type="submit"
      aria-label={name}
      className={buttonTypeStyle(buttonStyle)}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
