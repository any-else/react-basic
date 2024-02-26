import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1> Trang Home </h1>
      <Link to={"/detail"}> Click để sang trang Detail </Link>
      <Link to={"/cart"}> Click để sang trang Giỏ Hàng</Link>
      <Link to={"/payment"}>Click để sang trang thanh toán</Link>
    </div>
  );
};

export default Home;
