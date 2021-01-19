import React from 'react';

function FeatureCard(props) {
    return (
        <React.Fragment>
            <div className="col-lg-4 col-md-12 col-sm-12 p-3">
                <div className="card bg-transparent border-0 pb-0 d-block" data-aos="fade-left" data-aos-delay={props.AosDelay}>
                    <div className="card-body text-left">
                        <img src={props.FeatureImg} alt="feature-img" className="d-inline-block mt-n2"/>
                        <h4 className="text-color-01 d-inline-block mx-2">{props.FeatureTitle}</h4>
                        <p className="text-color-01 mb-n2 mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <br/>
                        <a href="#" className="btn button-color-2">Learn more</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default FeatureCard;