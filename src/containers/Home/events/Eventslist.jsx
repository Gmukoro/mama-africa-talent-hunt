import "./eventslist.css";
import star from "../../../assets/unsplash-02.png";
import checklogo from "../../../assets/Checkmark.png";
import unsplash5 from "../../../assets/unsplash-05.png";
import unsplash6 from "../../../assets/unsplash-06.png";
import unsplash7 from "../../../assets/unsplash-07.png";

const Eventslist = () => {
  return (
    <section className="app__events">
      <div className="app__events-star1 one">
        <img src={star} alt="star" className="star1" />
      </div>
      <div className="app__events-contents">
        <div className="app__events-contents_desc">
          <h3>You Are The Star We Have Been Searching For</h3>
          <p>
            Do you have what it takes to be crowned the winner of our Talent
            hunt this season? You might just be the next Star we have been
            looking for. Sign up for free and put yourself out there.{" "}
          </p>
          <div className="app__events-contents_desc-lists">
            <div className="app__events-contents_desc-lists_1">
              <img src={checklogo} alt="checklogo" />
              <p>Music</p>
            </div>
            <div className="app__events-contents_desc-lists_1">
              <img src={checklogo} alt="checklogo" />
              <p>Dance</p>
            </div>
            <div className="app__events-contents_desc-lists_1">
              <img src={checklogo} alt="checklogo" />
              <p>Comedy</p>
            </div>
          </div>
          <button type="button">Learn More</button>
        </div>
        <div className="app__events-contents_imgs">
          <div className="img1">
            <img src={unsplash5} alt="singerimg" />
            <div className="img1_shadow"></div>
          </div>
          <div className="img2">
            <img src={unsplash6} alt="dancerimg" />
          </div>
          <div className="img3">
            <img src={unsplash7} alt="singerimg" className="img003" />
            <div className="img3_shadow"></div>
          </div>
        </div>
      </div>
      <div className="app__events-star2 two">
        <img src={star} alt="star" className="star2" />
      </div>
    </section>
  );
};
export default Eventslist;
