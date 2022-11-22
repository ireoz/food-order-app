import { Fragment } from "react";
import MealSummary from "./Components/Meals/MealSummary";
import Header from "./Components/UI/Header";

function App() {
  return (
    <Fragment>
      <Header/>
      <MealSummary/>
    </Fragment>
  );
}

export default App;
