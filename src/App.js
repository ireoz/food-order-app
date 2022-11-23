import { Fragment, useState } from "react";
import MealList from "./Components/Meals/MealList";
import MealSummary from "./Components/Meals/MealSummary";
import Header from "./Components/UI/Header";
import Modal from "./Components/cart/Modal";


function App() {

  let [displayModal, setDisplayModal] = useState(false)
  
  const hideModalHandle = () => {setDisplayModal(false)}
  const displayModalHandle = () => {setDisplayModal(true)}


  const meals = [{
    id: 1,
    mealName: 'Sushi',
    mealDescription: 'Finest fish and veggies',
    mealPrice: '$22.99',
    mealID: 1
},
{
    id: 2,
    mealName: 'Schnitzel',
    mealDescription: 'A German Speciality',
    mealPrice: '$16.50',
    mealID: 2
}]




  return (
    <Fragment>
      {displayModal && <Modal hideModalHandle={hideModalHandle} meals={meals}/>}
      <Header displayModalHandle={displayModalHandle}/>
      <MealSummary/>
      <MealList meals={meals}/>
    </Fragment>
  );
}

export default App;
