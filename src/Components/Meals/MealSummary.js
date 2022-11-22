import { Fragment } from "react";
import classes from './MealSummary.module.css'

const MealSummary = () => {
    return (
        <Fragment>
            <section className={classes.meal_summary_container}>
                <h2>Delicious Food, Delivered To You</h2>
                <p>Choose your favourite meal from our broad selection
                    of available meals and enjoy a delicious lunch or dinner at home.
                </p>
                <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs</p>
            </section>
        </Fragment>
    );

}

export default MealSummary