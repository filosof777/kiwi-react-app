import React from "react";

function CardNameItem({classes, title}) {
  return (
    <li className={classes.Active}>
      <button>{title}</button>
    </li>
  );
}

export default CardNameItem;
