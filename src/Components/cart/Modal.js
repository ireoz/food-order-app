import styles from './Modal.module.css'
import Button from '../UI/Button';
import classes from '../UI/Button.module.css'



const Modal = (props) => {
    return (
        <div className={styles.errorModal_border} >
            <div className={styles.errorModal_card}>
                <div className={styles.errorModal_header}>
                d
                </div>
                <div className={styles.errorModal_content}>
                  d
                </div>
                <div className={styles.errorModal_footer}>
                 <Button className={`${classes.button} ${classes.button_secondary}`} onClick={props.hideModalHandle} >Close</Button>
                 <Button className={`${classes.button} ${classes.button_primary}`}>Order</Button>
                </div>
            </div>
        </div>
    );
}

export default Modal;