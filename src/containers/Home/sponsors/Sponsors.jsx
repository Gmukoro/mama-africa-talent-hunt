import "./sponsors.css";
import sponsorsimg from "../../../assets/image-3.png";

const Sponsors = () => {
  return (
    <section className="app__sponsors">
      <div className="app__sponsors-newsletter">
        <div className="app__sponsors-newsletter_signup">
          <h4>Sign up for our newsletter</h4>
          <p>
            Be the first to know about releases and industry news and insights.
          </p>
        </div>
        <input
          type="email"
          placeholder="Your Email Here"
          className="app__sponsors-newsletter_input"
        />
        <button type="button" className="btn newsletter">
          Subscribe
        </button>
      </div>
      <div className="app__sponsers-div">
        <p>Meet Our Esteemed Sponsors</p>
        <img src={sponsorsimg} alt="sponsorsimg" />
      </div>
    </section>
  );
};
export default Sponsors;
