import React from "react";

function SliderItem({
  title,
  count,
  srcIcon,
  altIocn,
  classes,
  srcImg,
  altImg,
}) {
  return (
    <li>
      <div>
        <h3>{title}</h3>
        <button>
          {count} <img src={srcIcon} alt={altIocn} />
        </button>
      </div>
      <img className={classes} src={srcImg} alt={altImg} />
    </li>
  );
}

export default SliderItem;
