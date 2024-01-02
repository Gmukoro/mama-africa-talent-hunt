import Navbar from "./Navbar/navbar";
import Hero from "./Hero/hero";
import "./home.css";
import Aboutmama from "./Aboutmama/Aboutmama";

const Home = () => {
  return (
    <div className="app__home">
      <section>
        <Navbar />
        <Hero />
        <Aboutmama />
      </section>
    </div>
  );
};
export default Home;
