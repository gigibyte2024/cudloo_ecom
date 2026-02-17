import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Catalog from "./Catalog";
import Product from "./Product";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}
