import { Fragment } from "react";
import MealList from "./Components/Meals/MealList";
import MealSummary from "./Components/Meals/MealSummary";
import Header from "./Components/UI/Header";

function App() {
  return (
    <Fragment>
      <Header/>
      <MealSummary/>
      <MealList/>
    </Fragment>
  );
}

export default App;
