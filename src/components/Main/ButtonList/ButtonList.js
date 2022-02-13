import React from "react";
import { useTranslation } from "react-i18next";
import ButtonItem from "./ButtonItem/ButtonItem";
import classes from "./ButtonList.module.scss";

function ButtonList({ isActive, toggleClass }) {
  const { t, i18n } = useTranslation();
  return (
    <ul className={classes.ButtonList}>
      <ButtonItem
        isActive={isActive}
        classes={classes}
        count={1}
        title={t('button1')}
        toggleClass={toggleClass}
      />
      <ButtonItem
        isActive={isActive}
        classes={classes}
        count={2}
        title={t('button2')}
        toggleClass={toggleClass}
      />
    </ul>
  );
}

export default ButtonList;
