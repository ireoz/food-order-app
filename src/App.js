import { Fragment, useState } from "react";
import MealList from "./Components/Meals/MealList";
import MealSummary from "./Components/Meals/MealSummary";
import Header from "./Components/UI/Header";
import Modal from "./Components/cart/Modal";


function App() {

  let [displayModal, setDisplayModal] = useState(false)
  let [mealsCart, setMealsCart] = useState([]);
  let [amount, setAmount] = useState([]);
  
  const hideModalHandle = () => {setDisplayModal(false)}
  const displayModalHandle = () => {setDisplayModal(true)}


  const meals = [{
    id: 1,
    mealName: 'Sushi',
    mealDescription: 'Finest fish and veggies',
    mealPrice: '$22.99',
    mealID: 0,
    amount: 0
},
{
    id: 2,
    mealName: 'Schnitzel',
    mealDescription: 'A German Speciality',
    mealPrice: '$16.50',
    mealID: 1,
    amount: 0
}]

const updateMealCart = (mealID, amount) => {
  setAmount(prevstate =>  [{meal:mealID, amount:amount},...prevstate])

  setMealsCart(prevstate => {
    const mealCartItem = meals[mealID]
    mealCartItem.amount = amount;
   return  [mealCartItem,...prevstate]
  })
}
console.log(mealsCart)
  return (
    <Fragment>
      {displayModal && <Modal hideModalHandle={hideModalHandle} mealsCart={mealsCart} />}
      <Header displayModalHandle={displayModalHandle} />
      <MealSummary/>
      <MealList meals={meals} captureMealCartData={updateMealCart}/>
    </Fragment>
  );
}

export default App;
