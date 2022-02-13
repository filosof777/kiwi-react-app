import React, { useEffect, useState } from "react";
import classes from "./Main.module.scss";
import CategorySlider from "./Data/CategorySlider";
import rightArrow from "../../../assets/icons/right-arrow.svg";
import leftArrow from "../../../assets/icons/left-arrow.svg";
import smallRightArrow from "../../../assets/icons/small-right-arrow.svg";
import Loading from "../../../components/Loading/Loading";
import ShowBtn from "../../../components/ShowBtn/ShowBtn";
import SmallSlider from "../../../components/SmallSlider/SmallSlider";
import CatBasic from "../../../components/Main/CatBasic/CatBasic";
import CatLower from "../../../components/Main/CatLower/CatLower";
import ButtonList from "../../../components/Main/ButtonList/ButtonList";
import ProductCardItem from "../../../components/Main/ProductList/ProductCardItem/ProductCardItem";
import CardNameItem from "../../../components/Main/CardNameItem/CardNameItem";
import SliderItem from "../../../components/Main/SliderItem/SliderItem";
import { useTranslation } from "react-i18next";
import Recomended from "../../../components/Recomended/Recomended";
import ProductList from "../../../components/Main/ProductList/ProductList";

function Main({ search, setItemCard }) {
  const {t, i18n} = useTranslation();
  
  const [slider, setSlider] = useState(0);
  const [isActive, setIsActive] = useState(1);
  const [limit, setLimit] = useState(10);
  const [cards, setCards] = useState([]);
  const [reverse, setReverse] = useState("");
  const [display, setDisplay] = useState("none");
  const [displayTwo, setDisplayTwo] = useState("none");
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${limit}${reverse}`)
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, [limit, reverse]);

  let oddCategorySlider = [];

  const SliderLeft = () => {
    setSlider(slider - 130);
    oddCategorySlider = CategorySlider.shift();
    CategorySlider.push(oddCategorySlider);
  };

  const SliderRight = () => {
    setSlider(slider + 130);
    oddCategorySlider = CategorySlider.pop();
    CategorySlider.unshift(oddCategorySlider);
  };

  const toggleClass = (index) => {
    setIsActive(index);
    if (reverse === "") {
      setReverse("&sort=desc");
    } else {
      setReverse("");
    }
  };

  return (
    <main className={classes.Main}>
      <div
        className={classes.BackDrop}
        style={{ display: display }}
        onClick={() => setDisplay("none")}
      ></div>
      <div className="container-fluid">
        <div className={classes.ButtonGroup}>
          <button className={classes.BtnLeft} onClick={SliderLeft}>
            <img src={leftArrow} alt="slide left" />
          </button>
          <button className={classes.BtnRight} onClick={SliderRight}>
            <img src={rightArrow} alt="slide right" />
          </button>
        </div>
        <div className="container">
          <SmallSlider
            setDisplay={setDisplay}
            CategorySlider={CategorySlider}
          />
          <div className={classes.Navbar}>
            <CatBasic
              display={display}
              setCategoryName={setCategoryName}
              setDisplayTwo={setDisplayTwo}
            />
            <CatLower
              categoryName={categoryName}
              displayTwo={displayTwo}
              setDisplayTwo={setDisplayTwo}
            />
          </div>
          <div className={classes.Card}>
            <ButtonList isActive={isActive} toggleClass={toggleClass} />
            <ProductList cards={cards} setItemCard={setItemCard} search={search} />
            <ShowBtn setLimit={setLimit} limit={limit} />
          </div>
        </div>
      </div>
      <div className={classes.BigSlider}>
        <div className="container">
          <ul className={classes.Slider}>
            <SliderItem
              title="Техника Apple по доступным ценам"
              count="987 обьявлениий"
              srcIcon={smallRightArrow}
              altIocn={smallRightArrow}
              classes={classes.Img}
              srcImg={
                "https://www.notebookcheck-ru.com/typo3temp/_processed_/4/b/csm_SamsungNotebook9Pro13__1__88bb908012.jpg"
              }
              altImg={"phone"}
            />
            <SliderItem
              title="Техника Apple по доступным ценам"
              count="987 обьявлениий"
              srcIcon={smallRightArrow}
              altIocn={smallRightArrow}
              classes={classes.Img}
              srcImg={
                "https://www.notebookcheck-ru.com/typo3temp/_processed_/4/b/csm_SamsungNotebook9Pro13__1__88bb908012.jpg"
              }
              altImg={"phone"}
            />
            <SliderItem
              title="Техника Apple по доступным ценам"
              count="987 обьявлениий"
              srcIcon={smallRightArrow}
              altIocn={smallRightArrow}
              classes={classes.Img}
              srcImg={
                "https://www.notebookcheck-ru.com/typo3temp/_processed_/4/b/csm_SamsungNotebook9Pro13__1__88bb908012.jpg"
              }
              altImg={"phone"}
            />
            <SliderItem
              title="Техника Apple по доступным ценам"
              count="987 обьявлениий"
              srcIcon={smallRightArrow}
              altIocn={smallRightArrow}
              classes={classes.Img}
              srcImg={
                "https://www.notebookcheck-ru.com/typo3temp/_processed_/4/b/csm_SamsungNotebook9Pro13__1__88bb908012.jpg"
              }
              altImg={"phone"}
            />
          </ul>
        </div>
      </div>
      <Recomended />
    </main>
  );
}

export default Main;
