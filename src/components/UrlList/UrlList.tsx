import React from "react";
import { style } from "./UrlList.module.scss";
import { useAppSelector } from "../../redux/hooks";

const UrlList = () => {
  const urls: any = useAppSelector((state: any) => state.urls.shortenUrl);

  console.log("STATE URLS", urls);

  return (
    <section>
      <ul>
        {urls.length > 0 &&
          urls.map((url: any, i: number) => <li key={i}>{url.shortenUrl}</li>)}
      </ul>
    </section>
  );
};

export default UrlList;
