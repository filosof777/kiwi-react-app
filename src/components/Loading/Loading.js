import React from "react";
import classes from "./Loading.module.scss";
import ClipLoader from "react-spinners/ClipLoader";

function Loading() {
  return (
    <div className={classes.Loading}>
      <div>
        <ClipLoader loading={true} size={150} />
        <p>Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
