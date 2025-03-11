import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import grid1 from "../../images/about/about2.jpg";

const latestBlog = [{ image: grid1 }];
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

class EventSlider extends Component {
  render() {
    var settings = {
      arrows: true,
      slidesToShow: 1,
      speed: 3000,
      navSpeed: 3000,
      infinite: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
    return (
      <Slider
        className="blog-carousel owl-carousel owl-btn-center-lr owl-btn-out "
        {...settings}
      >
        <div className="item p-3">
          <div className="dlab-card blog-grid">
            <div className="dlab-media">
              <img src={grid1} alt="" />
            </div>
            <div className="dlab-info">
              <div className="dlab-meta">
                <ul>
                  <li className="post-date">
                    <i className="las la-calendar-alt" />
                    <span>March 29, 2020</span>
                  </li>
                  <li className="post-user">
                    <i className="las la-user" />By
                    <Link to={"#"}>Deo Admin</Link>
                  </li>
                </ul>
              </div>
              <h3 className="dlab-title">
                <Link to={"/news-event"}>
                  Pakistanis Become 5th Largest Buyers of Dubai Property in 2024
                </Link>
              </h3>
              <p>
                Last year, Pakistanis became the fifth largest buyers of
                properties in the UAE city of Dubai. In 2024, Indians would
                continue to be the leading buyers of Dubai real estate, while
                Pakistanis would move up to the fifth position, surpassing their
                previous ranking of seventh place, as revealed in a report by
                the Dubai-based property consultancy, Better Homes..
              </p>
              <div className="dlab-readmore">
                <Link to={"/news-event"} className="readmore">
                  <i className="las la-plus" /> Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default EventSlider;
