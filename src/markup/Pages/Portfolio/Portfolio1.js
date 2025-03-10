import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import WOW from 'wowjs';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 
import Header from './../../Layout/Header';
import Footer2 from './../../Layout/Footer2';
import PageTitle from './../../Layout/PageTitle';
//images
import bgimg from './../../../images/bg-view.png';
import port1 from './../../../images/portfolio/portfolio-box/pic1.jpg';
import port2 from './../../../images/portfolio/portfolio-box/pic2.jpg';
import port3 from './../../../images/portfolio/portfolio-box/pic3.jpg';
import port4 from './../../../images/portfolio/portfolio-box/pic4.jpg';
import port5 from './../../../images/portfolio/portfolio-box/pic5.jpg';
import port6 from './../../../images/portfolio/portfolio-box/pic6.jpg';
import port7 from './../../../images/portfolio/portfolio-box/pic7.jpg';

//Light Gallery on icon click 
/* const Iconimage = props => {
	const { openLightbox } = useLightbox()
	
  return (
    
  )
} */

const GalleryBox = ({imageBlog},props)=>{
	const { openLightbox } = useLightbox()
	return(
	
		<div className="dlab-media dlab-img-overlay1 overlay-primary" > 
			<img src={imageBlog}  alt="" /> 
			<div className="overlay-bx">
				<div className="overlay-icon"> 
					<a href="https://www.youtube.com/watch?v=Dj6CKxQue7U" className="popup-youtube">
						<i className="fa fa-play icon-bx-xs"></i>
					</a> 
					<a   onClick={() => openLightbox(props.imageToOpen)} className=" " >
					  <i className="fa fa-search icon-bx-xs"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

class Portfolio1 extends Component{
	componentDidMount(){
		new WOW.WOW().init();	
	}
	render(){
		return(
			<Fragment>	
			<Header />
			<div className="page-content bg-white">
				{/*  banner  */}
				<PageTitle motherMenu="Portfolio 1" activeMenu="Portfolio 1" />
				{/*  Section-1 Start  */}
				<section className="content-inner" data-content="PORTFOLIO">				
					<div className="container">
						<div className="section-head text-center">
							<p>VIEW PORTFOLLO</p>
							<h2 className="title">Don’t miss your chance to discover the most fascinating </h2>
							<p>Phasellus dolor risus, luctus at lorem eu, sollicitudin mollis leo. Pellentesque tincidunt vel tortor et cursus. Donec posuere risus vitae viverra cursus. Nunc porttitor pharetra elit id</p>
						</div>
						<SimpleReactLightbox>
							<SRLWrapper >
								<div className="row" id="lightgallery">
									<div className="col-md-12 col-lg-6">
										<div className="dlab-box gallery-box-1 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
											<GalleryBox imageBlog={port1} />
										</div>
									</div>
									<div className="col-md-6 col-lg-3 col-sm-6">
										<div className="dlab-box gallery-box-1 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
											<GalleryBox imageBlog={port2} />
										</div>
										<div className="dlab-box gallery-box-1 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
											<GalleryBox imageBlog={port3} />
										</div>
									</div>
									<div className="col-md-6 col-lg-3 col-sm-6">
										<div className="dlab-box gallery-box-1 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
											<GalleryBox imageBlog={port4} />
										</div>
										<div className="dlab-box gallery-box-1 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
											<GalleryBox imageBlog={port5} />
										</div>
									</div>
									<div className="col-md-6 col-lg-6 col-sm-6">
										<div className="dlab-box gallery-box-1 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
											<GalleryBox imageBlog={port6} />
										</div>
									</div>
									<div className="col-md-6 col-lg-6 col-sm-6">
										<div className="dlab-box gallery-box-1 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
											<GalleryBox imageBlog={port7} />
										</div>
									</div>
								</div>
							</SRLWrapper>
						</SimpleReactLightbox>
					</div>
				</section>
				{/*  Section-1 End  */}
				<div>				
					<img src={bgimg} className="bg-view" alt=""/>
				</div>
			</div>	
			<Footer2 />
			</Fragment>	
		)
	}
}
export {GalleryBox};
export default Portfolio1;