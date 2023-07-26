import React, { FC } from "react";
import style from "./Button.module.scss";
import { ButtonType } from "../../../types";

const Button: FC<ButtonType> = ({ name, buttonStyle, onClick }) => {
  const buttonTypeStyle = (troll: string) =>
    ({
      round: style.buttonRound,
      square: style.buttonSquare,
    }[troll]);

  console.log(buttonTypeStyle(buttonStyle));
  // // const buttonTypeStyle = {
  // //   round: style.buttonRound,
  // //   square: style.buttonSquare,
  // // };

  // const getButtonStyle = (buttonTypeStyle: any) =>
  //   Object.values(buttonTypeStyle).find(
  //     (buttonStyle) => buttonStyle === isRound
  //   );

  // const test = Object.entries(buttonTypeStyle);

  // // @ts-ignore
  // console.log("TEST", ...test[1]);

  // // const [key, value] = Object.entries(getButtonStyle);

  // // className={buttonTypeStyle.}
  // // console.log(getButtonStyle(buttonTypeStyle));

  return (
    <button
      type="submit"
      className={buttonTypeStyle(buttonStyle)}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
