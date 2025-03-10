import React,{ Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import WOW from 'wowjs';
import Header from './../../Layout/Header';
import Footer2 from './../../Layout/Footer2';
import PageTitle from './../../Layout/PageTitle';

//images/

import bgimg from './../../../images/bg-view.png';


class ContactUs2 extends Component{
	componentDidMount(){
		new WOW.WOW().init();	
	}
	render(){
		return(
			<Fragment>
				<Header />
				<div className="page-content bg-white">
					<PageTitle motherMenu="Contact Us 2" activeMenu="Contact Us 2" />
					{/*  Inner Page Banner */}
					<section className="content-inner-2" data-content="CONTACT US">
						<div className="container">
							<div className="section-head text-center">
								<span>Contact us</span>
								<h2 className="title">Always Help You</h2>
							</div>
							<div className="banner-map">
								<iframe src=						"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219" 
									className="border-0 align-self-stretch rounded-sm" style={{border:"0", width:"100%", minHeight:"500px"}} allowfullscreen 
								/>
							</div>
						</div>
					</section>
					<section className="content-inner-2">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-4 col-md-4 col-sm-6">
									<div className="icon-bx-wraper m-sm-b30 left">
										<div className="icon-md m-b20 m-t5">
											<Link to={"#"} className="icon-cell text-primary">
												<i className="las la-phone-volume"></i>
											</Link>
										</div>
										<div className="icon-content">
											<h3 className="dlab-tilte m-b5">Phone</h3>
											<p>Phone 01:(+032) 3456 7890 <br/> Phone 02: (+032) 1234 5678</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-6">
									<div className="icon-bx-wraper m-sm-b30 left">
										<div className="icon-md m-b20 m-t5">
											<Link to={"#"} className="icon-cell text-primary">
												<i className="las la-map"></i>
											</Link>
										</div>
										<div className="icon-content">
											<h3 className="dlab-tilte m-b5">Address</h3>
											<p>Spring Store London Oxford Street, 012 United Kingdom</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="icon-bx-wraper left">
										<div className="icon-md m-b20 m-t5">
											<Link to={"#"} className="icon-cell text-primary">
												<i className="las la-envelope-open"></i>
											</Link>
										</div>
										<div className="icon-content">
											<h3 className="dlab-tilte m-b5">Email</h3>
											<p>Example@msimple.net <br/> Info@Simplenet.net</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>	
					<section className="content-inner contact-box">	
						<div className="container">	
							<div className="section-head text-center">
								<span>Get in touch with us</span>
								<h2 className="title">Contact us</h2>
							</div>
							<div className="dzFormMsg"></div>
							<form method="post" className="dzForm" action="script/contact.php">
								<input type="hidden" value="Contact" name="dzToDo" />
								<div className="row">
									<div className="col-lg-4 col-md-4 col-sm-12">
										<div className="form-group">
											<input name="dzName" type="text" required className="form-control" placeholder="Enter your name" />
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12">
										<div className="form-group">
											<input name="dzEmail" type="email" className="form-control" required  placeholder="Your Email Address" />
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12">
										<div className="form-group">
											<input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Phone" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12">
										<div className="form-group">
											<textarea name="dzMessage" rows="4" className="form-control" required placeholder="Your message here"></textarea>
										</div>
									</div>
									<div className="col-md-12 col-sm-12">
										<div className="form-group">
											<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
											<input className="form-control d-none" style={{display:"none"}} data-recaptcha="true" required data-error="Please complete the Captcha" />
										</div>
									</div>
									<div className="col-md-12 col-sm-12 text-center">
										<button name="submit" type="submit" value="Submit" className="btn btn-primary btn-lg">Send Message</button>
									</div>
								</div>
							</form>
						</div>
					</section>
					<div>				
						<img src={bgimg} className="bg-view" alt=""/>
					</div>
				</div>
				<Footer2 />
			</Fragment>
		)	
	}
}
export default ContactUs2;