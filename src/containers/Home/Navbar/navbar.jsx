import { Link } from "react-router-dom";
import logo from "../../../assets/image-10.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="app__home-navbar">
      <nav className="app__home-navbar_content-items">
        <img
          src={logo}
          alt="Logo"
          className="app__home-navbar_content-items_logo"
        />
        <Link to="../home" className="app__home-navbar_content-items_text">
          HOME
        </Link>
        <Link to="/about" className="app__home-navbar_content-items_text">
          ABOUT US
        </Link>
        <Link to="" className="app__home-navbar_content-items_text">
          WHAT WE DO
        </Link>
        <Link to="" className="app__home-navbar_content-items_text">
          PRESS CENTRE
        </Link>
      </nav>
      <div className="app__home-navbar_btn">
        <button type="button">Join us</button>
      </div>
    </nav>
  );
};
export default Navbar;
