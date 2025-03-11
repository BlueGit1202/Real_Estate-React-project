import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";

import Header2 from "./../../Layout/Header2";
import Footer2 from "./../../Layout/Footer2";
import SideNav from "./../../Element/SideNav";

//Images
import mainImg from "./../../../images/about/about2.jpg";

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
          <h1 className=" title  m-b20" />
          {/* <!-- Main Slider End--> */}
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="section-head">
                  <h2 className="title">
                    Pakistanis Become 5th Largest Buyers of Dubai Property in
                    2024
                  </h2>
                  <div className="dlab-separator bg-danger " />
                  <br />
                  Last year, Pakistanis became the fifth largest buyers of
                  properties in the UAE city of Dubai. In 2024, Indians would
                  continue to be the leading buyers of Dubai real estate, while
                  Pakistanis would move up to the fifth position, surpassing
                  their previous ranking of seventh place, as revealed in a
                  report by the Dubai-based property consultancy, Better Homes.
                  Property prices in Dubai are projected to increase by 5-8%
                  each year in 2025, with luxury areas like Palm Jumeirah and
                  Downtown Dubai experiencing even more significant rises, as
                  reported by data from developer Damac. In 2023, British buyers
                  ranked second, while Russian buyers secured third place.
                  However, the position of Russian buyers has dropped to ninth,
                  and Turkey has taken over the tenth spot, replacing Poland. In
                  2024, the total value of property sold reached a staggering
                  AED 423 billion, marking a 30% year-on-year increase in both
                  transaction value and volume. This surge in sales was
                  attributed to the availability of better homes in the market.
                  Dubai’s real estate sector has shattered sales records, with
                  industry experts identifying Emaar, Ellington, Meraas, Select,
                  and Omniyat as the premier developers poised for exceptional
                  growth and investment returns in 2025, according to Arabian
                  Business. The luxury property sector in particular has been
                  performing consistently well outpacing cities like London and
                  New York, leaving a glut in the market for $10 million+ homes
                  with prices slated to rise by another 8-10% in 2025, according
                  to Better Homes Data. The city’s ambitious real estate plan
                  for the future is set to achieve a market valuation of 1
                  trillion dollars, and the population is projected to grow to
                  4.34 million by 2027. In 2024, Dubai experienced a record
                  number of overnight visitors, reaching 18.72 million, as the
                  tourism industry continues to fuel economic growth, impacting
                  sectors such as retail and hospitality. Furthermore,
                  significant infrastructure projects, such as the Etihad rail
                  network, Dubai’s blue metro line, and efforts to alleviate
                  traffic congestion, will further contribute to this growth.
                  Dubai is on track to continue attracting more and more Ultra
                  High Net Worth Individuals (UHNWI) as the construction of
                  luxury designer developments continues to rise. Dubai is home
                  to approximately 140 branded residences. Global talent will
                  continue to migrate with programs like golden visa, blue visa,
                  and investor programs. The current real estate trend, which
                  has been analyzed by experts as not just a ‘bubble’, is also
                  influencing trends in the hospitality industry. Over the past
                  year, the 5-star hotel sector experienced an astonishing
                  111.8% growth, as reported by real estate Consultancy
                  Cavendish Maxwell.
                </div>
              </div>
            </div>
            <img
              src={mainImg}
              alt="Description of the image"
              className="img-fluid mb-3"
            />
          </div>
        </div>
        <Footer2 />
      </Fragment>
    );
  }
}

export default Index1;
