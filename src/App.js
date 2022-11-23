import { Fragment, useState } from "react";
import MealList from "./Components/Meals/MealList";
import MealSummary from "./Components/Meals/MealSummary";
import Header from "./Components/UI/Header";
import Modal from "./Components/cart/Modal";


function App() {

  let [displayModal, setDisplayModal] = useState(false)
  
  const hideModalHandle = () => {setDisplayModal(false)}
  const displayModalHandle = () => {setDisplayModal(true)}

  return (
    <Fragment>
      {displayModal && <Modal hideModalHandle={hideModalHandle}/>}
      <Header displayModalHandle={displayModalHandle}/>
      <MealSummary/>
      <MealList/>
    </Fragment>
  );
}

export default App;
