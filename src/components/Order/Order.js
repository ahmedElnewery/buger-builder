import React from "react";
import style from "./Order.module.css";

const Order = (props) => {
  let ingredients = [];
  for (const ing in props.ingredients) {
    ingredients.push({
      name: ing,
      amount: props.ingredients[ing],
    });
  }
  let ingredientsOutput = ingredients.map((ing) => {
    return (
      <span key={ing.name} style={{
          textTransform:'capitalize',
          margin:'0 4px',
          padding: '4px',
          border: '1px solid #ccc'
      }}>
        {ing.name} ({ing.amount})
      </span>
    );
  });
  return (
    <div className={style.Order}>
      <p>ingredients : {ingredientsOutput}</p>
      <p>
        price:<strong>USD {Number.parseFloat(props.price).toFixed(2)} </strong>
      </p>
    </div>
  );
};

export default Order;
