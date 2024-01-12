/* eslint-disable react/prop-types */
import "./Carousel.css";
import { useState} from "react";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carouselButton" onClick={prevImage}>
        &lt;
      </button>
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`carousel-img-${i}`}
          className={i === index ? "active" : ""}
        />
      ))}
      <button className="carouselButton" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
