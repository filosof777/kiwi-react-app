import React, { useState } from "react";
import classes from "./HeaderBottom.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function HeaderBottom({ setSearch, category, display, setDisplay }) {
  const [inputValue, setInputValue] = useState("");

  const {t, i18n} = useTranslation();
  
  return (
    <div className={classes.HeaderBottom} style={{display: inputValue !== '' && display}}>
      <form>
        <input onChange={(e) => setInputValue(e.target.value)} type="text" list="category" placeholder={t('categoryMore')} />
        <datalist id="category">
          {category.map((item) => {
            return <option value={item} key={item} />;
          })}
        </datalist>
        <input
          className={classes.Search}
          type="search"
          placeholder={t('search')}
          onChange={(event) => setSearch(event.target.value)}
        />
        <input type="text" list="country" placeholder={t('countySelect')} />
        <datalist id="country"></datalist>
        <Link onClick={() => setDisplay('none')} to='category'>Найти</Link>
      </form>
      <button>
        <span>+</span>
        {t('addPost')}
      </button>
    </div>
  );
}

export default HeaderBottom;
