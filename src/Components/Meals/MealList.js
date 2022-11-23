import MealItem from "./MealItem";
import Card from "../UI/Card";
import classes from './MealList.module.css'

const MealList = (props) => {

    

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
            />
            })}
            </ul>
        </Card>
    );

}

export default MealList;