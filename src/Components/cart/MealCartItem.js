import Button from '../UI/Button';
import classes from './MealCartItem.module.css'
import styles from '../UI/Button.module.css'

const MealCartItem = (props) => {

    return (
            <li>
                <div className={classes.mealCart_Item}>
                    <h3>{props.mealName}</h3>
                    <span className={classes.mealCart_Price}>{props.mealPrice}</span>
                    <span className={classes.mealCart_Amount}>{props.amount}</span>
                </div>
                <div className={classes.mealCart_button}>
                    <Button type="submit" className={`${styles.button} ${styles.button_secondary}`}>
                     Remove
                    </Button>
                </div>       
            </li>
    );

}

export default MealCartItem;