import React, { FC } from "react";
import svgLoader from "../../../utils/svgLoader";

import style from "./Card.module.scss";
import { CardDataTypeProps } from "../../../types";

const Card: FC<CardDataTypeProps> = ({ cardData }) => {
  return (
    <section className={style.container}>
      {cardData.map(
        (data: { id: number; title: string; description: string }) => {
          return (
            <div key={data.id} className={style.container__card}>
              <div className={style.container__card__icon}>
                {svgLoader(data.id)}
              </div>

              <h1>{data.title}</h1>
              <p>{data.description}</p>
            </div>
          );
        }
      )}
    </section>
  );
};

export default Card;
