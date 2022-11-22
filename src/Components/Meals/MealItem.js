import { Fragment } from "react";
import classes from './MealItem.module.css'

const MealItem = (props) => {

    return (
        <Fragment>
            <li className={classes.meal_item_list}>
            <div className={classes.meal_item_container}>
                <div className={classes.meal_item_content}>
                    <h3>{props.mealName}</h3>
                    <p>Finest fish and veggies</p>
                    <span>22.99</span>
                </div>
                <div className={classes.meal_item_content}>
                    <form>
                        <label>amount</label>
                        <input/>
                        <div>
                        <button>Add</button>
                        </div>
                    </form>
                </div>
            </div>
            </li>
        </Fragment>
    );

}

export default MealItem;
