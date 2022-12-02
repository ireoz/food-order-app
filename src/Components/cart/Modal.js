import styles from './Modal.module.css'
import Button from '../UI/Button';
import classes from '../UI/Button.module.css'
import Card from '../UI/Card';
import MealCartList from './MealCartList';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';


export const ModalContent = (props) => {

    const deleteMealCartItem = (mealCartData) => {
        props.deleteMealCartItem(mealCartData);
    }  

    return (
             <div className={styles.modal_border} > 
                <Card >
                <div className={styles.modal_header}>
                <MealCartList cartMeals={props.cartMeals} deleteMealCartItem={deleteMealCartItem}/>
                </div>
                <div className={styles.modal_totalContent}>
                  <h3>Total Amount</h3>
                  <span>{props.totalPriceAmount}</span>
                </div>
                <div className={styles.modal_footer}>
                 <Button className={`${classes.button} ${classes.button_secondary}`} onClick={props.onClick} >Close</Button>
                 <Button className={`${classes.button} ${classes.button_primary}`}>Order</Button>
                </div>
            </Card>
            </div>
    );
}

const Modal = (props) => {

    const deleteMealCartItem = (mealCartData) => {
        props.deleteMealCartItem(mealCartData);
    }  

    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalContent cartMeals={props.mealsCart} deleteMealCartItem={deleteMealCartItem} onClick={props.hideModalHandle}/>, document.getElementById('modal'))}
        </Fragment>
    );
}

export default Modal;