import React from "react";
import classes from "./ShowBtn.module.scss";
import bottomArrow from "../../assets/icons/bottom-arrow.svg";
import { useTranslation } from "react-i18next";

function ShowBtn({ setLimit, limit, smallLimit, setSmallLimit }) {
  const { t, i18n } = useTranslation();
  return (
    <button className={classes.ShowBtn} onClick={() => {limit > 4 ? setLimit(limit + 10) : setSmallLimit(smallLimit + 4)}}>
      {t('showbtn')}
      <img src={bottomArrow} alt="Show More" />
    </button>
  );
}

export default ShowBtn;
