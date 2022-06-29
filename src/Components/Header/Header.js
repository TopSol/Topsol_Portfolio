import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ScrollHighlightNabbar from "../../ScrollHighlightNabbar/ScrollHighlightNabbar";

function Header({ navHeader }) {
  const [isScrolled, setScrolled] = useState(false);

  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    scrollListener();
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const scrollListener = () => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  };
  const navigateToScreen = (route, id) => {
    navigate(route, { state: { id } });
  };
  const homeRef = useRef();
  return (
    <div>
      <header className={`header_area ${isScrolled && "navbar_fixed"}`}>
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand logo_h" href="index.html">
                <img src={require("../../img/logo.png")} alt="logoImage" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <ScrollHighlightNabbar
                onNavigate={(route, id) => navigateToScreen(route, id)}
                homeRef={homeRef}
                navHeader={navHeader}
              />
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
export default Header;
