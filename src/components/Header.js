import { Link } from "react-router-dom";
import "../styles/Header.css";
import myImg from "../assets/my-img.png";
import logoImg from "../assets/logo-img.png";
import cartImg from "../assets/cart-img.png";

function Header() {
  return (
    <header>
      <div className="logoBar">
        <Link to="pages/Home">
          <img src={logoImg} alt="로고" className="logoImg" />
        </Link>
      </div>
      <div className="navBar">
        <div className="nav1">
          <Link to="">새로 나왔어요!</Link>
          <Link to="">인기짱!</Link>
          <Link to="">할인중!</Link>
        </div>
        <div className="nav2">
          <Link to="/pages/Cart">
            <img src={cartImg} alt="장바구니" className="cartImg" />
          </Link>
          <Link to="/pages/MyPage">
            <img src={myImg} alt="마이버튼" className="myImg" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
