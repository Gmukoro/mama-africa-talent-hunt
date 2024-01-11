import { Link } from "react-router-dom";
import logo from "../../../assets/image-10.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="app__home-navbar">
      <div className="app__home-navbar_content-items">
        <img
          src={logo}
          alt="Logo"
          className="app__home-navbar_content-items_logo"
        />
        <Link to="../home">
          <p className="app__home-navbar_content-items_text">HOME</p>
        </Link>
        <Link to="/about">
          <p className="app__home-navbar_content-items_text">ABOUT US</p>
        </Link>
        <p className="app__home-navbar_content-items_text">WHAT WE DO</p>
        <p className="app__home-navbar_content-items_text">PRESS CENTRE</p>
      </div>
      <div className="app__home-navbar_btn">
        <button type="button">Join us</button>
      </div>
    </nav>
  );
};
export default Navbar;
