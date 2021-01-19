import React from 'react';
import $ from 'jquery';

$(document).ready(function(){
	$('#navbar-toggler').click(function(){
		$('.navbar').addClass('shadow');
		$('#navbar-list').toggle(300);
	});
	$('#navbar-toggler').blur(function(){
		$('#navbar-list').hide(300);
	});
});

function Navbar() {

	return(
		<React.Fragment>
			<nav className="navbar navbar-expand-lg fixed-top py-3 bg-white">
				<div className="container px-lg-0 px-md-3 px-sm-5">

					<a href="index.html" className="navbar-brand text-color-02">Example</a>

					<button className="navbar-toggler ml-auto" id="navbar-toggler">
						<img src="images/icons/menu.svg" alt="toggler-icon" id="navbar-toggler-icon"/>
					</button>
					
					<div className="collapse navbar-collapse ml-auto" id="navbar-list">
						<ul className="navbar-nav ml-auto text-center">
							<hr/>
							<li className="nav-item px-2"><a href="#HomeSection" className="nav-link text-color-02">HOME</a></li>
							<hr/>
							<li className="nav-item px-2"><a href="#AboutSection" className="nav-link text-color-02">ABOUT</a></li>
							<hr/>
							<li className="nav-item px-2"><a href="#ServiceSection" className="nav-link text-color-02">SERVICES</a></li>
							<hr/>
							<li className="nav-item px-2"><a href="#PortfolioSection" className="nav-link text-color-02">PORTFOLIO</a></li>
							<hr/>
							<li className="nav-item px-2"><a href="#TeamSection" className="nav-link text-color-02">TEAM</a></li>
							<hr/>
							<li className="nav-item px-2"><a href="#ContactSection" className="btn button-color-2">Contact us</a></li>
							<hr/>
						</ul>
					</div>

				</div>
				
			</nav>
		</React.Fragment>
	);
		
};

export default Navbar;