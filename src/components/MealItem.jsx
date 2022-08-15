import { Link } from "react-router-dom";
function MealItem({ strMeal, strMealThumb, idMeal }) {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="card-content">
          <span className="card-title card__title">
            <b>{strMeal}</b>
          </span>
        </div>
        <div className="card-action">
          <Link to={`/meildetail/${idMeal}`} className="btn">
            Show Recipe
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MealItem;
