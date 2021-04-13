import React from "react";

import classes from "./Order.css";

const order = (props) => {
  // let transformedIngredients = Object.keys(props.ingredients)
  //   .map((igKey) => {
  //     return [...Array(props.ingredients[igKey])].map((_, i) => (
  //       <BurgerIngredient key={igKey + i} type={igKey} />
  //     ));
  //   })
  //   .reduce((arr, el) => {
  //     return arr.concat(el);
  //   }, []);
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((ig, i) => {
    return (
      <span
        key={i}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          padding: "5px",
          border: "1px solid #eee",
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
