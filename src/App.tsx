import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./pages/detail/Detail";
import Cart from "./pages/cart/Cart";
import Payment from "./pages/payment/Payment";
import Home from "./pages/home/Home";
import Todo from "./pages/todo/Todo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
