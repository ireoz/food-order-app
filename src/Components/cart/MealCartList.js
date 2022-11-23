import { Fragment } from "react";
import MealCartItem from "./MealCartItem";

const MealCartList = (props) => {

    

    return (
        <Fragment>
            <ul>
            {props.cartMeals.map(meal => {
          return <MealCartItem 
            key = {Math.random()}
            mealName = {meal.mealName}
            mealPrice = {meal.mealPrice}
            mealID = {meal.mealID}
            />
            })}
            </ul>
        </Fragment>
    );

}

export default MealCartList;