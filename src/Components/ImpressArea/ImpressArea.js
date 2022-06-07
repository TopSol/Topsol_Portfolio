import React from "react";
import ImpressBgPng from "../../../src/img/impress-bg.png";
function ImpressArea() {
  return (
    <section
      className="impress_area"
      style={{ backgroundImage: "url(" + ImpressBgPng + ")" }}
    >
      <div className="container">
        <div className="impress_inner">
          <h2>Got Impressed to our features?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <a className="primary_btn" href="#">
            <span>Request Free Demo</span>
          </a>
        </div>
      </div>
    </section>
  );
}
export default ImpressArea;
