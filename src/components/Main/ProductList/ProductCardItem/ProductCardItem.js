import React from "react";
import { Link } from "react-router-dom";

function ProductCardItem({ item, setItemCard }) {
  
  return (
    <li key={item.id}>
      <Link
        to={`/single/${item.id}`}
        onClick={() => {
          setItemCard(item);
        }}
      >
        <img src={item.image} alt={item.description} />
      </Link>
      <div>
        <p>{item.title}</p>
        <p>Вчера 22:55</p>
        <p>{item.price * 1000} сум</p>
      </div>
    </li>
  );
}

export default ProductCardItem;
