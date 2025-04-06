import { Link } from "react-router-dom";
import "../styles/Header.css";
import myImg from "../assets/my-img.png";
import logoImg from "../assets/logo-img.png";
import cartImg from "../assets/cart-img.png";

function Header() {
  return (
    <header>
      <div className="logoBar">
        <Link to="/">
          <img src={logoImg} alt="로고" className="logoImg" />
        </Link>
      </div>
      <div className="navBar">
        <div className="nav1">
          <Link to="/pages/category/New">새로 나왔어요!</Link>
          <Link to="/pages/category/Best">인기짱!</Link>
          <Link to="/pages/category/Sale">할인중!</Link>
          <Link to="">공간</Link>
          <Link to="">정신</Link>
          <Link to="">시간</Link>
          <Link to="">실패작!</Link>
          <Link to="">마법부 허가필요!</Link>
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
