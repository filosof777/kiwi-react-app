import React from "react";

function LoginButton({description, changeLanguage}) {
  return (
    <li onClick={changeLanguage}>
      <button>{description}</button>
    </li>
  );
}

export default LoginButton;
