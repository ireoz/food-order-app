import { Fragment } from "react";
import MealCartItem from "./MealCartItem";
import classes from './MealCartList.module.css'

const MealCartList = (props) => {

    const deleteMealCartItem = (mealCartData) => {
        props.deleteMealCartItem(mealCartData);
    }  

    return (
        <Fragment>
            <ul className={classes.mealCart_list}>
            {props.cartMeals.map(meal => {
          return <MealCartItem 
            key = {Math.random()}
            mealName = {meal.mealName}
            mealPrice = {meal.mealPrice}
            mealID = {meal.mealID}
            amount = {meal.amount}
            uniqueID = {meal.uniqueID}
            deleteMealCartItem={deleteMealCartItem}
            />
            })}
            </ul>
        </Fragment>
    );

}

export default MealCartList;