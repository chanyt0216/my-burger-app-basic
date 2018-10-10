import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.css";

// import { withRouter } from "react-router-dom";

const burger = props => {
  console.log(props);

  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    /**
     * @argument arr is pre array
     * @argument el is current array
     */
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

// export default withRouter(burger);
export default burger;

/**
 * If need direct access to match history and location and don't want to manuall pass
 * it from the top level component, it can use withRouter('High Order Component' provided by react-router-dom)
 */
