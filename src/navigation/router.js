import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SlashComponent from "../Components/allComponents/slashComponent";
import Careers from "../../src/Components/careers/careers";
import CareersDetailPage from "../Components/careers/careersDetailPage";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PortfolioDetailPage from "../Components/portfolio/portfolioDetailPage";

const WrappeHeaderFooter = (Child) => {
  const homeRef = useRef();
  const servicesRef = useRef();
  const portfolioRef = useRef();
  const contactUsRef = useRef();

  const careersRef = useRef();

  const navHeader = [
    {
      headerTitle: "HOME",
      headerRef: homeRef,
      headerID: "home",
      route: "/",
    },
    {
      headerTitle: "SERVICES",
      headerRef: servicesRef,
      headerID: "services",
      route: "/",
    },
    {
      headerTitle: "PORTFOLIO",
      headerRef: portfolioRef,
      headerID: "portfolio",
      route: "/",
    },
    {
      headerTitle: "CONTACT",
      headerRef: contactUsRef,
      headerID: "contactUs",
      route: "/",
    },
   
    {
      headerTitle: "CAREERS",
      headerRef: careersRef,
      headerID: "careers",
      route: "/careers",
    },
  ];

  return (
    <>
      <Header navHeader={navHeader} />
      <div>
        <Child
          references={{
            homeRef,
            contactUsRef,
            servicesRef,
            portfolioRef,
          }}
        />
      </div>
      <Footer />
    </>
  );
};

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={WrappeHeaderFooter(SlashComponent)} />
        <Route path="/careers" element={WrappeHeaderFooter(Careers)} />
        <Route
          path="/careersDetail"
          element={WrappeHeaderFooter(CareersDetailPage)}
        />
        <Route
          path="/portfolioDetail"
          element={WrappeHeaderFooter(PortfolioDetailPage)}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
