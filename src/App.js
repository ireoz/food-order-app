import { Fragment, useState } from "react";
import MealList from "./Components/Meals/MealList";
import MealSummary from "./Components/Meals/MealSummary";
import Header from "./Components/UI/Header";
import Modal from "./Components/cart/Modal";


function App() {

  let [displayModal, setDisplayModal] = useState(false)
  let [mealsCart, setMealsCart] = useState([]);
  let [mealCount, setMealCount] = useState(0);
  let [totalAmount, setTotalAmount] = useState(0);
  
  const hideModalHandle = () => {setDisplayModal(false)}
  const displayModalHandle = () => {setDisplayModal(true)}


  const meals = [{
    uniqueID: 0,
    mealName: 'Sushi',
    mealDescription: 'Finest fish and veggies',
    mealPrice: '22.99',
    mealID: 0,
    amount: 0
},
{
    uniqueID: 0,
    mealName: 'Schnitzel',
    mealDescription: 'A German Speciality',
    mealPrice: '16.50',
    mealID: 1,
    amount: 0
},
{
  uniqueID: 0,
  mealName: 'Barbecue Burger',
  mealDescription: 'American, raw, meaty',
  mealPrice: '12.99',
  mealID: 2,
  amount: 0
},
{ uniqueID: 0,
  mealName: 'Green Bowl',
  mealDescription: 'Healthy....and green',
  mealPrice: '18.99',
  mealID: 3,
  amount: 0
}]

const updateMealCart = (mealID, mealCount) => {
  setMealCount(prevstate =>  prevstate + +mealCount)

  setMealsCart(prevstate => {
    const mealCartItem = meals[mealID]
    mealCartItem.amount = mealCount;
    mealCartItem.uniqueID = (Math.random())
   return  [mealCartItem,...prevstate]
  })

  setTotalAmount(prevstate => {
    const mealCartItem = meals[mealID];
    mealCartItem.amount = mealCount;
    const mealCartItemCost = +mealCartItem.amount * +mealCartItem.mealPrice;
    return [(+mealCartItemCost + +prevstate).toFixed(2)]
  })
}



const deleteMealCartItem = (mealCartData) => {

  setMealsCart(prevstate => {
   const updatedMealsCart = prevstate.filter(meal => meal.uniqueID !== +mealCartData.uniqueID )
   return  updatedMealsCart
  })

  setMealCount(prevstate =>  prevstate - mealCartData.mealQuantity)

  setTotalAmount(prevstate => {
    const figureToDeduct = (mealCartData.mealQuantity * mealCartData.mealPrice)
    console.log(figureToDeduct, typeof(figureToDeduct));
    return [(prevstate - figureToDeduct).toFixed(2)];
  })
  
}  

  return (
    <Fragment>
      {displayModal && <Modal hideModalHandle={hideModalHandle} mealsCart={mealsCart} totalPriceAmount={totalAmount} deleteMealCartItem={deleteMealCartItem}/>}
      <Header displayModalHandle={displayModalHandle} mealCount={mealCount}/>
      <MealSummary/>
      <MealList meals={meals} captureMealCartData={updateMealCart}/>
    </Fragment>
  );
}

export default App;
