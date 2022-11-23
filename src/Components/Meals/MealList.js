import MealItem from "./MealItem";
import Card from "../UI/Card";
import classes from './MealList.module.css'

const MealList = () => {

    const meals = [{
        id: 1,
        mealName: 'Sushi',
        mealDescription: 'Finest fish and veggies',
        mealPrice: '$22.99'
    },
    {
        id: 2,
        mealName: 'Schnitzel',
        mealDescription: 'A German Speciality',
        mealPrice: '$16.50'
    }]


    return (
        <Card>
            <ul>
            {meals.map(meal => {
          return  <MealItem 
            key = {meal.id}
            mealName = {meal.mealName}
            mealDescription = {meal.mealDescription}
            mealPrice = {meal.mealPrice}
            />
            })}
            </ul>
        </Card>
    );

}

export default MealList;