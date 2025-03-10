import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import pic1 from "./../../images/amenities/pic1.jpg";
import pic2 from "./../../images/amenities/pic2.jpg";
import pic3 from "./../../images/amenities/pic3.jpg";

const latestBlog = [
  { image: pic1, url: "https://ads.arziyat.com", title: "Post your Ads" },
  { image: pic2, url: "https://realestate.arziyat.com/", title: "Real Estate" },
  { image: pic3, url: "https://rentorim.com/", title: "Rental" }
];
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="owl-nav">
      <div className="owl-next la la-angle-right" onClick={onClick} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="owl-nav">
      <div
        className=" owl-prev la la-angle-left"
        onClick={onClick}
        style={{ zIndex: 1 }}
      />
    </div>
  );
}

class Slider1 extends Component {
  render() {
    var settings = {
      arrows: false,
      centerMode: true,
      centerPadding: "500px",
      slidesToShow: 1,
      speed: 3000,
      navSpeed: 3000,
      infinite: true,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 1,
            centerPadding: "400px"
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            centerPadding: "250px"
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            centerPadding: "250px"
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerPadding: "200px"
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            centerPadding: "90px"
          }
        }
      ]
    };
    return (
      <Slider
        className="amenities-carousel owl-carousel owl-btn-center-lr "
        {...settings}
      >
        {latestBlog.map((item, index) =>
          <div className="items" key={index}>
            <div className="amenit-box">
              <div className="media">
                <a href={item.url} style={{ width: "100%" }}>
                  <img src={item.image} alt="" style={{ width: "100%" }} />
                </a>
              </div>
              <div className="info">
                <h5 className="title">
                  <i className="ti-home" />
                  <span>
                    <a href={item.url}>
                      {item.title}
                    </a>
                  </span>
                </h5>
              </div>
            </div>
          </div>
        )}
      </Slider>
    );
  }
}

export default Slider1;
