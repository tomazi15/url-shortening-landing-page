import React, { useState } from "react";
import style from "./UrlList.module.scss";
import { useAppSelector } from "../../redux/hooks";
import Button from "../partials/Button/Button";

const UrlList = () => {
  const [copied, setCopied] = useState(false);

  const urls: any = useAppSelector((state: any) => state.urls.shortenUrl);

  const handleOnCLick = () => setCopied(!copied);

  console.log("copied", copied);

  return (
    <section className={style.container}>
      <ul className={style.container__urlList}>
        {urls.length > 0 &&
          urls.map((url: any, i: number) => (
            <li key={i} className={style.container__url}>
              <p>original url</p>
              <hr />
              <div className={style.container__urlDivider}>
                <p>{url.shortenUrl}</p>
                <Button
                  name={`${!copied ? "Copy" : "Copied!"}`}
                  buttonStyle={!copied ? "smallSquare" : "smallSquareCopied"}
                  onClick={handleOnCLick}
                />
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default UrlList;
