import React from "react";
import svgLoader from "../../../utils/svgLoader";

import style from "./Card.module.scss";

const Card = ({ data }: any) => {
  return (
    <section className={style.container}>
      {data.map((data: any) => {
        return (
          <div key={data.id} className={style.container__card}>
            <div className={style.container__card__icon}>
              {svgLoader(data.id)}
            </div>

            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Card;
