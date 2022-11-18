import { Products } from "./components/Products.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProductsCreate } from "./components/ProductsCreate.jsx";
import { Orders } from "./components/Orders.jsx";

function App() {
  return <BrowserRouter>
    <Routes>
    <Route path="/" element={<Products />} />
    <Route path="/create" element={<ProductsCreate />} />
    <Route path="/orders" element={<Orders />} />
    </Routes>
  </BrowserRouter>
}

export default App;
