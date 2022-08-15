import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import MealDetail from "./pages/MealDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:name" element={<Category />} />
      <Route path="/meildetail/:detail" element={<MealDetail />} />
    </Routes>
  );
}

export default App;
