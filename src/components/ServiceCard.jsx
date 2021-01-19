import React from 'react';

function ServiceCard(props) {
    return (
        <React.Fragment>
            <div className="col-lg-4 col-md-6 col-sm-12 p-lg-3 p-md-3 p-sm-0" data-aos="zoom-in" data-aos-delay={props.AosDelay}>
                <div className="card border-0 service-card text-left">
                    <div className="card-body">
                        <img src={props.serviceImg} alt="service-img" className="m-2"/>
                        <h4 className="text-color-03 m-1">{props.serviceName}</h4>
                        <p className="text-color-01">Lorem, ipsum dolor consectetur sit amet  adipisicing elit Consectetur.</p>
                        <a href="#" className="btn button-color-2">Leanr more</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ServiceCard;