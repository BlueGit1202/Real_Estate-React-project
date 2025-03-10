import React, { Fragment, Component } from "react";
import WOW from "wowjs";
import Header from "./../../Layout/Header";
import Footer2 from "./../../Layout/Footer2";
import PageTitle from "./../../Layout/PageTitle";

//images/

import bgimg from "./../../../images/bg-view.png";

class ContactUs1 extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <Fragment>
        <Header />
        <div className="page-content bg-white">
          <PageTitle motherMenu="Contact Us" activeMenu="Contact Us" />
          {/*  Inner Page Banner */}
          <section className="content-inner-1" data-content="ABOUT US">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-5 col-sm-12">
                  <div className="section-head m-b30">
                    <h2 className="title">Do You Have Any Question?</h2>
                    <div className="dlab-separator bg-primary" />
                    <h5 className="title-small">CONTACT US</h5>
                  </div>
                  <ul className="contact-question">
                    <li>
                      <i className="fa fa-envelope-o" />
                      <h4 className="title">Email</h4>
                      <p>Support@arziyat.com</p>
                    </li>
                    <li>
                      <i className="fa fa-phone" />
                      <h4 className="title">Phone</h4>
                      <p>
                        0333 5429100<br />
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-12 m-b30">
                  <form
                    className="contact-box dzForm p-a30 border-1"
                    action="script/contact.php"
                  >
                    <h3 className="title-box">
                      Write us a few words about your project and we’ll prepare
                      a proposal for you within 24 hours
                    </h3>
                    <div className="dzFormMsg m-b20" />
                    <input type="hidden" value="Contact" name="dzToDo" />
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              name="dzFirstName"
                              type="text"
                              required=""
                              className="form-control"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              name="dzLastName"
                              type="text"
                              required=""
                              className="form-control"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              name="dzOther[Phone]"
                              type="text"
                              required=""
                              className="form-control"
                              placeholder="Phone"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              name="dzEmail"
                              type="email"
                              className="form-control"
                              required=""
                              placeholder="Your Email Id"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <div className="input-group">
                            <textarea
                              name="dzMessage"
                              rows="4"
                              className="form-control"
                              required=""
                              placeholder="Tell us about your project or idea"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group form-recaptcha">
                          <div className="input-group">
                            <div
                              className="g-recaptcha"
                              data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                              data-callback="verifyRecaptchaCallback"
                              data-expired-callback="expiredRecaptchaCallback"
                            />
                            <input
                              className="form-control d-none"
                              style={{ display: "none" }}
                              data-recaptcha="true"
                              required
                              data-error="Please complete the Captcha"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <button
                          name="submit"
                          type="submit"
                          value="Submit"
                          className="btn btn-primary btn-lg"
                        >
                          Get A Free Quote!
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <div>
            <img src={bgimg} className="bg-view" alt="" />
          </div>
        </div>
        <Footer2 />
      </Fragment>
    );
  }
}
export default ContactUs1;
