import React from "react";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { BsArrowRightShort } from "@react-icons/all-files/bs/BsArrowRightShort";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";


function Footer() {
  return (
    <footer className="footer_area" >
      <div className="container">
        <div className="row footer_inner">
          <div className="col-lg-5 col-sm-6">
            <aside className="f_widget ab_widget">
              <div className="f_title">
                <h3 style={{color: "white"}}> About Me</h3>
              </div>
              <p style={{color: "white"}}>
             Address: ChenOne Road D Ground Faisalabad
              </p>
              <p style={{color: "white"}}>
                Email: ahmadhussain.dev@gmail.com
              </p>
              <p style={{color: "white"}}>
                Contact No. 03065001921
              </p>
              {/* <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              {/* Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib --- Downloaded from <a href="https://themeslab.org/" target="_blank">Themeslab</a></a> */}
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p> */}
            </aside>
          </div>
          <div className="col-lg-5 col-sm-6">
            <aside className="f_widget news_widget">
              <div className="f_title">
                {/* <h3>Newsletter</h3> */}
              </div>
              {/* <p>Stay updated with our latest trends</p> */}
              <div id="mc_embed_signup">
                <form
                  target="_blank"
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                  className="subscribe_form relative"
                >
                  <div className="input-group d-flex flex-row">
                    {/* <input name="EMAIL" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address '" */}
                    {/* required="" type="email"> */}
                    {/* <button className="btn sub-btn">
                      <span className="lnr lnr-arrow-right">
                        <BsArrowRightShort size={25} />
                      </span>
                    </button> */}
                  </div>
                  <div className="mt-10 info"></div>
                </form>
              </div>
            </aside>
          </div>
          <div className="col-lg-2">
            <aside className="f_widget social_widget">
              <div className="f_title">
                <h3 style={{color: "white"}}>Follow Me</h3>
              </div>
              <p style={{color: "white"}}>Let us be social</p>
              <ul className="list">
                <li>
                  <a href="#">
                    {/* <i className="fa fa-facebook"> */}
                    <FaFacebookF
                      size={25}
                      style={{
                        background: "#a16af7",
                        padding: 5,
                        borderRadius: 10,
                      }}
                    />
                    {/* </i> */}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {/* <i className="fa fa-twitter"> */}
                    <FaTwitter
                      size={25}
                      style={{
                        background: "#a16af7",
                        padding: 5,
                        borderRadius: 10,
                      }}
                    />
                    {/* </i> */}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {/* <i className="fa fa-facebook"> */}
                    <FaLinkedin
                      size={25}
                      style={{
                        background: "#a16af7",
                        padding: 5,
                        borderRadius: 10,
                      }}
                    />
                    {/* </i> */}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {/* <i className="fa fa-facebook"> */}
                    <FaGithubAlt
                      size={25}
                      style={{
                        background: "#a16af7",
                        padding: 5,
                        borderRadius: 10,
                      }}
                    />
                    {/* </i> */}
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
