import React from "react";
import classes from "./CatBasic.module.scss";
import { CategoryBasic } from "../../../container/pages/Main/Data/CategoryBasic";

function CatBasic({display, setCategoryName, setDisplayTwo}) {
  return (
    <ul className={classes.CategoryBasic} style={{ display: display }}>
      {CategoryBasic.map((item) => {
        return (
          <li
            key={item.id}
            value={item.name}
            onClick={() => {
              setCategoryName(item.name);
              setDisplayTwo("flex");
            }}
          >
            <button>{item.name}</button>
          </li>
        );
      })}
    </ul>
  );
}

export default CatBasic;
