import React from "react";
import style from "./BoostLinkPanel.module.scss";
import Button from "../partials/Button/Button";

const BoostLinkPanel = (): JSX.Element => {
  return (
    <div className={style.container}>
      <h1>Boost your links today</h1>
      <Button name="Get Started" />
    </div>
  );
};

export default BoostLinkPanel;
