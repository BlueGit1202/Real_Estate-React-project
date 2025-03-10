import React,{Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

import logo1 from './../../images/logo/logo1.png';
import logo2 from './../../images/logo/logo2.png';
import logo3 from './../../images/logo/logo3.png';
import logo from './../../images/logo.png';

class Footer extends Component{
	render(){
		return(
			<Fragment>
				<footer className="site-footer" id="sidenav_footer">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-md-4 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
								<Footercol1 />
							</div>
							<div className="col-md-4 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s">
								<Footercol2 />
							</div>
							<div className="col-md-4 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.9s">
								<Footercol3 />
							</div>
						</div>
					</div>
				</div>
				{/*  footer bottom part */}
				<div className="footer-bottom">
					<Footerbottom />
				</div>
			</footer>
			</Fragment>
		)
	}
}
function Footercol1(){
	return(
		<>
			<div className="widget widget_about">
				<div className="footer-logo">
					<Link to="./"><img src={logo} alt=""/></Link> 
				</div>
				<p>Surround yourself with fresh energy, high-tech amenities, and elevated style. Indulge in extraordinary amenities, relax in appealing social spaces.</p>
				<div className="dlab-social-icon">
					<ul>
						<li><a href='https://www.youtube.com/@arziyatclassifiedplatform5549' className="fa fa-youtube"></a></li>
						<li><a href="https://www.facebook.com/ArziyatOfficial" className="fa fa-facebook mr-1"></a></li>
						<li><a href='https://www.instagram.com/arziyatofficial/' className="fa fa-instagram"></a></li>
						<li><a href='https://www.pinterest.com/arziyatcom' className="fa fa-pinterest"></a></li>
					</ul>
				</div>
			</div>
		</>
	)
} 

function Footercol2(){
	return(
		<>
			<div className="widget">
				<h5 className="footer-title">Contact Us</h5>
				<ul className="contact-info-bx">
					<li><i className="las la-phone-volume"></i><strong>Contact Number : </strong> 0333 5429100</li>
					<li><i className="fa fa-envelope-o"></i><strong>Email : </strong> Support@arziyat.com</li>
				</ul>
			</div>
		</>
	)
} 

function Footercol3(){
	return(
		<>
			<div className="widget widget-logo">
			   <h5 className="footer-title">Our Business Channels</h5>
			   <ul>
					<li><Link to={"#"}><img src={logo1} alt=""/></Link></li>
					<li><Link to={"#"}><img src={logo2} alt=""/></Link></li>
					<li><Link to={"#"}><img src={logo3} alt=""/></Link></li>
			   </ul>
			</div>
		</>
	)
} 

function Footerbottom(){
	return(	
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-sm-12 text-center"> <span>© 2025 Arziyat. All Right Reserved</span> </div>
				</div>
			</div>
		</>
	)	
}

export {Footercol1, Footercol2, Footercol3 , Footerbottom }; 
export default Footer;