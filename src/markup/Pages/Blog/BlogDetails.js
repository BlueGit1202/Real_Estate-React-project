import React,{ Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../../Layout/Header';
import Footer2 from './../../Layout/Footer2';
import PageTitle from './../../Layout/PageTitle';

//images/

import dpic1 from './../../../images/blog/default/pic1.jpg';
import gallery1 from './../../../images/gallery/pic1.jpg';
import gallery2 from './../../../images/gallery/pic2.jpg';
import test2 from './../../../images/testimonials/pic2.jpg';
import test3 from './../../../images/testimonials/pic3.jpg';
import bgimg from './../../../images/bg-view.png';

const CommentType = ({blogImage, blogTitle}) => {
	return(
		<>
			<div className="comment-body">
				<div className="comment-author vcard"> 
					<img  className="avatar photo" src={blogImage} alt="" /> 
					<cite className="fn">{blogTitle}</cite> 
					<span className="says">says:</span> 
					 <div className="comment-meta"> <Link to={"#"}>October 6, 2015 at 7:15 am</Link> </div>
					<div className="reply"> <Link to={"#"} className="comment-reply-link">Reply</Link> </div>
				</div>
				<div className="comment-content">
					<p>Aliquam viverra, ligula at mattis pharetra, risus nibh dignissim le in luctus odio nulla in nunc. Fusce a purus sed mauris faucibus suscipit.</p>
				</div>
			</div>
		</>
	)
}

class BlogDetails extends Component{
	render(){
		return(
			<Fragment>
				<Header />
				<div className="page-content bg-white">
					<PageTitle motherMenu="Blog Details" activeMenu="Blog Details" />
					{/*  Inner Page Banner */}
					<section className="content-inner">				
						<div className="container">
							<div className="blog-post blog-single">
								<div className="dlab-info">
									<div className="dlab-meta">
										<ul>
											<li className="post-date"><i className="las la-calendar-alt"></i><span>March 29, 2020</span></li>
											<li className="post-user"><i className="las la-user"></i>By <Link to={"#"}>Deo Admin</Link></li>
										</ul>
									</div>
									<h2 className="dlab-title">
										<Link to={"#"}>How Roofing Charge for Their Services Asking the Right Questions</Link>
									</h2>
									<div className="dlab-media">
										<Link to={"#"}><img src={dpic1} alt="" /></Link>
									</div>
									<div className="dlab-post-text text">
										<p>
											Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed maximus orci ac condi mentum efficitur. Suspendi potenti. Fusce diam felis, ullamcor aca felis sed, volutpat varius tortor. Ut eleifend justo sed quam blandit, vehicula ante hendrerit. Sed condimentum libero vel eros porta, eu malesuada nulla bibendum. Proin varius sollicitudin nulla quis fermentum. Nunc vitae arcu eget diam gravida ultrices finibus nec mi. Maecenas egestas libero.
										</p>
										<p>
											Donec ultricies convallis urna. Morbi consequat vestibulum nunc sed semper. Proin iaculis risus eleifend, efficitur eros et, tristique tortor. Integer nec lacinia augue. Curabitur mattis vel orci id mattis. Aliquam eu dignissim sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vitae fermentum quam.
										</p>
										<ul>
											<li>
												<Link to={"#"}>Duis auctor sed elit quis consequat.</Link> Fusce est quam, sodales vel eros vitae, dictum consectetur dolor. Fusce convallis mauris tellus, eu aliquet magna aliquet eget.
											</li>
											<li>
												Nam iaculis, <Link to={"#"}>enim ut elementum maximus, quam lectus convallis metus, </Link>id suscipit risus lectus id urna. Cras viverra consectetur diam. Morbi sed consequat tellus, in vehicula urna.
											</li>
											<li>
												<Link to={"#"}>Morbi sit amet diam sodales, sodales purus quis, </Link>feugiat turpis. Maecenas elementum mauris quis plac erat maximus. <Link to={"#"}>Curabitur elementum lobortis malesuada.</Link>
											</li>
										</ul>
										<p>
											Aliquam laoreet fringilla velit, quis pulvinar ex bibendum vestibulum. Aenean vel dapibus ex. Curabitur sodales dui ut hendrerit volutpat. Phasellus fringilla semper urna, eu dapibus lacus porttitor at. Sed eget pellentes orci. Aliquam pulvinar augue sed molestie semper. Integer ullamcorper magna fringilla arcu rutrum, sed porttitor ex viverra. 
										</p>
										<ul className="wp-block-gallery columns-3">
											<li className="blocks-gallery-item"><img alt="" src={gallery2} /></li>
											<li className="blocks-gallery-item"><img alt="" src={gallery1} /></li>
										</ul>
										<h4>Curabitur elementum lobortis malesuada.</h4>
										<p>
											Aliquam laoreet fringilla velit, quis pulvinar ex bibendum vestibulum. Aenean vel dapibus ex. Curabitur sodales dui ut hendrerit volutpat. Phasellus fringilla semper urna, eu dapibus lacus porttitor at. Sed eget pellentes orci. Aliquam pulvinar augue sed molestie semper. Integer ullamcorper magna fringilla arcu rutrum, sed porttitor ex viverra. 
										</p>
										<blockquote className="wp-block-quote">
											<p>
												Use this static Page to test the Theme’s handling of the Blog Posts Index page. If the site is set to display a static Page on the Front Page, and this Page is.
											</p>
											<cite>WordPress Community</cite>
										</blockquote>
										<p>
											Cras ac erat sapien. Etiam porta, arcu sed scelerisque dapibus, orci felis tincidunt tellus, at bibendum ex velit ac dolor. Aenean auctor, lectus laoreet efficitur dapibus, orci nulla ultrices risus, sed volutpat nisl nulla at felis. Integer ligula risus, ultricies eu velit non, rutrum consectetur neque. Sed ullamcorper sed massa quis hendrerit. 
										</p>
										<p>
											Nulla ultrices diam at odio malesuada lacinia. Fusce eget posuere purus. Donec accumsan vehicula mi, id imperdiet nulla ornare eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
										</p>
										<p>
											Praesent vehicula neque et augue consectetur placerat. Ut pellentesque euismod sapien eget venenatis. Proin massa lacus, dapibus a scelerisque a, molestie sit amet mauris. Cras maximus lectus quis orci feugiat, at tristique velit bibendum. Etiam augue arcu, cursus id egestas ut, viverra at urna. Quisque ipsum sit amet aliquet tempus.
										</p>
										
									</div>
									<div className="post-footer">
										<div className="dlab-meta">
											<span className="title">TAGS : </span>
											<ul className="tag-list">
												<li className="post-tag mr-2"><Link to={"#"}>#Lifestyle</Link></li>
												<li className="post-tag mr-2"><Link to={"#"}>#Blog</Link></li>
												<li className="post-tag mr-2"><Link to={"#"}>#Instagram</Link></li>
												<li className="post-tag"><Link to={"#"}>#Image</Link></li>
											</ul>
										</div>
										<div className="share-post">
											<ul className="list-inline m-b0">
												<li><Link to={"#"} className="mr-1"><i className="fa fa-facebook"></i></Link></li>
												<li><Link to={"#"} className="mr-1"><i className="fa fa-instagram"></i></Link></li>
												<li><Link to={"#"} className="mr-1"><i className="fa fa-twitter"></i></Link></li>
												<li><Link to={"#"} className=""><i className="fa fa-linkedin"></i></Link></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="clear m-b30" id="comment-list">
								<div className="comments-area" id="comments">
									<div className="section-head">
										<h4 className="widget-title style-1">COMMENTS</h4>
									</div>
									{/*  Comment List */}
									<ol className="comment-list">
										<li className="comment">
											<CommentType  blogImage={test2} blogTitle="Stacy Poe" />
											<ol className="children">
												<li className="comment odd parent">
													<CommentType  blogImage={test3} blogTitle="Muhammad Clay" />
												</li>
											</ol>
											{/* List End */}
										</li>
										<li className="comment">
											<CommentType  blogImage={test2} blogTitle="Leo Tucker" />
											<ol className="children">
												<li className="comment odd parent">
													<CommentType  blogImage={test3} blogTitle="Shailja Reddy" />
												</li>
											</ol>
											{/* List End */}
										</li>
									</ol>
									{/*  Comment List End */}
								</div>
							</div>
							{/*  Form  */}
							<div className="comments-area min-container">
								<div className="comment-respond">
									<div className="section-head">
										<h4 className="widget-title style-1">LEAVE A REPLY</h4>
									</div>
									<h3 className="comment-reply-title" id="reply-title">
										<small> 
											<Link to={"#"} style={{display:"none"}}  id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link> 
										</small>
									</h3>
									<form className="comment-form" id="commentform" method="post">
										<p className="comment-form-author">
											<label for="author">Name <span className="required">*</span></label>
											<input type="text" value="" placeholder="Name" id="author" />
										</p>
										<p className="comment-form-email">
											<label for="email">Email <span className="required">*</span></label>
											<input type="text" value="" placeholder="Email" id="email" />
										</p>
										<p className="comment-form-comment">
											<label for="comment">Comment</label>
											<textarea rows="8" placeholder="Add a Comment" id="comment"></textarea>
										</p>
										<p className="form-submit">
											<input type="submit" value="Post Comment" className="btn btn-primary" id="submit" />
										</p>
									</form>
								</div>
							</div>
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
export default BlogDetails;