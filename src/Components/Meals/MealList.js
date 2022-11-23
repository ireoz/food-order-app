import MealItem from "./MealItem";
import Card from "../UI/Card";
import classes from './MealList.module.css'

const MealList = (props) => {

    const captureMealCartData = (mealID, amount) => {
        props.captureMealCartData(mealID,amount)
    }

    return (
        <Card>
            <ul>
            {props.meals.map(meal => {
          return  <MealItem 
            key = {meal.id}
            mealName = {meal.mealName}
            mealDescription = {meal.mealDescription}
            mealPrice = {meal.mealPrice}
            mealID = {meal.mealID}
            captureMealCartData = {captureMealCartData}
            />
            })}
            </ul>
        </Card>
    );

}

export default MealList;