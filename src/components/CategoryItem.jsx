import { Link } from "react-router-dom";
function CategoryItems(props) {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <span className="card-title card__title">
          <b>{strCategory}</b>
        </span>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn">
          Show Category
        </Link>
      </div>
    </div>
  );
}

export default CategoryItems;
