/* eslint-disable react/prop-types */
import "./Carousel.css";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="carouselButton" onClick={prevImage}>
        &lt;
      </div>
      <Link to="/product">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`carousel-img-${i}`}
            className={i === index ? "active" : ""}
          />
        ))}
      </Link>
      <div className="carouselButton" onClick={nextImage}>
        &gt;
      </div>
    </div>
  );
};

export default Carousel;
