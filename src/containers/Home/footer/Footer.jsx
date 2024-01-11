import "./footer.css";
import logoimg from "../../../assets/image-10.png";
import logoimg2 from "../../../assets/image-11.png";
import vector1 from "../../../assets/Vector1.png";
import vector2 from "../../../assets/Vector2.png";
import vector3 from "../../../assets/Vector3.png";
import vector4 from "../../../assets/Vector4.png";
import vector5 from "../../../assets/Vector5.png";

const Footer = () => {
  return (
    <section className="app__footer">
      <div className="app__footer-first-d">
        <img src={logoimg} alt="logoimg" />
        <div className="app__footer-first-d_nav">
          <ul>
            <th>Quick Links</th>
            <li>Our Organisation</li>
            <li>Become a volunteer</li>
            <li>Projects</li>
            <li>Events</li>
            <li>Picture gallery</li>
          </ul>
        </div>
      </div>
      <div className="app__footer-second-d">
        <img src={logoimg2} alt="Logoimg" />
        <p>
          Copyright (2023) <span className="span__footer">@ MamaAfrica.tv</span>
        </p>
      </div>
      <div className="app__footer-third-d">
        <h4>Contact</h4>
        <p>
          Gold Divine International School, New Karu,
          <br /> Nasarawa State. <br />
          Plot 602, Aide Cadastral Street Abuja.
        </p>
        <p>
          <br /> interculateddavid@gmail.com
        </p>
        <p>
          <br /> 08100937338
        </p>
        <div className="app__footer-third-d_socials">
          <img src={vector1} alt="facebookicon" />
          <img src={vector2} alt="Xicon" />
          <img src={vector3} alt="instagramicon" />
          <img src={vector4} alt="youtubeicon" />
          <img src={vector5} alt="mailicon" />
        </div>
      </div>
    </section>
  );
};
export default Footer;
