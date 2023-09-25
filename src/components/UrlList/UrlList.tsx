import React from "react";
import style from "./UrlList.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Button from "../partials/Button/Button";
import { setCopiedAction } from "../../redux/features/form/formSlice";

const UrlList = () => {
  const dispatch = useAppDispatch();

  const urls: [{ userUrl: string; id: number }] = useAppSelector(
    (state: any) => state.urls.userUrl
  );
  const copiedUrlId: number = useAppSelector((state: any) => state.urls.copied);

  const handleOnCLick = (id: number) => {
    return copiedUrlId !== id ? dispatch(setCopiedAction({ id })) : 0;
  };

  return (
    <section className={style.container}>
      <ul className={style.container__urlList}>
        {urls.length > 0 &&
          urls.map((url: { userUrl: string; id: number }) => {
            return (
              <li key={url.id} className={style.container__url}>
                <p>{url.userUrl}</p>
                <hr />
                <div className={style.container__urlDivider}>
                  <p>Mock shorten url</p>
                  {}
                  <Button
                    name={`${copiedUrlId === url.id ? "Copied!" : "Copy"}`}
                    buttonStyle={
                      copiedUrlId === url.id
                        ? "smallSquareCopied"
                        : "smallSquare"
                    }
                    onClick={() => handleOnCLick(url.id)}
                  />
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default UrlList;
