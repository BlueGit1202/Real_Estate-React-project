import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";

import Header2 from "./../../Layout/Header2";
import Footer2 from "./../../Layout/Footer2";
import SideNav from "./../../Element/SideNav";
import VideoPopup from "./../../Element/VideoPopup";

import Slider1 from "./../../Element/Slider1";
import EventSection from "./EventSection";

//Images
import SliderImg from "./../../../images/main-slider/slider1.png";

class Index1 extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();

    var GalleryCategory = document.querySelectorAll(".gallery-category .items");
    var GalelryMedia = document.querySelectorAll(".gallery-img img");

    var fch = [].slice.call(GalleryCategory);
    var fcMedia = [].slice.call(GalelryMedia);

    for (var y = 0; y < fch.length; y++) {
      fch[y].addEventListener("mouseenter", function() {
        galleryActive(this);
      });
    }

    function galleryActive(current) {
      fcMedia.forEach(el => el.classList.remove("active"));

      setTimeout(() => {
        var dataImageBx = current.getAttribute("data-image-bx");
        document.querySelector("#" + dataImageBx).classList.add("active");
      }, 100);
    }
  }
  render() {
    return (
      <Fragment>
        <div className="sidenav-list">
          <SideNav />
        </div>

        <Header2 />
        {/* <!-- Main Slider --> */}
        <div className="page-content bg-white">
          <div
            className="banner-three "
            style={{
              backgroundImage: "url(" + SliderImg + ")",
              backgroundSize: "cover"
            }}
            data-content="HOME"
            id="sidenav_home"
          >
            <div className="container">
              <div className="row align-items-center banner-inner ">
                <div className="col-md-6">
                  <div className="content-blog">
                    <div className="banner-content">
                      <h1 className=" title  m-b20">
                        Helping you to Buy,<br />Sell and Rent out<br />your
                        Stuff with <span className="text-danger">Arziyat</span>
                      </h1>
                      <a
                        href="https://realestate.arziyat.com/index.php/contact-us/"
                        className="btn btn-danger"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book your Visit
                      </a>
                    </div>
                    <VideoPopup />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Main Slider End--> */}

          {/* Section-1  Start*/}
          <section className="amenities-area">
            <Slider1 />
          </section>
          {/* Section-1  End*/}

          {/* Section-3 */}

          <section
            className="content-inner about-box"
            data-content="ABOUT US"
            id="sidenav_aboutUs"
          >
            <div className="about-bg" />
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-lg-6">
                  <div className="section-head">
                    <h2 className="title">About Arziyat</h2>
                    <div className="dlab-separator bg-danger " />
                    <h4 className="mb-4">
                      SEE WHY OUR RESIDENTS CALL OUR COMMUNITY HOME.
                    </h4>
                    Arziyat is a web based global platform for Real Estate Trade
                    at National and International level. This platform provides
                    online global connectivity between buyers, sellers,
                    consultants and other service providers related to this
                    industry. Using hi-tech web tools and formulas, the only
                    purpose of this platform is to provide a community based
                    earning solutions through integration of IT with Real
                    Estate. Arziyat envisions to revolutionize the Real Estate
                    world through innovative ideas and powerful technologies
                    with a view to benefit all segments of this trade through
                    provision of equal opportunities for everyone
                  </div>
                  <Link to={"/about-us-1"} className="btn btn-danger ">
                    About Us
                  </Link>
                </div>
                <div className="col-md-5 col-lg-6" />
              </div>
            </div>
          </section>
          {/* Section-3 End*/}
          {/* Section-7 Start*/}
          <section
            className="content-inner-2"
            data-content="NEWS & EVENT"
            id="sidenav_newsEvent"
          >
            <EventSection />
          </section>
          {/* Section-7 End*/}
        </div>
        <Footer2 />
      </Fragment>
    );
  }
}

export default Index1;
