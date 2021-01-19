import React from 'react';
import $ from 'jquery';

$(document).ready(function(){
    $('.team-card').mouseenter(function(){
        $(this).find('.team-social-media').slideDown(200);
    });
    $('.team-card').mouseleave(function(){
        $(this).find('.team-social-media').slideUp(200);
    });
});

function TeamCard(props) {
    return (
        <React.Fragment>
            <div className="col-lg-3 col-md-6 col-sm-12 p-3" data-aos="zoom-in" data-aos-delay={props.AosDelay}>
                <div className="card border-0 p-0 shadow team-card text-center">
                    <img src={props.TeamImg} alt="team-img" className="team-img img-fluid"/>
                    <div className="card-body team-social-media">
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="#" className="mx-auto"><img src="images/icons/facebook.svg" alt="facebook" className="bg-transparent"/></a>
                            <a href="#" className="mx-auto"><img src="images/icons/twitter.svg" alt="twitter" className="bg-transparent"/></a>
                            <a href="#" className="mx-auto"><img src="images/icons/linkedin.svg" alt="linkedin" className="bg-transparent"/></a>
                        </div>
                    </div>
                    <div className="card-body bg-light pb-2">
                        <h5 className="text-color-03">{props.TeamName}</h5>
                        <p className="text-color-01">{props.TeamPosition}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TeamCard;