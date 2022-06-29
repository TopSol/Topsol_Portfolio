import React, { useState } from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  const [selectService, setSelectService] = useState(1);

  const updateService = (val) => {
    setSelectService(val);
  };

  return (
    <div style={{ paddingTop: 100 }} id="portfolio">
      <div className="container" id="portfolio">
        <div className="main_title">
          <h2>Feature Projects</h2>
        </div>

        {/*  start*/}
        <div className="container">
          {/* <div className="row">
            <div className="col"> */}
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
          </div>
          {/* </div>
          </div> */}
        </div>
        {/* end */}
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center"></div>
        </div>

        <div className="price_inner row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="price_item">
              <img
                src={require("../../../src/img/testportfolio.jpeg")}
                style={{ height: 320, width: "100%" }}
              />
              <div className="overlay">
                <div className="price_head">
                  <h4>Real States</h4>
                </div>
                <div className="price_body">
                  <div className="price_footer">
                    <Link className="primary_btn" to="/portfolioDetail">
                      <span>Get Started</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="price_item">
              <img
                src={require("../../../src/img/testportfolio.jpeg")}
                style={{ height: 320, width: "100%" }}
              />
              <div className="overlay">
                <div className="price_head">
                  <h4>Real States</h4>
                </div>
                <div className="price_body">
                  <div className="price_footer">
                    <Link className="primary_btn" to="/portfolioDetail">
                      <span>Get Started</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="price_item">
              <img
                src={require("../../../src/img/testportfolio.jpeg")}
                style={{ height: 320, width: "100%" }}
              />
              <div className="overlay">
                <div className="price_head">
                  <h4>Real States</h4>
                </div>
                <div className="price_body">
                  <div className="price_footer">
                    <Link className="primary_btn" to="/portfolioDetail">
                      <span>Get Started</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //  </section> */}

      <div
        style={{ display: "flex", justifyContent: "center", paddingTop: 30 }}
      >
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Portfolio;
