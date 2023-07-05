import React, { useState } from "react";
import Button from "../partials/Button/Button";
import style from "./ShortenForm.module.scss";
import { useForm } from "react-hook-form";
import { ShortenUrlFormType } from "../../types";
import { useAppDispatch } from "../../redux/hooks";
import { addUrl } from "../../redux/features/form/formSlice";

const ShortenForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShortenUrlFormType>();

  const dispatch = useAppDispatch();

  const submitUrlForm = (url: any) => dispatch(addUrl(url));

  return (
    <form className={style.container} onSubmit={handleSubmit(submitUrlForm)}>
      <input
        className={style.container__input}
        type="text"
        id="shorten"
        placeholder="Shorten a link here..."
        {...register("shortenUrl")}
      />
      <Button name="Shorten It!" isRound={true} />
    </form>
  );
};

export default ShortenForm;
