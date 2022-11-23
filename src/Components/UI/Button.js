import { Fragment } from 'react';
import classes from './Button.module.css'

const Button = (props) => {
    const styles = props.className;
    return (
        <Fragment>
        <button className={styles} type={props.type}>{props.children}</button>
        </Fragment>
    );

}

export default Button;