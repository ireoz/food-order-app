import Button from '../UI/Button';
import classes from './MealCartItem.module.css'
import styles from '../UI/Button.module.css'

const MealCartItem = (props) => {

const deleteMealCartItem = (event) => {
    event.preventDefault()
    props.deleteMealCartItem({
    event: event.nativeEvent.submitter.outerText,
    uniqueID: event.target.firstChild.textContent,
    mealPrice: event.target.children[1].children[1].innerText,
    mealQuantity: event.target.children[1].children[2].innerText})
}

    return (
            <li>
                <form onSubmit={deleteMealCartItem}>
                <label hidden>{props.uniqueID}</label>
                <div className={classes.mealCart_Item}>
                    <h3>{props.mealName}</h3>
                    <label className={classes.mealCart_Price}>{props.mealPrice}</label>
                    <label className={classes.mealCart_Amount}>{props.amount}</label>
                </div>
                <div className={classes.mealCart_button}>
                    <Button type="submit" className={`${styles.button} ${styles.button_secondary} ${styles.button_event}`}>
                     -
                    </Button>
                    <Button type="submit" className={`${styles.button} ${styles.button_secondary} ${styles.button_event}`}>
                     +
                    </Button>
                </div> 
                </form>      
            </li>
    );

}

export default MealCartItem;