/* eslint-disable react/prop-types */
import "./Product.css";
import Carousel from "../Card/Carousel";
const Product = ({ product }) => {
  const { name, price, description, images } = product;
  return (
    <div className="Product">
      <Carousel images={images} />
      <div className="nameRow">
        <div className="productName">{name}</div>
        <div className="productPrice">Price: ${price}</div>
      </div>
      <div className="productDescription">{description}</div>
    </div>
  );
};

export default Product;
