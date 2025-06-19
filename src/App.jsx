import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./App.css";
import Cart from "./pages/Cart";
import MenCategory from "./pages/MenCategory";

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/men" element={<MenCategory />} />
      </Routes>
    </div>
  );
}
