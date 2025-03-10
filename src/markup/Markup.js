import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index1 from "./Pages/Homepage/Index1";
import Aboutus from "./Pages/Aboutus/Aboutus";
import CompanyExhibition from "./Pages/CompanyExhibition";
import PriceTable from "./Pages/PriceTable";
import CompanyHistory from "./Pages/CompanyHistory";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ErrorPage from "./Pages/ErrorPage";
import ComingSoon from "./Pages/ComingSoon";
import NewsAndEvent from "./Pages/Homepage/NewsAndEvent";

import SubscriptionBox1 from "./Pages/SubscriptionBox/SubscriptionBox1";
import SubscriptionBox2 from "./Pages/SubscriptionBox/SubscriptionBox2";
import ContactUs1 from "./Pages/Contact/ContactUs1";

//ScrollToTop
import ScrollToTop from "./Element/ScrollToTop";

class Markup extends Component {
  render() {
    return (
      <BrowserRouter basename="/react">
        <div className="page-wraper">
          <Switch>
            <Route path="/" exact component={Index1} />
            <Route path="/about-us-1" exact component={Aboutus} />
            <Route
              path="/company-exhibition"
              exact
              component={CompanyExhibition}
            />
            <Route path="/price-table" exact component={PriceTable} />
            <Route path="/company-history" exact component={CompanyHistory} />
            <Route path="/privacy-policy" exact component={PrivacyPolicy} />
            <Route path="/404-page" exact component={ErrorPage} />
            <Route path="/coming-soon" exact component={ComingSoon} />
            <Route
              path="/subscription-box-1"
              exact
              component={SubscriptionBox1}
            />
            <Route
              path="/subscription-box-2"
              exact
              component={SubscriptionBox2}
            />
            <Route path="/contact-us-1" exact component={ContactUs1} />
            <Route path="/news-event" exact component={NewsAndEvent} />
          </Switch>
        </div>
        <ScrollToTop />
      </BrowserRouter>
    );
  }
}

export default Markup;
