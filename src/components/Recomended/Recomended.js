import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loading from "../Loading/Loading";
import CardNameItem from "../Main/CardNameItem/CardNameItem";
import ProductCardItem from "../Main/ProductList/ProductCardItem/ProductCardItem";
import ShowBtn from "../ShowBtn/ShowBtn";
import classes from "./Recomended.module.scss";

function Recomended() {
  const {t, i18n} = useTranslation();
  const [smallCard, setSmallCard] = useState([]);
  const [smallLimit, setSmallLimit] = useState(4);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${smallLimit}`)
      .then((res) => res.json())
      .then((data) => {
        setSmallCard(data);
      });
  }, [smallLimit]);
  return (
    <div className={classes.Recomended}>
      <div className="container">
        <ul className={classes.CardName}>
          <CardNameItem classes={classes} title={t('cardbtn1')} />
          <CardNameItem classes={""} title={t('cardbtn2')} />
          <CardNameItem classes={""} title={t('cardbtn3')} />
        </ul>
        <div>
          <ul className={classes.Cards}>
            {smallCard.length <= 0 ? (
              <Loading />
            ) : (
              smallCard.map((item) => {
                return <ProductCardItem key={item.id} item={item} />;
              })
            )}
          </ul>
          <ShowBtn smallLimit={smallLimit} setSmallLimit={setSmallLimit} />
        </div>
      </div>
    </div>
  );
}

export default Recomended;
