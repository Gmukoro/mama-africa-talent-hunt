import "./hero.css";
import Heroimg from "../../../assets/Rectangle-11.png";
import Polygon6 from "../../../assets/Polygon-6.png";
import Polygon3 from "../../../assets/Polygon-3.png";

const Hero = () => {
  return (
    <section className="app__hero">
      <img src={Heroimg} alt="Hero" />
      <div className="app__hero-cont">
        <div className="app__hero-cont-polygon1">
          <img src={Polygon6} alt="Polygon" />
        </div>
        <div className="app__hero-cont-text">
          <p>That platform you have been waiting for is here.</p>
          Mama Africa in collaboration with our esteemed partners have brought
          this mouth-watering
          <p />
          <p>opportunity to become the next big star in Nigeria.</p>
        </div>
        <div className="app__hero-cont-polygon2">
          <img src={Polygon3} alt="Polygon2" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
