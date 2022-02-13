import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderTop from "./HeaderTop/HeaderTop";

function Header({ setSearch, changeLanguage }) {
  const [category, setCategory] = useState([]);
  const [display, setDisplay] = useState("flex");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <header className={classes.Header}>
      <div className="container">
        <HeaderTop changeLanguage={changeLanguage} setDisplay={setDisplay} />
        <HeaderBottom
          display={display}
          setDisplay={setDisplay}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />
      </div>
    </header>
  );
}

export default Header;
