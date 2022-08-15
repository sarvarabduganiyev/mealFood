import CategoryItems from "./CategoryItem";

function CategoryList({ FilteredData }) {
  return (
    <div className="list grid__list container__size food__grid">
      {FilteredData().map((el) => (
        <CategoryItems key={el.idCategory} {...el} />
      ))}
    </div>
  );
}

export default CategoryList;
