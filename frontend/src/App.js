import CreateProduct from "./Components/Create_Product";
import Home from "./Components/Home";
import Product from "./Components/Product_page";
import AllProduct from "./Components/Product_page";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Product />} />
        <Route path="createproduct" element={<CreateProduct />} />
        <Route path="login" element={<Login />} />
        <Route path="allproduct" element={<AllProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
