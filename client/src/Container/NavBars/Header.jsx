import "./Header.css";
import logo from "../../assets/shoptalk.png";
import AutoComplete from "./AutoCompleteSearchBar/AutoComplete";
import { AuthContext } from "../../Context/authContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = async() => {
    try {
      dispatch({ type: "LOGOUT" });
      navigate('/auth');
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="navbar">
      <Link to="/" id="nav-logo-wrapper">
        <img src={logo} alt="Logo" id="nav-logo" />
        <div id="logo-text">ShopTalk 2</div>
      </Link>
      <div className="search-bar">
        <AutoComplete />
      </div>
      <div className="logout-nav-button" onClick={()=>logout()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bi bi-box-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
          />
          <path
            fillRule="evenodd"
            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
