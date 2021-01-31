import React from 'react';
import $ from 'jquery';


function Navbar() {

	const NavbarToggled =()=> {
        if (document.querySelector('#navbar-list').style.display == "block") {

            document.querySelector('#navbar-list').style.display = "none";

            document.querySelector('#toggler-icon-line-2').style.display = 'block';
            document.querySelector('#toggler-icon-line-1').style.transform = 'rotate(0deg)';
            document.querySelector('#toggler-icon-line-1').style.marginTop = '0px';
            document.querySelector('#toggler-icon-line-3').style.transform = 'rotate(0deg)';
            document.querySelector('#toggler-icon-line-1').style.marginBottom = '0px';            
        }
        else {
            document.querySelector('#navbar-list').style.display = "block";

            document.querySelector('#toggler-icon-line-2').style.display = 'none';
            document.querySelector('#toggler-icon-line-1').style.transform = 'rotate(45deg)';
            document.querySelector('#toggler-icon-line-1').style.marginTop = '-9px';
            document.querySelector('#toggler-icon-line-3').style.transform = 'rotate(-45deg)';
            document.querySelector('#toggler-icon-line-1').style.marginBottom = '-9px';
        }
        
    }

	return(
		<React.Fragment>
			<nav className="navbar navbar-expand-lg fixed-top py-3 bg-white">
				<div className="container px-lg-0 px-md-3 px-sm-5">

					<a href="index.html" className="navbar-brand text-color-02">Example</a>

					<button className="navbar-toggler" onClick={NavbarToggled} id="navbar-toggler">
                        <div className="toggler-icon-line" id="toggler-icon-line-1"></div>
                        <div className="toggler-icon-line" id="toggler-icon-line-2"></div>
                        <div className="toggler-icon-line" id="toggler-icon-line-3"></div>
                    </button>
					
					<div className="navbar-collapse ml-auto" id="navbar-list">
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