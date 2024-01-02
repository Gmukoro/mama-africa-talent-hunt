import Navbar from "./Navbar/navbar";
import Hero from "./Hero/hero";
import "./home.css";
import Aboutmama from "./Aboutmama/Aboutmama";
import ComingSoonSec from "./comingSoonSec/comingSoonSec";

const Home = () => {
  return (
    <div className="app__home">
      <section>
        <Navbar />
        <Hero />
        <Aboutmama />
        <ComingSoonSec />
      </section>
    </div>
  );
};
export default Home;
