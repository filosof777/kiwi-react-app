import React, { useEffect, useRef, useState } from "react";
import classes from "./Category.module.scss";
import pin from "../../../assets/icons/pin.svg";
import close from "../../../assets/icons/close.svg";
import bottom from "../../../assets/icons/bottom.svg";
import search from "../../../assets/icons/search.svg";
// import ProductList from "../../../components/Main/ProductList/ProductList";
import ShowBtn from "../../../components/ShowBtn/ShowBtn";
import { Link } from "react-router-dom";
import top from "../../../assets/icons/top.svg";
import Recomended from "../../../components/Recomended/Recomended";
import CategoryList from '../../../components/Category/ProductList';

function Category({ fetchData, setItemCard }) {
  const [maxValue, setMaxValue] = useState(1000000);
  const [minValue, setMinValue] = useState(0);
  const [rangeLeft, setRangeLeft] = useState(minValue);
  const [rangeRight, setRangeRight] = useState(maxValue % 1000);
  const [topCard, setTopCard] = useState([]);
  const [limit, setLimit] = useState(4);
  const [searchValue, setSearchValue] = useState("");

  const max = 1000000;
  const min = 0;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${limit}&sort=desc`)
      .then((res) => res.json())
      .then((data) => {
        setTopCard(data);
      });
  }, []);

  return (
    <div className={classes.Category}>
      <div className="container">
        <form>
          <img src={search} alt="" />
          <input type="search" placeholder="Введите название обявления или" onChange={(e) => setSearchValue(e.target.value)} />
          <a href="#"> выберите из списка</a>
        </form>
        <ul className={classes.Country}>
          <li>
            <p>Интерсное</p>
          </li>
          <li>
            <p>Топ</p>
          </li>
          <li>
            <p>Отличные предложение</p>
          </li>
          <li>
            <p>Супер цена</p>
          </li>
          <li>
            <p>
              г.Ташкент <img src={pin} alt="location" />
            </p>
          </li>
          <li>
            <p>
              г.Термез <img src={pin} alt="location" />
            </p>
          </li>
          <li>
            <p>
              г.Самарканд <img src={pin} alt="location" />
            </p>
          </li>
        </ul>
        <div className={classes.Top}>
          <p>Вы сейчас в рубрике</p>
          <div className={classes.Wrapper}>
            <ul>
              <li className={classes.Close}>
                Электроника
                <button>
                  <img src={close} alt="close" />
                </button>
              </li>
              <li className={classes.Close}>
                Мониторы
                <button>
                  <img src={close} alt="close" />
                </button>
              </li>
            </ul>
            <img src={bottom} alt="" />
          </div>
        </div>
        <div className={classes.Range}>
          <p>Выберите цену от и до</p>
          <div className={classes.Wrapper}>
            <div className={classes.Slider}>
              <div style={{ left: rangeLeft, right: rangeRight }}></div>
            </div>
            <div className={classes.Input}>
              <input
                type="range"
                className="range-min"
                min="0"
                max="1000000"
                value={minValue}
                step="1000"
                onChange={(e) => {
                  setMinValue(e.target.value);
                  setRangeLeft((e.target.value / max) * 100 + "%");
                }}
              />
              <input
                type="range"
                className="range-max"
                min="0"
                max="1000000"
                value={maxValue}
                step="1000"
                onChange={(e) => {
                  setMaxValue(e.target.value);
                  setRangeRight(100 - (e.target.value / max) * 100 + "%");
                }}
              />
            </div>
            <div className={classes.Text}>
              <p>От {minValue} сум </p>
              <p>до {maxValue} сум</p>
            </div>
          </div>
        </div>
        <ul className={classes.Sort}>
          <li>
            <a href="#">
              Состояние
              <img src={bottom} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              Тип объявщика
              <img src={bottom} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              Ташкент Мирза улугбекский район
              <img src={bottom} alt="" />
            </a>
          </li>
        </ul>
        <ul className={classes.TopList}>
          {topCard.map((item) => {
            return (
              <li key={item.id}>
                <div className={classes.Top}>
                  <img src={top} alt="" />
                  <p>TOP</p>
                </div>
                <Link
                  to={`/single/${item.id}`}
                  onClick={() => {
                    setItemCard(item);
                  }}
                >
                  <img src={item.image} alt={item.description} />
                </Link>
                <div className={classes.Desc}>
                  <p>{item.title}</p>
                  <p>Вчера 22:55</p>
                  <p>{item.price * 1000} сум</p>
                </div>
              </li>
            );
          })}
        </ul>
        <CategoryList minValue={minValue} maxValue={maxValue} cards={fetchData} searchValue={searchValue} setItemCard={setItemCard} />
        <ShowBtn />
        <div className={classes.Search}>
          <div className={classes.Top}>
            <img src={search} alt="search" />
            <p>СЕЙЧАС ИЩУТ</p>
          </div>
          <ul>
            <li>
              <p className={classes.Text}>купить Мясная продукция</p>
              <div>
                <img src={search} alt="search" />
                <p>2 часа назад</p>
              </div>
            </li>
            <li>
              <p className={classes.Text}>купить Мясная продукция</p>
              <div>
                <img src={search} alt="search" />
                <p>2 часа назад</p>
              </div>
            </li>
            <li>
              <p className={classes.Text}>купить Мясная продукция</p>
              <div>
                <img src={search} alt="search" />
                <p>2 часа назад</p>
              </div>
            </li>
            <li>
              <p className={classes.Text}>купить Мясная продукция</p>
              <div>
                <img src={search} alt="search" />
                <p>2 часа назад</p>
              </div>
            </li>
          </ul>
        </div>
        <Recomended />
      </div>
    </div>
  );
}

export default Category;
