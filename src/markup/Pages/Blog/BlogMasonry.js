import React,{ Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import Header from './../../Layout/Header';
import Footer2 from './../../Layout/Footer2';
import PageTitle from './../../Layout/PageTitle';
import {Pagination} from './BlogGrid';

//images/
import grid1 from './../../../images/blog/blog-grid/pic1.jpg';
import grid4 from './../../../images/blog/blog-grid/pic4.jpg';
import grid5 from './../../../images/blog/blog-grid/pic5.jpg';
import grid6 from './../../../images/blog/blog-grid/pic6.jpg';
import grid7 from './../../../images/blog/blog-grid/pic7.jpg';
import grid8 from './../../../images/blog/blog-grid/pic8.jpg';
import bgimg from './../../../images/bg-view.png';

const gridBlog =[
	{blogimage: grid1 },	
	{blogimage: grid7 },	
	{blogimage: grid8 },	
	{blogimage: grid4 },	
	{blogimage: grid5 },	
	{blogimage: grid6 },	
];

// Masonry section
const masonryOptions = {                                          
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }
// Masonry section end

class BlogMasonry extends Component{
	render(){
		return(
			<Fragment>
				<Header />
				<div className="page-content bg-white">
					<PageTitle motherMenu="Blog Masonry" activeMenu="Blog Masonry" />
					{/*  Inner Page Banner */}
					<section className="content-inner">				
						<div className="container">
							<div className="" id="masonry" data-column-width="10">
								<Masonry
									className={'my-gallery-class'} // default ''
									options={masonryOptions} // default {}
									disableImagesLoaded={false} // default false
									updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
									imagesLoadedOptions={imagesLoadedOptions} // default {}
								>
									{gridBlog.map((data,index)=>(
										<div className="card-container col-md-6 col-lg-4 col-sm-12 mb-5" key={index}>
											<div className="dlab-card blog-grid">
												<div className="dlab-media">
													<img src={data.blogimage} alt="" />
												</div>
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
														<Link to={"/blog-details"}className="readmore"><i className="las la-plus"></i> Read More</Link>
													</div>
												</div>
											</div>
										</div>
									))}
								</Masonry>
							</div>
							<nav aria-label="Page navigation example">
								<Pagination />
							</nav>
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
export default BlogMasonry;