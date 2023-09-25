import React from "react";
import { ReactComponent as ShortlyLogo } from "../../images/logo.svg";
import style from "./PageFooter.module.scss";
import { ReactComponent as InstagramIcon } from "../../images/icon-instagram.svg";
import { ReactComponent as PinterestIcon } from "../../images/icon-pinterest.svg";
import { ReactComponent as TwitterIcon } from "../../images/icon-twitter.svg";
import { ReactComponent as FacebookIcon } from "../../images/icon-facebook.svg";
import { footerData } from "../../data/footerData";
import { FooterDataType } from "../../types";

const PageFooter = (): JSX.Element => {
  return (
    <footer className={style.container}>
      <ShortlyLogo fill="#ffff" aria-label="shortly footer logo" />

      <ul className={style.container__footerItems}>
        {footerData.map((menuItems: FooterDataType, index: number) => {
          return (
            <div key={index} className={style.container__footerItem}>
              <li className={style.container__footerItem__title}>
                {menuItems.name}
              </li>
              {menuItems.list.map((item: string) => {
                return (
                  <li className={style.container__footerItem__item}>{item}</li>
                );
              })}
            </div>
          );
        })}
      </ul>

      <section className={style.container__icons}>
        <FacebookIcon aria-label="facebook icon" />
        <TwitterIcon aria-label="twitter icon" />
        <PinterestIcon aria-label="pinterest icon" />
        <InstagramIcon aria-label="instagram icon" />
      </section>
    </footer>
  );
};

export default PageFooter;
