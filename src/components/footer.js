import { Link } from "react-router-dom";
import "../styles/Footer.css";
import youtubeImg from "../assets/youtube-img.png"

function Footer() {
  return (
    <div className="FooterContainer">
      <div className="ssalInfo">
        <p>
          인천 미추홀구 숙골로 113 <br></br>청운대학교 인천캠퍼스 8층 838호
        </p>
        <p>bomingim409@gmail.com</p>
        <p>010-5095-3194</p>
        <p>09:00 - 18:00</p>
      </div>
      <div className="molaInfo">
        <Link to="">개인 정보 처리 방침</Link>
        <Link to="">FAQ / 자주 묻는 질문</Link>
        <Link to="">배송 및 반품 정책</Link>
      </div>
      <div className="snsInfo">
        <Link to="">
          <img src={youtubeImg} alt="유튜브" className="youtubeImg" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
