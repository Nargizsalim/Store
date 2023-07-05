import Login from "@/components/pages/Login";
import Dashboard from "@/components/pages/Dashboard";
import Register from "@/components/pages/Register";
import { Routes, Route } from "react-router-dom";
import ProductItem from "./components/pages/ProductItem";
import "./App.css";
import ShoppingBag from "./components/pages/ShoppingBag";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/:id' element={<ProductItem />} />
        <Route path='/registration' element={<Register />} />
        <Route path='/shopping-bag' element={<ShoppingBag />} />
      </Routes>
    </>
  );
}

export default App;
