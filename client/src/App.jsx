import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./Container/NavBars/Header";
import Footer from "./Container/NavBars/Footer";
import Home from "./Pages/Home/Home";
import { Auth } from "./Pages/Auth/auth";
import ProductPage from "./Pages/ProductPage/ProductPage";
import SearchPage from "./Pages/SearchPage/SearchPage";
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/search" element={<SearchPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
