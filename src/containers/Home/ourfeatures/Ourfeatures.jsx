import "./ourfeatures.css";
import singerimg from "../../../assets/Rectangle-04.png";
import singerimg2 from "../../../assets/Rectangle-01.png";
import singerimg3 from "../../../assets/Group002.png";

const Ourfeatures = () => {
  return (
    <section className="app__ourfeatures">
      <p>Check out our features for Season 2</p>
      <div className="app__ourfeatures-imgs">
        <div className="app__ourfeatures-img">
          <img src={singerimg} alt="singerimg" />
        </div>
        <div className="app__ourfeatures-img">
          <img src={singerimg2} alt="singerimg2" />
        </div>
        <div className="app__ourfeatures-img3">
          <img src={singerimg3} alt="Img" />
        </div>
      </div>
    </section>
  );
};
export default Ourfeatures;
