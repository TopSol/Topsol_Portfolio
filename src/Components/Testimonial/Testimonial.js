import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Updates from "../services/services";

function Testimonial() {
  const [stateValue, setStateValue] = useState(0);

  const updateCarousel = (val) => {
    setStateValue(val);
  };

  return (
    // <div className="section_gap_top testimonial_area">
      <div className="container" style={{paddingTop: 80}}>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="main_title">
              {/* <p className="top_title">User Feedback</p> */}
              <h2>What Our Clients Say About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="active_testimonial owl-carousel" data-slider-id="1">
              {/* <!-- single testimonial --> */}

              <div className="owl-dots">
                <div className="owl-dot" onClick={() => updateCarousel(1)}>
                  <span></span>
                </div>
                <div
                  className={`owl-dot ${stateValue === 2 && "active"}`}
                  onClick={() => updateCarousel(2)}
                >
                  <span></span>
                </div>
                <div className="owl-dot" onClick={() => updateCarousel(3)}>
                  <span></span>
                </div>
                <div className="owl-dot" onClick={() => updateCarousel(4)}>
                  <span></span>
                </div>
              </div>
              <Carousel autoPlay={true} selectedItem={stateValue}>
                <div className="single_testimonial">
                  <div className="testimonial_head">
                    <img src={require("../../img/quote.png")} alt="" style={{width: "20%"}}/>
                    <h4>Fanny Spencer</h4>
                    <div className="review">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                  <div className="testimonial_content">
                    <p>
                      As conscious traveling Paup ers we must always be oncerned
                      about our dear Mother Earth. If you think about it, you
                      travel across her faceand She is the host to your journey.
                    </p>
                  </div>
                </div>
                <div></div>
                <div className="single_testimonial">
                  <div className="testimonial_head">
                    <img src={require("../../img/quote.png")} alt="" style={{width: "20%"}}/>

                    <h4>Fanny Spencer</h4>
                    <div className="review">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                  <div className="testimonial_content">
                    <p>
                      As conscious traveling Paup ers we must always be oncerned
                      about our dear Mother Earth. If you think about it, you
                      travel across her faceand She is the host to your journey.
                    </p>
                  </div>
                </div>
                <div className="single_testimonial">
                  <div className="testimonial_head">
                    <img src={require("../../img/quote.png")} alt="" style={{width: "20%"}} />

                    <h4>Fanny Spencer</h4>
                    <div className="review">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                  <div className="testimonial_content">
                    <p>
                      As conscious traveling Paup ers we must always be oncerned
                      about our dear Mother Earth. If you think about it, you
                      travel across her faceand She is the host to your journey.
                    </p>
                  </div>
                </div>
                <div className="single_testimonial">
                  <div className="testimonial_head">
                    <img src={require("../../img/quote.png")} alt="" style={{width: "20%"}}/>

                    <h4>Fanny Spencer</h4>
                    <div className="review">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                  <div className="testimonial_content">
                    <p>
                      As conscious traveling Paup ers we must always be oncerned
                      about our dear Mother Earth. If you think about it, you
                      travel across her faceand She is the host to your journey.
                    </p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Testimonial;
