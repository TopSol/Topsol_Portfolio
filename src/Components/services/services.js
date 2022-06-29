import React, { useState } from "react";
import { Link } from "react-router-dom";
import tabBG from "../../../src/img/tab-bg.jpg";
function Services() {
  const [selectService, setSelectService] = useState(1);

  const updateService = (val) => {
    setSelectService(val);
  };

  return (
    <section
      id="services"
      className="recent_update_area"
      style={{ backgroundImage: "url(" + tabBG + ")" }}
    >
      <div className="container">
        <div className="recent_update_inner">
          <ul
            className="nav nav-tabs justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item">
              <div
                className={`nav-link updatedA ${
                  selectService === 1 && "active"
                }`}
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                onClick={() => updateService(1)}
                style={{ cursor: "pointer" }}
              >
                <span className="lnr lnr-screen"></span>
                <h6>Web Development</h6>
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${selectService === 2 && "active"}`}
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                onClick={() => updateService(2)}
                style={{ cursor: "pointer" }}
              >
                <span className="lnr lnr-screen"></span>
                <h6>App Development</h6>
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${selectService === 3 && "active"}`}
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
                onClick={() => updateService(3)}
                style={{ cursor: "pointer" }}
              >
                <span className="lnr lnr-screen"></span>
                <h6>BlockChain</h6>
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${selectService === 4 && "active"}`}
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
                onClick={() => updateService(4)}
                style={{ cursor: "pointer" }}
              >
                <span className="lnr lnr-screen"></span>
                <h6>WordPress</h6>
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${selectService === 5 && "active"}`}
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
                onClick={() => updateService(5)}
                style={{ cursor: "pointer" }}
              >
                <span className="lnr lnr-screen"></span>
                <h6>Digital Markiting</h6>
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${selectService === 6 && "active"}`}
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
                onClick={() => updateService(6)}
                style={{ cursor: "pointer" }}
              >
                <span className="lnr lnr-screen"></span>
                <h6>DevOps</h6>
              </div>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            {selectService === 1 && (
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row recent_update_text align-items-center">
                  <div className="col-lg-5">
                    <div className="common_style">
                      {/* <p className="line">Modern Daesign Trends</p> */}
                      <h3>
                        Web App Development
                        {/* <br /> Inner beauty Lasts Long */}
                      </h3>
                      <p>
                        We build custom web apps using the right technology
                        stacks that align with your business objectives and help
                        you achieve maximum growth. Our end goal is to build
                        quality web applications for you that maximize resource
                        utilization at a low cost.
                      </p>
                      <Link className="primary_btn" to="/servicesDetail">
                        <span>Learn More</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 text-right">
                    <div className="chart_img">
                      <img
                        className="img-fluid"
                        src={require("../../img/web-development.jpg")}
                        alt="chartImage"
                        style={{ width: "90%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectService === 2 && (
              <div
                className="tab-pane fade show active"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row recent_update_text align-items-center">
                  <div className="col-lg-5">
                    <div className="common_style">
                      {/* <p className="line">Modern Daesign Trends</p> */}
                      <h3>
                        Mobile App Development
                        {/* <br /> Inner beauty Lasts Long */}
                      </h3>
                      <p>
                        Mobile app development services cover end-to-end
                        development of mobile apps, from business analysis and
                        UI/UX design to mobile application testing and
                        deployment or online market publication. Actual process
                        of coding and developing the web app, paying attention
                        to details as per customer specifications to develop
                        final product.
                      </p>
                      <Link className="primary_btn" to="/servicesDetail">
                        <span>Learn More</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 text-right">
                    <div className="chart_img">
                      <img
                        className="img-fluid"
                        src={require("../../img/mobile-app-development.png")}
                        alt="chartImage"
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectService === 3 && (
              <div
                className="tab-pane fade show active"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="row recent_update_text align-items-center">
                  <div className="col-lg-5">
                    <div className="common_style">
                      {/* <p className="line">Modern Daesign Trends</p> */}
                      <h3>
                        Block Chain Development
                        {/* <br /> Inner beauty Lasts Long */}
                      </h3>
                      <p>
                        Our developers are early birds of the blockchain
                        revolution with extensive blockchain development
                        experience. We build smart contracts to automate
                        transactions, enhance trust, and eliminate third-party
                        authentication using Ethereum, NEM, Stellar and other
                        prevalent technologies.
                      </p>
                      <Link className="primary_btn" to="/servicesDetail">
                        <span>Learn More</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 text-right">
                    <div className="chart_img">
                      <img
                        className="img-fluid"
                        src={require("../../img/chart.png")}
                        alt="chartImage"
                        style={{ width: "70%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectService === 4 && (
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row recent_update_text align-items-center">
                  <div className="col-lg-5">
                    <div className="common_style">
                      {/* <p className="line">Modern Daesign Trends</p> */}
                      <h3>
                        WordPress Development
                        {/* <br /> Inner beauty Lasts Long */}
                      </h3>
                      <p>
                        We provide carving digital solutions from their
                        conceptualization to deployment, data migration, API
                        integrations, and plugin development with dexterity. We
                        develop high-performing and easy-to-manage WordPress
                        websites for clients with better business results.
                      </p>
                      <Link className="primary_btn" to="/servicesDetail">
                        <span>Learn More</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 text-right">
                    <div className="chart_img">
                      <img
                        className="img-fluid"
                        src={require("../../img/wordpress")}
                        alt="chartImage"
                        style={{ width: "90%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectService === 5 && (
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row recent_update_text align-items-center">
                  <div className="col-lg-5">
                    <div className="common_style">
                      {/* <p className="line">Modern Design Trends</p> */}
                      <h3>
                        Digital Marketing
                        {/* <br /> Inner beauty Lasts Long */}
                      </h3>
                      <p>
                        We have a wealth of global marketing and e-commerce
                        experience to take your brand across borders. Let's open
                        up to new markets together.
                      </p>
                      <Link className="primary_btn" to="/servicesDetail">
                        <span>Learn More</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 text-right">
                    <div className="chart_img">
                      <img
                        className="img-fluid"
                        src={require("../../img/digitalMarketing.jpeg")}
                        alt="chartImage"
                        style={{ width: "90%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectService === 6 && (
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row recent_update_text align-items-center">
                  <div className="col-lg-5">
                    <div className="common_style">
                      {/* <p className="line">Modern Daesign Trends</p> */}
                      <h3>
                        DevOps
                        {/* <br /> Inner beauty Lasts Long */}
                      </h3>
                      <p>
                        We provide carving digital solutions from their
                        conceptualization to deployment, data migration, API
                        integrations, and plugin development with dexterity. We
                        develop high-performing and easy-to-manage WordPress
                        websites for clients with better business results.
                      </p>
                      <Link className="primary_btn" to="/servicesDetail">
                        <span>Learn More</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 text-right">
                    <div className="chart_img">
                      <img
                        className="img-fluid"
                        src={require("../../img/devops-faq-1.jpg")}
                        alt="chartImage"
                        style={{ width: "90%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
