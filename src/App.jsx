import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import ProductInfo from "./Pages/ProductInfo";
import Cart from "./Pages/Cart";
import CategoriesPage from "./Pages/CategoriesPage";
import { Help } from "./Pages/Help";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductInfo />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/category/:category" element={<CategoriesPage />}></Route>
        <Route path="/help" element={<Help />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
