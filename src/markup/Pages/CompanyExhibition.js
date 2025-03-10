import React,{ Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import WOW from 'wowjs';
import Header from './../Layout/Header';
import Footer2 from './../Layout/Footer2';
import PageTitle from './../Layout/PageTitle';
import ExhibitionSlider1 from './../Element/ExhibitionSlider1';
import ExhibitionSlider2 from './../Element/ExhibitionSlider2';

//images/

class CompanyExhibition extends Component{
	componentDidMount(){
		new WOW.WOW().init();	
	}
	render(){
		return(
			<Fragment>
				<Header />
				<div className="page-content bg-white">
					<PageTitle motherMenu="Company Exhibition" activeMenu="Company Exhibition" />
					{/*  Inner Page Banner */}
					<section className="content-inner exhibition-bx" data-content="EXHIBITION">
						<ExhibitionSection />
					</section>
					<div className="section-full">
						<ExhibitionSlider2 />
					</div>
				</div>
				<Footer2 />
			</Fragment>
		)	
	}
}

function ExhibitionSection(){
	return(
		<>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 ">
						<ExhibitionSlider1 />
					</div>
					<div className="col-lg-6 m-b30">
						<div className="section-head">
							<h2 className="title">Mission Is Design & Develop The Best Interior </h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie nec nisl eget scelerisque. Quisque placerat suscipit eros, eu tincidunt tellus blandit vel. Donec pellentesque dapibus interdum. Mauris et tellus congue, rutrum neque a, varius felis.
							</p>
						</div>
						<Link to={"/contact-us-1"} className="btn btn-primary m-r10 m-b10">Contact us</Link>
						<Link to={"/portfolio-1"} className="btn btn-primary m-b10">View Portfolio</Link>
					</div>
				</div>
			</div>
		</>
	)
}
export {ExhibitionSection};

export default CompanyExhibition;