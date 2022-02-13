import React from "react";
import Loading from "../Loading/Loading";
import ProductCardItem from "../Main/ProductList/ProductCardItem/ProductCardItem";
import classes from "./ProductList.module.scss";

function ProductList({ cards, searchValue, setItemCard, minValue, maxValue }) {
  const summ = maxValue - minValue;

  return (
    <ul className={classes.ProductList}>
      {cards.length <= 0 ? (
        <Loading />
      ) : (
        cards
          .filter(
            (item) =>
              minValue < item.price * 1000 && maxValue > item.price * 1000
          )
          .filter((item) => item.title.toLowerCase().includes(searchValue))
          .map((item) => {
            return (
              <ProductCardItem
                key={item.id}
                item={item}
                setItemCard={setItemCard}
              />
            );
          })
      )}
    </ul>
  );
}

export default ProductList;
