import { Fragment } from "react";
import image from "../../images/meals.jpg";
import classes from "./Header.module.css";

const Header = () => {

    return (
        <Fragment>
            <header>
                <div className={classes.header_bar}>
                 <h1>ReactMeals</h1> 
                 <button>Some text</button>
                </div>
                <div className={classes.header_img}>
                    <img src={image} alt="A table full of delicius food"/>
                </div>
            </header>
        </Fragment>
    );


}

export default Header;