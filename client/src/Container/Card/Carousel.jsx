/* eslint-disable react/prop-types */
import "./Carousel.css";
import { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="carousel">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`carousel-img-${i}`}
          className={i === index ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default Carousel;
