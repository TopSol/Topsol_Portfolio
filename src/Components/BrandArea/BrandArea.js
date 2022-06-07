import React from "react";

function BrandArea() {
  return (
    <section className="brand_area section_gap">
      
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="owl-carousel brand-carousel">
              {/* <!-- single-brand --> */}
              <div className="single-brand-item d-table">
                <div className="d-table-cell">
                  <img src={require("../../img/brands/logo1.png")} alt="" />
                </div>
              </div>
              {/* <!-- single-brand --> */}
              <div className="single-brand-item d-table">
                <div className="d-table-cell">
                  <img src={require("../../img/brands/logo2.png")} alt="" />
                </div>
              </div>
              {/* <!-- single-brand --> */}
              <div className="single-brand-item d-table">
                <div className="d-table-cell">
                  <img src={require("../../img/brands/logo3.png")} alt="" />
                </div>
              </div>
              {/* <!-- single-brand --> */}
              <div className="single-brand-item d-table">
                <div className="d-table-cell">
                  <img src={require("../../img/brands/logo4.png")} alt="" />
                </div>
              </div>
              {/* <!-- single-brand --> */}
              <div className="single-brand-item d-table">
                <div className="d-table-cell">
                  <img src={require("../../img/brands/logo5.png")} alt="" />
                </div>
              </div>
              {/* <!-- single-brand --> */}
              <div className="single-brand-item d-table">
                <div className="d-table-cell">
                  <img src={require("../../img/brands/logo6.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BrandArea;
