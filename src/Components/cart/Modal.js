import styles from './Modal.module.css'
import Button from '../UI/Button';
import classes from '../UI/Button.module.css'
import MealCartList from './MealCartList';



const Modal = (props) => {
    return (
        <div className={styles.modal_border} >
            <div className={styles.modal_card}>
                <div className={styles.modal_header}>
                <MealCartList cartMeals={props.mealsCart}/>
                </div>
                <div className={styles.modal_totalContent}>
                  <h3>Total Amount</h3>
                  <span>{props.totalPriceAmount}</span>
                </div>
                <div className={styles.modal_footer}>
                 <Button className={`${classes.button} ${classes.button_secondary}`} onClick={props.hideModalHandle} >Close</Button>
                 <Button className={`${classes.button} ${classes.button_primary}`}>Order</Button>
                </div>
            </div>
        </div>
    );
}

export default Modal;