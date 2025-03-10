import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

import grid1 from './../../images/blog/blog-grid/pic1.jpg';
import grid2 from './../../images/blog/blog-grid/pic2.jpg';
import grid3 from './../../images/blog/blog-grid/pic3.jpg';

const latestBlog = [
	{ image: grid1,	 },
	{ image: grid2,	 },
	{ image: grid3,	 },
	{ image: grid2,	 },
]
/* function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next la la-angle-right"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
	<div className="owl-nav">
		<div className=" owl-prev la la-angle-left" onClick={onClick}/>
	</div>
  );
} */

class EventSlider extends Component{	
	render(){
		var settings = {		
			arrows: true,
            slidesToShow: 3,	
			speed: 3000,
			navSpeed: 3000,	
            infinite: true,
			autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
				
				<Slider className="blog-carousel owl-carousel owl-btn-center-lr owl-btn-out " {...settings}>
					{latestBlog.map((item, index) => (
						<div className="item p-3"  key={index}>
							<div className="dlab-card blog-grid">
							<div className="dlab-media"><img src={item.image} alt=""/></div>
								<div className="dlab-info">
									<div className="dlab-meta">
										<ul>
											<li className="post-date"><i className="las la-calendar-alt"></i><span>March 29, 2020</span></li>
											<li className="post-user"><i className="las la-user"></i>By <Link to={"#"}>Deo Admin</Link></li>
										</ul>
									</div>
									<h3 className="dlab-title">
										<Link to={"/blog-details"}>How Roofing Charge for Their Services Asking the Right Questions</Link>
									</h3>
									<p>The goal of this new editor is to make adding rich content to WordPress simple and enjoyable.</p>
									<div className="dlab-readmore">
										<Link to={"/blog-details"} className="readmore"><i className="las la-plus"></i> Read More</Link>
									</div>
								</div>
							</div>
						</div>
					))}	
				</Slider>
						
		)
		
	}
	
}

export default EventSlider;