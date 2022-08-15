import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../api";
function MealDetail() {
  const { detail } = useParams();

  const [detailData, setDetailData] = useState([]);
  useEffect(() => {
    getMealById(detail).then((data) => {
      setDetailData(data.meals[0]);
    });
  }, [detail]);
  const {
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
    strMeal,
  } = detailData;
  return (
    <div className="container__size detail__style">
      <div>
        <div className=" detail__img__wrapper">
          <img src={strMealThumb} alt={strArea} />
        </div>
        <h1 className="detail-title">{strMeal}</h1>
        <p>{strInstructions}</p>
        {strYoutube ? (
          <div className="iframe-container">
            <iframe
              className="responsive-iframe"
              width="683"
              height="384"
              src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
              title="food"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default MealDetail;
