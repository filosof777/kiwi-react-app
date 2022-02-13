import React from "react";

function ButtonItem({isActive, toggleClass, classes, count, title}) {
  return (
    <li
      onClick={() => toggleClass(count)}
      className={isActive === count ? classes.Active : ""}
    >
      <button>{title}</button>
    </li>
  );
}

export default ButtonItem;
