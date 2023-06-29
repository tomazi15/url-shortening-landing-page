import React from "react";
import style from "./PageHeader.module.scss";

import { ReactComponent as IllustrationWorkingLogo } from "../../images/illustration-working.svg";
import Button from "../partials/Button/Button";

const PageHeader = (): JSX.Element => {
  return (
    <header className={style.container}>
      <div className={style.container__logo}>
        <IllustrationWorkingLogo />
      </div>

      <div className={style.container__text}>
        <h1>More than just shorter links</h1>
        <p>
          Building your brand's recognition and get detailed insight on how your
          links are preforming.
        </p>
        <Button name="Get Started" />
      </div>
    </header>
  );
};

export default PageHeader;
