import { Fragment } from "react";
import classes from './MealsItem.module.css'
import Card from "../UI/Card";

const MealsItem = (props) => {

    return (
        <Fragment>
            <Card>
            <li className={classes.meal_item_list}>
            <div className={classes.meal_item_container}>
                <div className={classes.meal_item_content}>
                    <h3>Sushi</h3>
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
            </Card>
        </Fragment>
    );

}

export default MealsItem;
