import React from "react";
import bannerImage from "../../img/banner/home-banner.png";

function Home() {
  return (
    <section
      className="home_banner_area"
      style={{ backgroundImage: "url(" + bannerImage + ")" }}
    >
      <div className="banner_inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="banner_content">
                <h2>Solutions to all your IT Problems</h2>
                <p>
                  Our Company is a Web Development Based Company that is
                  providing services to Local and International Market.
                </p>
                <div className="d-flex align-items-center">
                  <a className="primary_btn" href="#">
                    <span>Get Started</span>
                  </a>
                  <a
                    id="play-home-video"
                    className="video-play-button"
                    href="https://www.youtube.com/watch?time_continue=2&v=J9YzcEe29d0"
                  >
                    <span></span>
                  </a>
                  <div className="watch_video text-uppercase">
                    watch the video
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="home_right_img">
                <img
                  className="img-fluid"
                  src={require("../../img/banner/home-right.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
