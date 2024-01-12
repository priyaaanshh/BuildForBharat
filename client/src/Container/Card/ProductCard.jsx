/* eslint-disable react/prop-types */
import "./ProductCard.css";
import Carousel from "./Carousel";

const ProductCard = ({ product }) => {
  const { name, price, description, images } = product;

  return (
    <div className="product-card">
      <div className="carouselWrapper">
        <Carousel images={images} />
      </div>
      <div className="product-details">
        <div className="cardRow">
          <h2 className="cardName">{name}</h2>
          <div className="cardPrice">Price: ${price}</div>
        </div>
        <div className="cardDescription">{description.slice(0, 100)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
