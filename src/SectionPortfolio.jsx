import React from 'react';
import SectionTitle from './components/SectionTitle';
import ProjectCard from './components/ProjectCard';
import ClientCard from './components/ClientCard';
import FeatureCard from './components/FeatureCard';
import TestimonialCard from './components/TestimonialCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SectionPortfolio() {

    var settings = {
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <React.Fragment>
            <section id="PortfolioSection">
                <br/>
                <div className="container text-center">
                    <br/>
                    <SectionTitle SectionName="Portfolio"/>
                    <br/>
                    <div className="my-lg-5 my-md-3 my-sm-3 text-center" data-aos="fade-up">
                        <h4 className="text-color-02">Our Recent Projects</h4>
                        <p className="text-color-02">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam magni fugit dolorum.</p>
                        <hr className="w-75 mx-auto"/>
                        <div className="project-cards">
                            <ProjectCard ProjectImg="images/portfolio/img-1.jpg" AosDelay="100"/>
                            <ProjectCard ProjectImg="images/portfolio/img-3.jpg" AosDelay="200"/>
                            <ProjectCard ProjectImg="images/portfolio/img-2.jpg" AosDelay="100"/>
                            <ProjectCard ProjectImg="images/portfolio/img-4.jpg" AosDelay="200"/>
                        </div>
                    </div>
                    <br/>
                    <div className="my-lg-5 my-md-3 my-sm-3 text-center" data-aos="fade-up">
                        <h4 className="text-color-02">Over 100+ Business Clients</h4>
                        <p className="text-color-02">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam magni fugit dolorum.</p>
                        <hr className="w-75 mx-auto"/>
                        <ClientCard ClientImg="images/clients/client-1.png" AosDelay="100"/>
                        <ClientCard ClientImg="images/clients/client-2.png" AosDelay="200"/>
                        <ClientCard ClientImg="images/clients/client-3.png" AosDelay="300"/>
                        <ClientCard ClientImg="images/clients/client-4.png" AosDelay="400"/>
                        <ClientCard ClientImg="images/clients/client-5.png" AosDelay="500"/>
                    </div>
                    <br/>
                    <div className="row">   
                        <FeatureCard FeatureImg="images/icons/smile.svg" FeatureTitle="100+ Happy Clents" AosDelay="100"/>
                        <FeatureCard FeatureImg="images/icons/user.svg" FeatureTitle="99+ Experts Team" AosDelay="200"/>
                        <FeatureCard FeatureImg="images/icons/achivements.svg" FeatureTitle="10+ Achivements" AosDelay="300"/>
                    </div>
                    <br/>
                    <div className="my-lg-5 my-md-3 my-sm-3 text-center" data-aos="fade-up">
                        <h4 className="text-color-02">Testimonials</h4>
                        <p className="text-color-02">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam magni fugit dolorum.</p>
                        <hr className="w-75 mx-auto"/>
                        <Slider {...settings}>
                            <TestimonialCard TestimonialName="Saul Goodman" TestimonialImg="images/testimonials/testimonials-1.jpg"/>
                            <TestimonialCard TestimonialName="Sara Wilsson" TestimonialImg="images/testimonials/testimonials-2.jpg"/>
                            <TestimonialCard TestimonialName="Jean Karlis" TestimonialImg="images/testimonials/testimonials-3.jpg"/>
                            <TestimonialCard TestimonialName="Matt Brandon" TestimonialImg="images/testimonials/testimonials-4.jpg"/>
                            <TestimonialCard TestimonialName="John Larson" TestimonialImg="images/testimonials/testimonials-5.jpg"/>
                        </Slider>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default SectionPortfolio;