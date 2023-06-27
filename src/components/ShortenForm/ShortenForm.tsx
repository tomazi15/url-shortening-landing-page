import React from "react";
import Button from "../partials/Button/Button";
import style from "./ShortenForm.module.scss";

const ShortenForm = () => {
  return (
    <form className={style.container}>
      <input
        className={style.container__input}
        type="text"
        id="shorten"
        name="shorten_url"
        placeholder="Shorten a link here..."
      />
      <Button name="Shorten It!" type={true} />
    </form>
  );
};

export default ShortenForm;
