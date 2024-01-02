import logo from "../../../assets/image-10.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="app__home-navbar">
      <div className="app__home-navbar_content-items">
        <img
          src={logo}
          alt="Logo"
          className="app__home-navbar_content-items_logo"
        />

        <p className="app__home-navbar_content-items_text">HOME</p>
        <p className="app__home-navbar_content-items_text">ABOUT US</p>
        <p className="app__home-navbar_content-items_text">WHAT WE DO</p>
        <p className="app__home-navbar_content-items_text">PRESS CENTRE</p>
      </div>
      <div className="app__home-navbar_btn">
        <button type="button">Join us</button>
      </div>
    </div>
  );
};
export default Navbar;
