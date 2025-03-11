import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import EventSlider from "./../../Element/EventSlider";

import bgimg from "./../../../images/bg-view.png";

class EventSection extends Component {
  render() {
    return (
      <Fragment>
        {/* Section-7 Start*/}
        <div className="container">
          <div className="row align-items-end section-head">
            <div className="col-md-6">
              <h2 className="title">News & event</h2>
              <div className="dlab-separator bg-primary" />
              <p className="mb-3 mb-md-0">
                "Latest news and events taking place in the multibillion field
                of the Real Estate. Keep in touch for the latest news and events
              </p>
            </div>
            <div className="col-md-6 text-md-right">
              <Link
                to={"/news-event1"}
                target="_blank"
                className="btn btn-danger"
              >
                View All Post
              </Link>
            </div>
          </div>
          {/* Blog Carousel Start*/}
          <EventSlider />
          {/*Blog Carousel End*/}
        </div>
        <img src={bgimg} className="bg-view" alt="" />
        {/* Section-7 End*/}
      </Fragment>
    );
  }
}
export default EventSection;
