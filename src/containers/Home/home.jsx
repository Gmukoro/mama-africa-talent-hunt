import Navbar from "./Navbar/navbar";
import Hero from "./Hero/hero";
import "./home.css";
import Aboutmama from "./Aboutmama/Aboutmama";
import ComingSoonSec from "./comingSoonSec/comingSoonSec";
import Eventslist from "./events/Eventslist";
import Catalogue from "./catalogue/Catalogue";
import Schedule from "./schedule/Schedule";
import Process from "./process/Process";
import Ourfeatures from "./ourfeatures/Ourfeatures";
import Sponsors from "./sponsors/Sponsors";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <div className="app__home">
      <section>
        <Navbar />
        <Hero />
        <Aboutmama />
        <ComingSoonSec />
        <Eventslist />
        <Catalogue />
        <Schedule />
        <Process />
        <Ourfeatures />
        <Sponsors />
        <Footer />
      </section>
    </div>
  );
};
export default Home;
