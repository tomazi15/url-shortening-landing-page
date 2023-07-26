import React, { useState } from "react";
import Button from "../partials/Button/Button";
import style from "./ShortenForm.module.scss";
import { useForm } from "react-hook-form";
import { ShortenUrlFormType } from "../../types";
import { useAppDispatch } from "../../redux/hooks";
import { addUrl } from "../../redux/features/form/formSlice";
import { formValidationSchema } from "./formValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const ShortenForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ShortenUrlFormType>({
    resolver: yupResolver(formValidationSchema),
  });

  const dispatch = useAppDispatch();

  const submitUrlForm = (shortenUrl: any) => {
    dispatch(addUrl(shortenUrl));
    reset();
  };

  return (
    <form className={style.container} onSubmit={handleSubmit(submitUrlForm)}>
      <input
        className={style.container__input}
        // className={style.container__input}
        type="text"
        id="shorten"
        placeholder="Shorten a link here..."
        {...register("shortenUrl")}
      />
      {errors.shortenUrl && (
        <span className={style.container__errorText}>
          {errors.shortenUrl.message}
        </span>
      )}
      <Button name="Shorten It!" buttonStyle="square" />
    </form>
  );
};

export default ShortenForm;
