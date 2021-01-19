import React from 'react';

function Footer() {

    return (
        <React.Fragment>
            <footer className="w-100 bg-color-03 card-body">
                <div className="container text-left">
                    <br/>
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-6 text-left">
                            <h4 className="text-color-06">Example</h4>
                            <p className="text-color-06">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis provident rerum ipsa vero sapiente dolore, qui voluptatibus.</p>
                            <hr/>

                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <ul className="list-unstyled mx-auto">
                                <li className="d-block"><a href="#ServiceSection" className="card-link text-color-06"><h4>Services</h4></a></li>
                                <li className="d-block"><a href="#" className="card-link text-color-06">Web Development</a></li>
                                <li className="d-block"><a href="#" className="card-link text-color-06">Data Analytics</a></li>
                                <li className="d-block"><a href="#" className="card-link text-color-06">Software Development</a></li>
                                <li className="d-block"><a href="#" className="card-link text-color-06">App Development</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <ul className="list-unstyled mx-auto">
                                <li className="d-block"><a href="#AboutSection" className="card-link text-color-06"><h4>About</h4></a></li>
                                <li className="d-block"><a href="#" className="card-link text-color-06">Who are we ?</a></li>
                                <li className="d-block"><a href="#" className="card-link text-color-06">Why us ?</a></li>
                                <li className="d-block"><a href="#" className="card-link text-color-06">Wordpress Development</a></li>
                                <li className="d-block"><a href="#" className="card-link text-color-06">Graphics Designing</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <ul className="list-unstyled mx-auto">
                                <li className="d-block"><a href="#AboutSection" className="card-link text-color-06"><h4>Terms</h4></a></li>
                                <li className="d-block"><a href="#" className="card-link text-color-06">Terms and condition</a></li>
                                <li className="d-block"><a href="#" className="card-link text-color-06">Privacy Policy</a></li>
                                <li className="d-block"><a href="#" className="card-link text-color-06">Team</a></li>
                                <li className="d-block"><a href="#" className="card-link text-color-06">Contact us</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-6">
                            <h4 className="text-color-06">Subscribtion </h4>
                            <p className="text-color-06">Get news letters and updates</p>
                            <form className="input-group-append">
                                <input type="email" className="input-group-text bg-white text-left text-color-03 rounded-0 w-75" placeholder="Enter Email"/>
                                <button className="btn button-color-2 rounded-0">Submit</button>
                            </form>
                            <p className="text-color-06 d-inline-block">Follow us : </p>
                            <a href="#" className="my-3 mx-2 d-inline-block"><img src="images/icons/facebook.svg" alt="facebook-img"/></a>
                            <a href="#" className="my-3 mx-2 d-inline-block"><img src="images/icons/twitter.svg" alt="twitter-img"/></a>
                            <a href="#" className="my-3 mx-2 d-inline-block"><img src="images/icons/linkedin.svg" alt="linkedin-img"/></a>
                        </div>
                    </div>
                    <br/>
                    <div className="text-center">
                        <p className="text-color-06 d-inline-block mx-2">Copyright @Exapmle 2020-2050</p>
                        <a href="https://in.linkedin.com/in/labhansh-satpute-0060911a0" className="card-link text-color-06 d-inline-block mx-2">Designed By Labhansh Satpute</a>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;