import React from "react";
import Navbar from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./colors.css";
import SectionHome from "./SectionHome";
import SectionAbout from "./SectionAbout";
import SectionServices from "./SectionServices";
import SectionPortfolio from "./SectionPortfolio";
import SectionTeam from "./SectionTeam";
import SectionContact from "./SectionContact";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    offset: 150,
  });
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <SectionHome />
        <SectionAbout />
        <SectionServices />
        <SectionPortfolio />
        <SectionTeam />
        <SectionContact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
