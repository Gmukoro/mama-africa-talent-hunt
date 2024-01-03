import "./catalogue.css";
import polygon7 from "../../../assets/Polygon-7.png";
import polygon8 from "../../../assets/Polygon-8.png";
import whatsapp1 from "../../../assets/WhatsApp-Image01.png";
import whatsapp2 from "../../../assets/WhatsApp-Image07.png";
import whatsapp3 from "../../../assets/WhatsApp-Image06.png";
import whatsapp4 from "../../../assets/WhatsApp-Image05.png";
import whatsapp5 from "../../../assets/WhatsApp-Image02.png";
import whatsapp6 from "../../../assets/WhatsApp-Image03.png";
import whatsapp7 from "../../../assets/WhatsApp-Image04.png";

const Catalogue = () => {
  return (
    <section className="app__catalogue">
      <div className="app__catalogue-contents">
        <p>Visit our Catalogue</p>
        <div className="app__catalogue-contents_imgs">
          <img src={whatsapp1} alt="catalogue-pics" className="pics1" />
          <div className="container">
            <div className="app__catalogue-pics1">
              <img src={whatsapp2} alt="catalogue-pics" className="pics2" />
              <img src={whatsapp3} alt="catalogue-pics" className="pics3" />
              <img src={whatsapp4} alt="catalogue-pics" className="pics4" />
            </div>
            <div className="app__catalogue-pics2">
              <img src={whatsapp5} alt="catalogue-pics" className="pics5" />
              <img src={whatsapp6} alt="catalogue-pics" className="pics6" />
              <img src={whatsapp7} alt="catalogue-pics" className="pics7" />
            </div>
          </div>
        </div>
      </div>
      <div className="app__catalogue-moreicons">
        <img src={polygon7} alt="backicon" className="backicon" />
        <img src={polygon8} alt="forwardicon" />
      </div>
    </section>
  );
};

export default Catalogue;
