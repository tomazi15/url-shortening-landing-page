import React, { useState } from "react";
import style from "./NavigationBar.module.scss";
import { ReactComponent as ShortlyLogo } from "../../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationBar = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(!openMenu);

  return (
    <nav className={style.container}>
      <section className={style.container__nav}>
        <ShortlyLogo fill="#34313D" />
        <div className={style.container__nav__menu}>
          <button>
            <GiHamburgerMenu size={35} onClick={handleOpenMenu} />
          </button>
        </div>
      </section>
      <section>
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
