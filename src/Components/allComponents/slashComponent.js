import Header from "../Header/Header";
import Home from "../Home/Home";
import Services from "../services/services";
// import BigFeatures from "../BigFeatures/BigFeatures";
import Portfolio from "../portfolio/portfolio";
import Testimonial from "../Testimonial/Testimonial";
import ContactUs from "../contactUs/contactUs";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
function SlashComponent({ references }) {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.id === "contactUs") {
      console.log("contactUsRef.current");

      references.contactUsRef.current.scrollIntoView?.({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }

    if (state?.id === "home") {
      console.log("homeRef.current", state.id);

      references.homeRef.current.scrollIntoView?.({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    if (state?.id === "services") {
      console.log("homeRef.current", state.id);

      references.servicesRef.current.scrollIntoView?.({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    if (state?.id === "portfolio") {
      console.log("homeRef.current", state.id);

      references.portfolioRef.current.scrollIntoView?.({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    if (state?.id === "careers") {
      console.log("homeRef.current", state.id);

      references.careersRef.current.scrollIntoView?.({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [state?.id]);

  return (
    <div>
      {/* <div id="header">
        <Header navHeader={navHeader} />
      </div> */}
      <div id="home" ref={references.homeRef}>
        <Home />
      </div>
      <div id="services" ref={references.servicesRef}>
        <Services />
      </div>
      {/* <div id="bigFeatures">
        <BigFeatures  />
      </div> */}
      <div ref={references.portfolioRef} id="portfolio">
        <Portfolio />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="contactUs" ref={references.contactUsRef}>
        <ContactUs />
      </div>

      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}

export default SlashComponent;
