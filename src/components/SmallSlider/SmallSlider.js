import React from "react";
import classes from "./SmallSlider.module.scss";

function SmallSlider({ setDisplay, CategorySlider }) {
  
  return (
    <div className={classes.SmallSlider}>
      <ul>
        {CategorySlider.map((item) => {
          return (
            <li key={item.id} onClick={() => setDisplay("flex")}>
              <button style={{ backgroundColor: item.background }}>
                <img src={item.image} alt={item.name} />
              </button>
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SmallSlider;
