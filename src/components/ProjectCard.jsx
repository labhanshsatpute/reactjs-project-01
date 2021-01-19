import React from 'react';
import $ from 'jquery';

$(document).ready(function(){
    $('.project-card').hover(function(){
        $(this).find('.card-body').slideDown(200);
    });
    $('.project-card').mouseleave(function(){
        $(this).find('.card-body').slideUp(200);
    });
});

function ProjectCard(props) {
    return (
        <React.Fragment>
            <div className="card shadow bg-white m-4 d-inline-block project-card" data-aos="fade-up" data-aos-delay={props.AosDelay}>
                <img src={props.ProjectImg} alt="project-img" className="img-fluid project-img"/>
                <div className="card-body bg-white text-center pb-2">
                    <p className="text-color-03">Lorem ipsum dolor consectetur amet sit adipisicing.</p>
                </div>
            </div>      
        </React.Fragment>
    );
};

export default ProjectCard;