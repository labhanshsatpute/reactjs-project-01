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
import Preloader from './components/Preloader';
import AOS from "aos";
import "aos/dist/aos.css";
import $ from 'jquery';

$(document).ready(function(){
  $('#preloader-div').hide();
});

function App() {
  AOS.init({
    offset: 125
  });
  return (
    <React.Fragment>
      <Preloader/>
      <Navbar/>
      <main>
        <SectionHome/>
        <SectionAbout/>
        <SectionServices/>
        <SectionPortfolio/>
        <SectionTeam/>
        <SectionContact/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
