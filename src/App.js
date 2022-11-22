import { Fragment } from "react";
import MealsItem from "./Components/Meals/MealsItem";
import MealSummary from "./Components/Meals/MealSummary";
import Header from "./Components/UI/Header";

function App() {
  return (
    <Fragment>
      <Header/>
      <MealSummary/>
      <MealsItem/>
    </Fragment>
  );
}

export default App;
