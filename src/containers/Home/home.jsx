import Navbar from "./Navbar/navbar";
import Hero from "./Hero/hero";
import "./home.css";
import Aboutmama from "./Aboutmama/Aboutmama";
import ComingSoonSec from "./comingSoonSec/comingSoonSec";
import Eventslist from "./events/Eventslist";
import Catalogue from "./catalogue/Catalogue";

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
      </section>
    </div>
  );
};
export default Home;
