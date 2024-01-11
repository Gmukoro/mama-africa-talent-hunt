// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import "./App.css";
// import Team from "./components/team/team";
// import Home from "./containers/Home/home";

// function App() {
//   return (
//     <div className="app">
//       {/* <Home />
//       <Team /> */}

//       <Router>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/about">Team</Link>
//         </nav>

//         <Route path="/" exact component={Home} />
//         <Route path="/about" component={Team} />
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Team from "./components/team/team";
import Home from "./containers/Home/home";
import Navbar from "./containers/Home/Navbar/navbar";
import Footer from "./containers/Home/footer/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Team />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
