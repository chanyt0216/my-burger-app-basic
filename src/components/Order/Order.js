import React from "react";
import classes from "./Order.less";

const Order = props => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutoput = ingredients.map(ig => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutoput}</p>
      <p>
        Price: <strong>USD {props.price.toFixed(2)}</strong>
        {/* 
          (+props.price).toFixed(2)
          or 
          Number.parseFloat(props.price).toFixed(2)
          Both can work 
        */}
      </p>
    </div>
  );
};

export default Order;
