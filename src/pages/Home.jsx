import { useEffect, useState } from "react";
import { getAllCategories } from "../api";
import CategoryList from "../components/CategoryList";
// import Navbar from "../components/Navbar";
import Loader from "./Loader";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(data.categories);
    });
  }, []);

  const FilteredData = () => {
    return filteredCatalog.filter((item) =>
      item.strCategory.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container__size">
        <div className="input-field col s6">
          <input
            id="search-feild last_name"
            type="text"
            placeholder="Search..."
            className="validate"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {catalog.length ? (
        <CategoryList FilteredData={FilteredData} />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Home;
