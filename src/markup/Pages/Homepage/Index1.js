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
import main1 from "./../../../images/gallery/main1.jpg";

import services1 from "./../../../images/services/pic1.jpg";
import services2 from "./../../../images/services/pic2.jpg";
import services3 from "./../../../images/services/pic3.jpg";
import services4 from "./../../../images/services/pic4.jpg";
import services5 from "./../../../images/services/pic5.jpg";
import services6 from "./../../../images/services/pic6.jpg";
import services7 from "./../../../images/services/pic7.jpg";
import services8 from "./../../../images/services/pic8.jpg";
import services9 from "./../../../images/services/pic9.jpg";
import services10 from "./../../../images/services/pic10.jpg";

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
                        Stuff with Arziyat{" "}
                      </h1>
                      <a
                        href="https://realestate.arziyat.com/index.php/contact-us/"
                        className="btn btn-primary"
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
                    <div className="dlab-separator bg-primary " />
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
                  <Link to={"/about-us-1"} className="btn btn-primary ">
                    About Us
                  </Link>
                </div>
                <div className="col-md-5 col-lg-6" />
              </div>
            </div>
          </section>
          {/* Section-3 End*/}
          {/* Section-6 Start*/}
          <section
            className="content-inner-2"
            data-content="OUR SERVICES"
            id="sidenav_ourServices"
          >
            <div className="container">
              <div className="row align-items-end section-head">
                <div className="col-md-6">
                  <h2 className="title">Building & Services</h2>
                  <div className="dlab-separator bg-primary" />
                  <p className="mb-3 mb-md-0">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                </div>
                <div className="col-md-6 text-md-right">
                  <Link to={"./blog-grid"} className="btn btn-primary">
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="service-area"
              style={{ backgroundImage: "url(" + main1 + ")" }}
            >
              <div className="row spno service-row">
                <div className="col ">
                  <div className="service-box">
                    <div className="media">
                      <img src={services1} alt="" />
                    </div>
                    <div className="info">
                      <Link to={"./blog-details"}>
                        <h4 className="title">24 HRS. Water Supply</h4>
                      </Link>
                      <p>
                        The KingArchitect is a collection of grand proportioned.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="service-box">
                    <div className="media">
                      <img src={services2} alt="" />
                    </div>
                    <div className="info">
                      <Link to={"./blog-details"}>
                        <h4 className="title">CCTV With Intercom</h4>
                      </Link>
                      <p>
                        The KingArchitect is a collection of grand proportioned.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="service-box">
                    <div className="media">
                      <img src={services3} alt="" />
                    </div>
                    <div className="info">
                      <Link to={"./blog-details"}>
                        <h4 className="title">Power Backup</h4>
                      </Link>
                      <p>
                        The KingArchitect is a collection of grand proportioned.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="service-box">
                    <div className="media">
                      <img src={services4} alt="" />
                    </div>
                    <div className="info">
                      <Link to={"./blog-details"}>
                        <h4 className="title">DTH Facilitiy</h4>
                      </Link>
                      <p>
                        The KingArchitect is a collection of grand proportioned.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="service-box">
                    <div className="media">
                      <img src={services5} alt="" />
                    </div>
                    <div className="info">
                      <Link to={"./blog-details"}>
                        <h4 className="title">Rain Water Harvesting</h4>
                      </Link>
                      <p>
                        The KingArchitect is a collection of grand proportioned.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="service-box">
                    <div className="media">
                      <img src={services6} alt="" />
                    </div>
                    <div className="info">
                      <Link to={"./blog-details"}>
                        <h4 className="title">Fully Automatic Lifts</h4>
                      </Link>
                      <p>
                        The KingArchitect is a collection of grand proportioned.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="service-box">
                    <div className="media">
                      <img src={services7} alt="" />
                    </div>
                    <div className="info">
                      <Link to={"./blog-details"}>
                        <h4 className="title">Allotted Parking</h4>
                      </Link>
                      <p>
                        The KingArchitect is a collection of grand proportioned.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="service-box">
                    <div className="media">
                      <img src={services8} alt="" />
                    </div>
                    <div className="info">
                      <Link to={"./blog-details"}>
                        <h4 className="title">Fire Fighting System</h4>
                      </Link>
                      <p>
                        The KingArchitect is a collection of grand proportioned.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="service-box">
                    <div className="media">
                      <img src={services9} alt="" />
                    </div>
                    <div className="info">
                      <Link to={"./blog-details"}>
                        <h4 className="title">Security</h4>
                      </Link>
                      <p>
                        The KingArchitect is a collection of grand proportioned.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="service-box">
                    <div className="media">
                      <img src={services10} alt="" />
                    </div>
                    <div className="info">
                      <Link to={"./blog-details"}>
                        <h4 className="title">Tow Level Parking</h4>
                      </Link>
                      <p>
                        The KingArchitect is a collection of grand proportioned.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section-6 End*/}
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
