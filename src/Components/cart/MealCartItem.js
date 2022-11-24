import classes from './MealCartItem.module.css'

const MealCartItem = (props) => {

    return (
            <li>
                <div className={classes.mealCart_Item}>
                    <h3>{props.mealName}</h3>
                    <span className={classes.mealCart_Price}>{props.mealPrice}</span>
                    <span className={classes.mealCart_Amount}>{props.amount}</span>
                </div>         
            </li>
    );

}

export default MealCartItem;