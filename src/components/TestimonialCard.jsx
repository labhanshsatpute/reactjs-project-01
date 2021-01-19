import React from 'react';

function TestimonialCard(props) {
    return (
        <React.Fragment>
            <div className="card d-inline-block bg-white testimonials-card mx-auto item"> 
                <div className="card-body text-center">
                    <div className="px-lg-5 px-md-3 px-sm-0 mx-auto">
                        <img src={props.TestimonialImg} alt="testimonials-img" className="testimonials-img img-fluid img-thumbnail w-auto rounded-circle"/>
                    </div>
                    <br/>
                    <h5 className="text-color-03 mt-4">{props.TestimonialName}</h5>
                    <i><p className="text-color-01">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus ipsa officia temporibus nisi assumenda reiciendis quos quod, ab velit, illo dignissimos."</p></i>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TestimonialCard;