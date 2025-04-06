import { useEffect, useState } from "react";
import "../styles/MainBanner.css";
import img1 from "../assets/banner1.png";
import img2 from "../assets/banner2.png";
import img3 from "../assets/banner3.png";
import img4 from "../assets/banner4.png";

const images = [img1, img2, img3, img4];

function MainBanner() {
  const [index, setIndex] = useState(0);

  // 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  const goToPrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="banner-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`배너${i + 1}`}
            className="banner-image"
          />
        ))}
      </div>
      <button className="prev-btn" onClick={goToPrev}>
        ‹
      </button>
      
      <button className="next-btn" onClick={goToNext}>
        ›
      </button>
    </div>
  );
}

export default MainBanner;
