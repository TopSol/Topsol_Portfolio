import React from "react";

function Features() {
  return (
    <section className="section_gap features_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="main_title">
              {/* <p className="top_title">Exclusive Stunning Features</p> */}
              <h2>Software Development Life Cycle(SDLC)</h2>
              <p>
                The Software Development Life Cycle simply outlines each task
                required to put together a software application. This helps to
                reduce waste and increase the efficiency of the development
                process. Monitoring also ensures the project stays on track, and
                continues to be a feasible investment for the company.
              </p>
              {/* <a href="#" className="primary_btn">
                <span>Start Free Trial Now!</span>
              </a> */}
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="left_features">
              <img
                className="img-fluid"
                src={require("../../img/Sdlc.png")}
                alt=""
              
              />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            {/* <!-- single features --> */}
            <div className="single_feature">
              <div className="feature_head">
                <span className="lnr lnr-screen"></span>
                <h4>planning and Requirement Analysis</h4>
              </div>
              <div className="feature_content">
                <p>
                  Discussions are held between the various stake holders,
                  managers, and users to find out what the particular software
                  will be used for. Who will use it and how will they be using
                  it. Information regarding what kind of input is required and
                  what output is expected is collected during this stage.
                </p>
              </div>
            </div>
            {/* <!-- single features --> */}
            <div className="single_feature">
              <div className="feature_head">
                <span className="lnr lnr-screen"></span>
                <h4>Design</h4>
              </div>
              <div className="feature_content">
                <p>
                  Here, the software and system design is developed according to
                  the instructions provided in the ‘Requirement Specification’
                  document. The design stage establishes what hardware and what
                  system requirements are needed as well as the entire system
                  architecture. The results from this stage are used as input
                  for the next one.
                </p>
              </div>
            </div>
            {/* <!-- single features --> */}
            <div className="single_feature">
              <div className="feature_head">
                <span className="lnr lnr-screen"></span>
                <h4>Implementation & Coding</h4>
              </div>
              <div className="feature_content">
                <p>
                  In this stage, the actual coding is done and the code is
                  produced based on the design specifications. This is the most
                  critical and also the longest stage in the SDLC.
                </p>
              </div>
            </div>
            {/* <!-- single features --> */}
            <div className="single_feature">
              <div className="feature_head">
                <span className="lnr lnr-screen"></span>
                <h4>Testing</h4>
              </div>
              <div className="feature_content">
                <p>
                  After the development of the code, it is tested to see if it
                  meets all the requirements that were determined in the first
                  stage. Various kinds of testing such as system testing, unit
                  testing, acceptance testing, and integration testing are
                  carried out.
                </p>
              </div>
            </div>
            {/* <!-- single features --> */}
            <div className="single_feature">
              <div className="feature_head">
                <span className="lnr lnr-screen"></span>
                <h4>Maintenance</h4>
              </div>
              <div className="feature_content">
                <p>
                  This is the final stage, where the finished software is
                  delivered to the customer. The real problems are identified
                  once the customer begins use. These problems are addressed
                  from time to time as they crop up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
