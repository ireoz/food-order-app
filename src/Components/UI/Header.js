import { Fragment } from "react";
import image from "../../images/meals.jpg";
import classes from "./Header.module.css";
import CartButton from "../cart/CartButton";

const Header = () => {

    return (
        <Fragment>
            <header>
                <div className={classes.header_bar}>
                 <h1>ReactMeals</h1> 
                 <CartButton></CartButton>
                </div>
                <div className={classes.header_img}>
                    <img src={image} alt="A table full of delicius food"/>
                </div>
            </header>
        </Fragment>
    );


}

export default Header;