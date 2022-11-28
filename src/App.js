import { Fragment, useReducer, useState } from "react";
import MealList from "./Components/Meals/MealList";
import MealSummary from "./Components/Meals/MealSummary";
import Header from "./Components/UI/Header";
import Modal from "./Components/cart/Modal";

const reducer = (state,action) => {

  if(action.type === "ADD_MEAL") {
    const mealCartItem = action.meals[action.mealID]
    mealCartItem.amount = action.mealsCount
    mealCartItem.uniqueID = (Math.random())
    const mealCartItemCost = (+mealCartItem.amount * +mealCartItem.mealPrice);
    
    return  {mealsCart : [mealCartItem,...state.mealsCart], 
      mealsCount: (state.mealsCount + +action.mealsCount), 
      totalAmount: (+state.totalAmount + +mealCartItemCost).toFixed(2) }
  }

  if(action.type === "REMOVE_MEAL"){
    const updatedMealsCart = state.mealsCart.filter(meal => meal.uniqueID !== +action.uniqueID )
    return  {mealsCart : [...updatedMealsCart], 
      mealsCount: (+state.mealsCount - +action.mealQuantity), 
      totalAmount: (+state.totalAmount - (+action.mealPrice * +action.mealQuantity)).toFixed(2) }
  }
}


function App() {

  const [displayModal, setDisplayModal] = useState(false)
  const [state, dispatch] = useReducer(reducer, {mealsCart: [], mealsCount: 0, totalAmount: 0})
  
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

const updateMealCart = (mealID, mealCount) => 
{
  dispatch({type: 'ADD_MEAL', 
  mealID: mealID, 
  mealsCount: mealCount, 
  meals: [...meals]}) 
}

const deleteMealCartItem = (mealCartData) => {
 console.log(mealCartData)
  dispatch({type: 'REMOVE_MEAL', 
  mealQuantity: mealCartData.mealQuantity,
  uniqueID: mealCartData.uniqueID,
  mealPrice: mealCartData.mealPrice}) 
  
}  

  return (
    <Fragment>
      {displayModal && <Modal hideModalHandle={hideModalHandle} mealsCart={state.mealsCart} totalPriceAmount={state.totalAmount} deleteMealCartItem={deleteMealCartItem}/>}
      <Header displayModalHandle={displayModalHandle} mealCount={state.mealsCount}/>
      <MealSummary/>
      <MealList meals={meals} captureMealCartData={updateMealCart}/>
    </Fragment>
  );
}

export default App;
