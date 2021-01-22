import React from 'react';
import SectionTitle from './components/SectionTitle';
import ServiceCard from './components/ServiceCard';

function SectionServices() {
    return (
        <React.Fragment>
            <section id="ServiceSection">
                <br/>
                <div className="container" align="center">
                    <br/>
                    <SectionTitle SectionName="Our Services"/>
                    <br/>
                    <div className="row">
                        <ServiceCard serviceImg="images/icons/web-development.svg" serviceName="Web Development" AosDelay="100"/>
                        <ServiceCard serviceImg="images/icons/data-analytics.svg" serviceName="Data Analytics" AosDelay="200"/>
                        <ServiceCard serviceImg="images/icons/software-development.svg" serviceName="Software Development" AosDelay="300"/>
                        <ServiceCard serviceImg="images/icons/app-development.svg" serviceName="App Development" AosDelay="400"/>
                        <ServiceCard serviceImg="images/icons/graphics-designing.svg" serviceName="Graphics Designing" AosDelay="500"/>
                        <ServiceCard serviceImg="images/icons/wordpress-development.svg" serviceName="Wordpress Development" AosDelay="600"/>
                    </div>
                    <br/>
                </div>
            </section>
        </React.Fragment>
    );
};

export default SectionServices;