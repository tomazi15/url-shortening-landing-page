import React from "react";
import style from "./UrlList.module.scss";
import { useAppSelector } from "../../redux/hooks";
import Button from "../partials/Button/Button";

const UrlList = () => {
  const urls: any = useAppSelector((state: any) => state.urls.shortenUrl);

  console.log("STATE URLS", urls);

  return (
    <section className={style.container}>
      <ul className={style.container__urlList}>
        {urls.length > 0 &&
          urls.map((url: any, i: number) => (
            <li key={i} className={style.container__url}>
              <p>shorten url</p>
              <div className={style.container__urlDivider}>
                {url.shortenUrl}
                <Button name="Copy" buttonStyle="smallSquare" />
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default UrlList;
