import MealItem from "./MealItem";

function MealList({ meals }) {
  return (
    <div className="grid__list container__size food__grid">
      {meals.map((el) => (
        <MealItem key={el.idMeal} {...el} />
      ))}
    </div>
  );
}

export default MealList;
