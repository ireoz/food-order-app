import { Fragment } from "react";
import image from "../../images/meals.jpg";
import classes from "./Header.module.css";
import CartButton from "../cart/CartButton";

const Header = (props) => {

    return (
        <Fragment>
            <header>
                <div className={classes.header_bar}>
                 <h1>ReactMeals</h1> 
                 <CartButton amount={props.amount} onClick={props.displayModalHandle}></CartButton>
                </div>
                <div className={classes.header_img}>
                    <img src={image} alt="A table full of delicius food"/>
                </div>
            </header>
        </Fragment>
    );


}

export default Header;