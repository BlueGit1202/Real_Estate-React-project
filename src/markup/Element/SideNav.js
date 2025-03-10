import React,{Component} from 'react';
import { Link } from "react-scroll";

class SideNav extends Component{
	render(){
		return(
			<>
				<ul className="navbar">
					<li>
						<Link
							activeClass="active"  to="sidenav_home" smooth={true} offset={-70} duration={500} className="scroll nav-link " >
							<i className="las la-home text-white"></i> <span className="text-white">Home</span>
						</Link>
					</li>
					<li>
						<a href="https://ads.arziyat.com" target="_blank"
							activeClass="active" to="sidenav_masterPlan" className="scroll nav-link"  smooth={true} offset={-70} duration={500}  >
							<i className="las la-image text-white"></i> <span className="text-white">Ads</span>
						</a>
					</li>
					<li>
						<a href="https://realestate.arziyat.com" target="_blank" 
							activeClass="active" to="sidenav_mainGallery" className="scroll nav-link"  smooth={true} offset={-70} duration={500} >
							<i className="las la-chart-bar text-white"></i> <span className="text-white">Real Estate</span>
						</a>
					</li>
					<li>
						<a href=" https://rentorim.com/" target="_blank"
							activeClass="active" to="sidenav_ourServices" className="scroll nav-link"  smooth={true} offset={-70} duration={500} >
							<i className="las la-cog text-white"></i> <span className="text-white">Rental</span>
						</a>
					</li>
					<li>
						<a href="/contact-us-1" target="_blank"
							activeClass="active" to="sidenav_footer" className="scroll nav-link"  smooth={true} offset={-70} duration={500} >
							<i className="las la-phone-volume text-white"></i> <span className="text-white">Contact Us</span>
						</a>
					</li>
				</ul>
			</>
		)
	}
}

export default SideNav;