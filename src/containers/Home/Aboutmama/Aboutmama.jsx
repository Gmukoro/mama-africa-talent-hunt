import "./aboutmama.css";
import Unsplash08 from "../../../assets/unsplash-08.png";

const Aboutmama = () => {
  return (
    <section className="app__aboutmama">
      <div className="app__aboutmama-desc">
        <h1>About Mama Africa Carnival/Talent Hunt</h1>
        <p>
          MamaAfrica Talent Carnival is a glamorous celebration of the
          transformative power of creativity and our African identity with its
          diverse array of communities and cultures. Every year, this festive
          occasion inspires our city and her people to create, build and play
          together - thousands of spectators converge annually in selected
          locations to join the extravagant parade of costumed performers.
        </p>
        <p>
          The <span className="inline">AFRICA TALENT HUNT</span> is another way
          of discovering promising talents in the young population and rewarding
          them accordingly. This year, we plan to discover singing, comedy and
          dancing talents with the aim of giving them a global platform to
          showcase themselves.
        </p>

        <p>
          With a mouth-watering Star Prize and consolation prizes, the
          contestants are in for a life-changing opportunity this season
        </p>

        <div className="app__aboutmama-desc_btn">
          <input type="email" placeholder="youremail@example.com" />
          <button type="button" className="btn">
            Join waitlist
          </button>
        </div>
      </div>
      <div className="app__aboutmama-img">
        <img src={Unsplash08} alt="about-img" />
      </div>
    </section>
  );
};
export default Aboutmama;
