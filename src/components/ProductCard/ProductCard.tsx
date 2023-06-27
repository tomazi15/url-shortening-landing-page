import React from "react";
import style from "./ProductCard.module.scss";
import Card from "../partials/Card/Card";
import { cardData } from "../../data/cardData";

const ProductCard = () => {
  return (
    <section className={style.container}>
      <h1>Advanced Statistics</h1>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <Card data={cardData} />
    </section>
  );
};

export default ProductCard;
