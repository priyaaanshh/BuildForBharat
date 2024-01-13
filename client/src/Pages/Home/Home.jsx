import ProductCard from '../../Container/Card/ProductCard';
import './Home.css'

const Home = () => {
    const products = [
      {
        name: "Product 1",
        price: 49.99,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        images: [
          "https://m.media-amazon.com/images/I/712r-pXsP+L._SY879_.jpg",
          "https://m.media-amazon.com/images/I/71h-8TFcQHL._SY879_.jpg",
          "https://m.media-amazon.com/images/I/71iLgFT1idL._SY879_.jpg",
        ],
      },
      {
        name: "Product 2",
        price: 79.99,
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        images: [
          "https://m.media-amazon.com/images/I/61dQ8GbxDuL._SY879_.jpg",
          "https://m.media-amazon.com/images/I/61Rzl6Rf6AL._SY879_.jpg",
          "https://m.media-amazon.com/images/I/61hlt01iwGL._SY879_.jpg",
        ],
      },
      {
        name: "Product 3",
        price: 29.99,
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        images: [
          "https://m.media-amazon.com/images/I/91pQ41+1H0L._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71l86mtHv5L._SX679_.jpg",
          "https://m.media-amazon.com/images/I/614OZcyXwZL._SX679_.jpg",
        ],
      },
      {
        name: "Product 1",
        price: 49.99,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        images: [
          "https://m.media-amazon.com/images/I/712r-pXsP+L._SY879_.jpg",
          "https://m.media-amazon.com/images/I/71h-8TFcQHL._SY879_.jpg",
          "https://m.media-amazon.com/images/I/71iLgFT1idL._SY879_.jpg",
        ],
      },
      {
        name: "Product 2",
        price: 79.99,
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        images: [
          "https://m.media-amazon.com/images/I/61dQ8GbxDuL._SY879_.jpg",
          "https://m.media-amazon.com/images/I/61Rzl6Rf6AL._SY879_.jpg",
          "https://m.media-amazon.com/images/I/61hlt01iwGL._SY879_.jpg",
        ],
      },
      {
        name: "Product 3",
        price: 29.99,
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        images: [
          "https://m.media-amazon.com/images/I/91pQ41+1H0L._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71l86mtHv5L._SX679_.jpg",
          "https://m.media-amazon.com/images/I/614OZcyXwZL._SX679_.jpg",
        ],
      },
      {
        name: "Product 1",
        price: 49.99,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        images: [
          "https://m.media-amazon.com/images/I/712r-pXsP+L._SY879_.jpg",
          "https://m.media-amazon.com/images/I/71h-8TFcQHL._SY879_.jpg",
          "https://m.media-amazon.com/images/I/71iLgFT1idL._SY879_.jpg",
        ],
      },
      {
        name: "Product 2",
        price: 79.99,
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        images: [
          "https://m.media-amazon.com/images/I/61dQ8GbxDuL._SY879_.jpg",
          "https://m.media-amazon.com/images/I/61Rzl6Rf6AL._SY879_.jpg",
          "https://m.media-amazon.com/images/I/61hlt01iwGL._SY879_.jpg",
        ],
      },
      {
        name: "Product 3",
        price: 29.99,
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        images: [
          "https://m.media-amazon.com/images/I/91pQ41+1H0L._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71l86mtHv5L._SX679_.jpg",
          "https://m.media-amazon.com/images/I/614OZcyXwZL._SX679_.jpg",
        ],
      },
      {
        name: "Product 1",
        price: 49.99,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        images: [
          "https://m.media-amazon.com/images/I/712r-pXsP+L._SY879_.jpg",
          "https://m.media-amazon.com/images/I/71h-8TFcQHL._SY879_.jpg",
          "https://m.media-amazon.com/images/I/71iLgFT1idL._SY879_.jpg",
        ],
      },
      {
        name: "Product 2",
        price: 79.99,
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        images: [
          "https://m.media-amazon.com/images/I/61dQ8GbxDuL._SY879_.jpg",
          "https://m.media-amazon.com/images/I/61Rzl6Rf6AL._SY879_.jpg",
          "https://m.media-amazon.com/images/I/61hlt01iwGL._SY879_.jpg",
        ],
      },
      {
        name: "Product 3",
        price: 29.99,
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        images: [
          "https://m.media-amazon.com/images/I/91pQ41+1H0L._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71l86mtHv5L._SX679_.jpg",
          "https://m.media-amazon.com/images/I/614OZcyXwZL._SX679_.jpg",
        ],
      },
    ];
    return (
      <div className="dashboard">
        <div className="product-list">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    );
};

export default Home;
