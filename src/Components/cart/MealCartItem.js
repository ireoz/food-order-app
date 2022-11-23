

const MealCartItem = (props) => {

    return (
            <li>
            <div>
                <div >
                    <h3>{props.mealName}</h3>
                    <span>{props.mealPrice}</span>
                </div>
                <div>
                </div>
            </div>
            </li>
    );

}

export default MealCartItem;