import React from 'react';
import SectionTitle from './components/SectionTitle';
import ContactFrom from './components/ContactForm';
import Map from './components/Map';

function SectionContact() {
    return (
        <React.Fragment>
            <section id="ContactSection">
                <br/>
                <div className="container" align="center">
                    <br/>
                    <SectionTitle SectionName="Contact us"/>
                    <br/>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 p-5 text-left" data-aos="fade-right">
                            <h5 className="text-color-01">Send us Message</h5>
                            <p className="text-color-02">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, provident? Eos unde perspiciatis quam quo accusantium.</p>
                            <br/>
                            <ContactFrom/>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 p-5 text-left" data-aos="fade-left">
                            <h5 className="text-color-01">Office Location</h5>
                            <p className="text-color-02">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, provident? Eos unde perspiciatis quam quo accusantium.</p>
                            <br/>
                            <Map/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 p-3">
                            <div className="card shadow" data-aos="fade-up">
                                <div className="card-body">
                                    <img src="images/icons/mail.svg" alt="mail-img" className="d-inline-block m-2"/>
                                    <h5><a href="mailto:labhansh25@outlook.in" className="card-link text-color-02 mx-1">Mail : labhansh25@outlook.in</a></h5>
                                    <p className="text-color-02">Lorem ipsum dolor sit amet consectetur elit. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 p-3">
                            <div className="card shadow" data-aos="fade-up">
                                <div className="card-body">
                                    <img src="images/icons/phone.svg" alt="phone-img" className="d-inline-block m-2"/>
                                    <h5><a href="tel: 0000000000" className="card-link text-color-02 mx-1">Phone : 00000-00000</a></h5>
                                    <p className="text-color-02">Lorem ipsum dolor sit amet consectetur elit. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 p-3">
                            <div className="card shadow" data-aos="fade-up">
                                <div className="card-body">
                                    <img src="images/icons/location.svg" alt="location-img" className="d-inline-block m-2"/>
                                    <h5><a href="#" className="card-link text-color-02 mx-1">Location : India</a></h5>
                                    <p className="text-color-02">Lorem ipsum dolor sit amet consectetur elit. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </section>
        </React.Fragment>
    );
};

export default SectionContact;