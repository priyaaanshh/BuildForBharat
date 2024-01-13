/* eslint-disable react/prop-types */
import "./ProductCard.css";
import Carousel from "./Carousel";
import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => {
  const { name, price, description, images } = product;

  return (
    <div className="product-card">
      <div className="carouselWrapper">
        <Carousel images={images} />
      </div>
      <Link to='/product' className="product-details">
        <div className="cardRow">
          <h2 className="cardName">{name}</h2>
          <div className="cardPrice">Price: ${price}</div>
        </div>
        <div className="cardDescription">{description.slice(0, 100)}</div>
      </Link>
    </div>
  );
};

export default ProductCard;
