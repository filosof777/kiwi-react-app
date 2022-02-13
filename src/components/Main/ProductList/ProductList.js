import React from "react";
import Loading from "../../Loading/Loading";
import ProductCardItem from "./ProductCardItem/ProductCardItem";
import classes from "./ProductList.module.scss";

function ProductList({ cards, search, setItemCard }) {
  return (
    <ul className={classes.ProductList}>
      {cards.length <= 0 ? (
        <Loading />
      ) : (
        cards
          .filter((item) => item.title.toLowerCase().includes(search))
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
