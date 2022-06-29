import React, { useState } from "react";
import ImpressBgPng from "../../../src/img/impress-bg.png";
import { db } from "../../../src/api/firebase";
import { collection, addDoc } from "firebase/firestore";
function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitToAddData = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        name: name,
        email: email,
        subject: subject,
        message: message,
      });

      console.log("Document written with ID: ", name);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <section
      id="contactUs"
      className="impress_area"
      style={{ backgroundImage: "url(" + ImpressBgPng + ")" }}
    >
      <div className="container" style={{ paddingTop: 100 }}>
        <div className="row">
          <div className="col-lg-3">
            <div className="contact_info">
              <div className="info_item">
                <i className="lnr lnr-home"></i>
                <h6 style={{ color: "white" }}>
                  ChenOne Road D Ground Faisalabad
                </h6>
                {/* <p style={{ color: "white" }}>Santa monica bullevard</p> */}
              </div>
              <div className="info_item">
                <i className="lnr lnr-phone-handset"></i>
                <h6 style={{ color: "white" }}>
                  <a href="#">03065001921</a>
                </h6>
                <p style={{ color: "white" }}>Mon to Fri 9am to 6 pm</p>
              </div>
              <div className="info_item">
                <i className="lnr lnr-envelope"></i>
                <h6 style={{ color: "white" }}>
                  <a href="#">ahmadhussain.dev@gmail.com</a>
                </h6>
                <p style={{ color: "white" }}>Send us your query anytime!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <form className="row contact_form">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    style={{ borderRadius: 7 }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                    style={{ borderRadius: 7 }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setSubject(e.target.value)}
                    id="subject"
                    name="subject"
                    placeholder="Enter Subject"
                    style={{ borderRadius: 7 }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    id="message"
                    rows="1"
                    placeholder="Enter Message"
                    style={{ borderRadius: 7 }}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12 text-right">
                <button
                  type="submit"
                  value="submit"
                  className="primary_btn"
                  style={{ bachground: "red" }}
                  onClick={(e) => onSubmitToAddData(e)}
                >
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactUs;
