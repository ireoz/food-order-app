import { Fragment } from "react";
import classes from './MealItem.module.css'
import Form from "../UI/From";

const MealItem = (props) => {

    const captureMealCartData = (mealID, amount) => {
        props.captureMealCartData(mealID,amount)
    }

    return (
        <Fragment>
            <li className={classes.meal_item_list}>
            <div className={classes.meal_item_container}>
                <div className={classes.meal_item_content}>
                    <h3>{props.mealName}</h3>
                    <p>{props.mealDescription}</p>
                    <span>{props.mealPrice}</span>
                </div>
                <div className={classes.meal_item_content}>
                   <Form mealID={props.mealID} captureMealCartData={captureMealCartData}/>
                </div>
            </div>
            </li>
        </Fragment>
    );

}

export default MealItem;
