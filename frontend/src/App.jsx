import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Catalog from "./Catalog";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
    </Routes>
  );
}
