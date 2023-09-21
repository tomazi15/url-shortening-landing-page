import React, { useState } from "react";
import style from "./NavigationBar.module.scss";
import { ReactComponent as ShortlyLogo } from "../../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../partials/Button/Button";

const NavigationBar = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = (): void => setOpenMenu(!openMenu);

  return (
    <nav className={style.container}>
      <section className={style.container__nav}>
        <ShortlyLogo fill="#34313D" aria-label="shortly header logo" />
        <div className={style.container__nav__menu}>
          <button>
            <GiHamburgerMenu
              size={35}
              onClick={handleOpenMenu}
              aria-label="burger menu icon"
            />
          </button>
        </div>
      </section>
      <section className={style.container__nav__desktop}>
        <div className={style.container__nav__desktop__items}>
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
        </div>
        <div className={style.container__nav__desktop__actionItems}>
          <p>Login</p>
          <Button name="Sign Up" buttonStyle="round" />
        </div>
      </section>
      <section className={style.container__nav__mobile}>
        {openMenu && (
          <div className={style.container__activeMenu}>
            <ul className={style.container__activeMenu__items}>
              <li className={style.container__activeMenu__item}>Features</li>
              <li className={style.container__activeMenu__item}>Pricing</li>
              <li className={style.container__activeMenu__item}>Resources</li>
              <hr />
              <li className={style.container__activeMenu__item}>Login</li>
              <li className={style.container__activeMenu__item}>Sign Up</li>
            </ul>
          </div>
        )}
      </section>
    </nav>
  );
};

export default NavigationBar;
