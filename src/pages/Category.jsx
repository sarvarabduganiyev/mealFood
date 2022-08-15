import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilterCategories } from "../api";
import MealList from "../components/MealList";
import Loader from "./Loader";
function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    getFilterCategories(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);
  return <div>{meals.length ? <MealList meals={meals} /> : <Loader />}</div>;
}

export default Category;
