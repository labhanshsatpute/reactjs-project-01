import React from 'react';
import $ from 'jquery';

$(document).ready(function(){
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 100) {
			$('.navbar').addClass('shadow');
		} else {
			$('.navbar').removeClass('shadow');
		}
	});
});

function SectionHome() {
	return (
	<React.Fragment>
		<section id="HomeSection">
			<br/>
			<div className="container mt-lg-5 mt-md-3 mt-sm-0 card-body">
				<div className="row mt-lg-5 mt-md-3 mt-sm-0">
					<div className="col-lg-6 col-md-12 col-sm-12 card-body text-lg-left text-md-center text-sm-center" align="center">
						<br/>
						<br/>
						<br/>
						<h1 className="display-4 text-color-02 mt-lg-5 mt-md-3 mt-sm-0 mx-2 px-lg-0 px-md-3 px-sm-5"><b>Better Solution for Your Business</b> </h1>
						<h5 className="text-color-01 mx-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
						<p className="text-color-03 mx-2"> 
							Mollitia voluptates excepturi possimus cupiditate aperiam accusamus, 
							corrupti eveniet sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						<a href="#AboutSection" className="btn btn-lg button-color-2 d-lg-inline-block d-md-block d-sm-block m-2">Get Started</a>
						<a href="#ContactSection" className="btn btn-lg button-color-1 d-lg-inline-block d-md-block d-sm-block m-2">Contact Now</a>
					</div>
					<div className="col-lg-6 col-md-12 col-sm-12">
						<img src="images/img-1.png" alt="web-development" className="img-fluid p-lg-5 p-md-3 p-sm-3 img-1"/>
					</div>
				</div>
			</div>
			<br/>
		</section>
	</React.Fragment>
	);
};

export default SectionHome;