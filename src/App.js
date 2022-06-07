import "./App.css";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Features from "./Components/Features/Features";
import Updates from "./Components/Updates/Updates";
import BigFeatures from "./Components/BigFeatures/BigFeatures";
import Pricing from "./Components/Pricing/Pricing";
import Testimonial from "./Components/Testimonial/Testimonial";
import BrandArea from "./Components/BrandArea/BrandArea";
import ImpressArea from "./Components/ImpressArea/ImpressArea";
import Footer from "./Components/Footer/Footer";
// import Router from "./navigation/router";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <Features />
      <Updates />
      <BigFeatures />
      <Pricing />
      <Testimonial />
      <BrandArea />
      <ImpressArea />
      <Footer />
      {/* <Router /> */}
    </div>
  );
}

export default App;
