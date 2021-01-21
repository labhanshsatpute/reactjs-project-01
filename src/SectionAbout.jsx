import React from 'react';
import SectionTitle from './components/SectionTitle';

function SectionAbout() {
    return(
        <React.Fragment>
        <section id="AboutSection">
            <br/>
            <div className="container" align="center">
                <br/>
                <SectionTitle SectionName="About us"/>
                <br/>
                <div className="row px-3">
                    <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-right">
                        <img src="images/img-2.png" alt="achivement-img" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-left" data-aos="fade-left">
                        <h4 className="text-color-01 mt-4">Who are we ?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsa aspernatur id necessitatibus exercitationem cum et dolorem.</p>
                        <br/>
                        <h4 className="text-color-01">Why us ?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsa aspernatur id necessitatibus exercitationem cum et dolorem.</p>
                        <a href="#" className="btn button-color-1">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    );
};

export default SectionAbout;