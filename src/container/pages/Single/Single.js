import React, { useEffect, useState } from "react";
import classes from "./Single.module.scss";
import Recomended from "../../../components/Recomended/Recomended";
import Loading from "../../../components/Loading/Loading";

function Single({ itemCard }) {
  const [telNumber, setTelNumber] = useState("****");
  const [fetchData, setFetchData] = useState([]);
  const [changeImage, setChangeImage] = useState(itemCard.image);
  const [changePrice, setChangePrice] = useState(itemCard.price);
  const [changeTitle, setChangeTitle] = useState(itemCard.title);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data);
      });
  }, []);

  return (
    <div className={classes.Single}>
      <div className="container">
        <h1>{changeTitle}</h1>
        {fetchData.length <= 0 ? (
          <Loading />
        ) : (
          <div className={classes.Content}>
            <div className={classes.ImageWrapper}>
              <ul>
                {fetchData.map((item) => {
                  return item.category === itemCard.category ? (
                    <li key={item.id}>
                      <img
                        src={item.image}
                        onClick={() => {
                          setChangeImage(item.image);
                          setChangePrice(item.price);
                          setChangeTitle(item.title);
                        }}
                        alt="house"
                      />
                    </li>
                  ) : null;
                })}
              </ul>
              <img src={changeImage} alt="house" />
            </div>
            <div className={classes.Description}>
              <div className={classes.Data}>
                <p>Артикул: 4418970</p>
                <p>обновлено: 28.04.17 добавлено: 28.04.17</p>
              </div>
              <h2>{changePrice * 1000} сум</h2>
              <a className={classes.Address} href="#">
                Ташкент, Ташкентская область, Юнусабадский район{" "}
              </a>
              <button className={classes.Tel}>
                +99891 166{telNumber}
                <span
                  onClick={() =>
                    setTelNumber(telNumber === "****" ? 9876 : "****")
                  }
                >
                  Покозать польностю
                </span>
              </button>
              <span className={classes.Author}>
                Автор обьявлении:
                <a href="mailto:zuhriddin@mail.com">Зухриддин Темиров</a>
              </span>
              <ul className={classes.ButtonList}>
                <li>
                  <button>Написать автору</button>
                </li>
                <li>
                  <button>Предложить свою цену</button>
                </li>
              </ul>
              <ul className={classes.List}>
                <li>
                  <p>Количество комнат:</p> <span>6</span>
                </li>
                <li>
                  <p>
                    Общая площадь: <span>40 м2</span>
                  </p>
                </li>
                <li>
                  <p>
                    Этаж: <span>32</span>
                  </p>
                </li>
                <li>
                  <p>
                    Этажность дома: <span>6</span>
                  </p>
                </li>
                <li>
                  <p>
                    Состояние квартиры: <span>Первая сдача</span>
                  </p>
                </li>
                <li>
                  <p>
                    Планировка <a href="#">Раздельная</a>
                  </p>
                </li>
                <li>
                  <p>
                    Этаж: <span>32</span>
                  </p>
                </li>
                <li>
                  <p>
                    Год постройки/сдачи <a>Сдача в 2017</a>
                  </p>
                </li>
                <li>
                  <p>
                    Ремонт <span>Авторский проект</span>
                  </p>
                </li>
                <li>
                  <p>
                    Санузел <a href="#">2 санузла и более</a>
                  </p>
                </li>
                <li>
                  <p>
                    Меблирована <a href="#">Да</a>
                  </p>
                </li>
                <li>
                  <p>
                    Высота потолков <span>32</span>
                  </p>
                </li>
              </ul>
              <div className={classes.Info}>
                <span>Рядом есть</span>
                <p>
                  Больница, поликлиника, Детская, площадка, Детский сад,
                  Остановки, Парк, зелёная зона, Развлекательные заведения,
                  Рестораны, кафе
                </p>
              </div>
              <p className={classes.Text}>
                Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме.
                Новостройка Голден Хаус жылой комплекс Етти Чинор Очень
                качественный и дорогой ремонт. Комнаты полнастю разделные
                болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт
                шыкарный обсалютно новый. Ремонт делолся из очень дорогова
                материяла.
                <br />
                <br />
                Дорогая класическая кухонная мебель. Джаккузи,Тёплые полы в
                каждой комнате. Дорогие люстры вовсех комнатах решодки на окнах.
                Теретория охранается. Всё предусмотренно для детей деские
                площядки качели итд. Торг наместе. Торопитесь продаю нужны
                денги. Первый золотой этаж и паследний в этом коплексе.
                Торопитесь.
              </p>
              <div className={classes.Hint}>
                <p>Просмотры:10958</p>
                <button>Пожаловатся</button>
              </div>
            </div>
          </div>
        )}

        <Recomended />
      </div>
    </div>
  );
}

export default Single;
