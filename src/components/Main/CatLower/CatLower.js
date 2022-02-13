import React from "react";
import classes from "./CatLower.module.scss";
import leftArrow from "../../../assets/icons/left-arrow.svg";
import { CategoryLower } from "../../../container/pages/Main/Data/CategoryBasic";

function CatLower({ categoryName, displayTwo, setDisplayTwo }) {
  return (
    <div className={classes.CategoryLower} style={{ display: displayTwo }}>
      <div>
        <button
          onClick={() => {
            setDisplayTwo("none");
          }}
        >
          <img src={leftArrow} alt="back" />
          {categoryName}
        </button>
        <a href="#">Посмотреть всю категорию компютеры</a>
      </div>
      <ul>
        {CategoryLower.map((item) => {
          return (
            <li key={item.id}>
              <button>{item.name}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CatLower;
