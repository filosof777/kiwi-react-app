import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./HeaderTop.module.scss";
import logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import Item from "../../../components/Header/Item/Item";
import LangButton from "../../../components/Header/LangButton/LangButton";

function HeaderTop({ changeLanguage, setDisplay }) {
  const { t, i18n } = useTranslation();

  return (
    <div className={classes.HeaderTop}>
      <div className={classes.Logo}>
        <Link onClick={() => setDisplay("flex")} to="/">
          <img src={logo} alt="site logo" width={67} height={67} />
        </Link>
        <div>
          <p>{t("logo-title")}</p>
        </div>
      </div>
      <div className={classes.Nav}>
        <ul>
          <Item href="#" description={t("desc1")} />
          <Item href="#" description={t("desc2")} />
          <Item href="#" description={t("desc3")} />
          <Item href="#" description={t("desc4")} />
        </ul>
      </div>
      <div className={classes.Language}>
        <ul>
          <LangButton description="Рус" changeLanguage={changeLanguage("ru")} />
          <LangButton description="O'z" changeLanguage={changeLanguage("uz")} />
        </ul>
      </div>
      <div className={classes.Login}>
        <ul>
          <li>
            <button>{t("login")}</button>
          </li>
          <li>
            <Link onClick={() => setDisplay()} to="/login">{t("registration")}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderTop;
