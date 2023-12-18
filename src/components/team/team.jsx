import Persons from "../persons/persons";
import X from "../../assets/X-logo.jpeg";
import Facebook from "../../assets/facebook-logo.png";
import Instagram from "../../assets/instagram-logo.png";
import "./team.css";

const Team = () => {
  return (
    <section className="team__section">
      <div className="team__section-intro">
        <h4 className="team__section-intro_h4">OUR TEAM</h4>
        <h1 className="team__section-intro_h1">Meet the Clonify team</h1>
        <p className="team__section-intro_desc">
          There are many variations of passages lorem Ipsum available, but the
          majority have suffered in some form, By injected humour
        </p>
      </div>
      <div className="team__section-persons_datas">
        {Persons.map((person, index) => (
          <div className="team__section-persons_data" key={index}>
            <img
              src={person.picture}
              alt={person.name}
              className="team__section-persons_data-img"
            />

            <h4 className="team__section-persons_data-name">{person.name}</h4>

            <p className="team__section-persons_data-position">{person.work}</p>

            <p className="team__section-persons_data-desc">{person.desc}</p>
            <div className="team__section-persons_data-socials">
              <img src={Facebook} />
              <img src={X} />
              <img src={Instagram} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Team;
