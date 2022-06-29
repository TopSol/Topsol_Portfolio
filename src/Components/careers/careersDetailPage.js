import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../api/firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { async } from "@firebase/util";

function CareersDetailPage() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [Position, setPosition] = useState("Mern Stack Developer");
  const [file, setFile] = useState();
  const storage = getStorage();
  const storageReference = ref(storage);
  const imagesRef = ref(storageReference, "images");
  const fileName = "space.jpg";
  const spaceRef = ref(imagesRef, fileName);
  const path = spaceRef.fullPath;
  const imagesRefAgain = spaceRef.parent;
  const mountainsRef = ref(storage, "mountains.jpg");

  const onSubmitToAddData = async (e) => {
    e.preventDefault();
    try {
      console.log("file", file);
      const storageRef = ref(storage, file.name);

      const snapshot = await uploadBytes(storageRef, file);

      const docRef = await addDoc(collection(db, "jobApplications"), {
        name: Name,
        email: email,
        number: number,
        Position: Position,
        description: description,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <section style={{ paddingTop: 50 }}>
      <div className="container" 
      style={{ paddingTop: 20, marginBottom: 80,}}
      >
        <div className="row" >
          <div
            className="col-lg-6 ::-webkit-scrollbar "
            style={{
              // height: 650,
              overflow: "scroll",
          
            }}
          >
            <h1>MEAN / MERN Stack Developer</h1>
            <p>
              <a>Apply before July 31, 2022 | Total Positions : 10</a>
            </p>
            <p>
              InvoZone is a leading software development company headquartered
              in Canada with offices in Malaysia, Pakistan, and the USA. We
              offer a combination of consulting, outsourcing, and specialized
              services to a global clientele across all types of web and mobile
              app development projects. The company was launched by experienced
              and visionary IT professionals with more than 10 years of industry
              experience in the fraternity of software development.
            </p>
            <p>
              We take pride in our diversified team that consists of people from
              both local and international backgrounds working together to
              strive for excellence. If you think you have the technical skills
              to contribute to our fast-growing business, feel free to apply.
            </p>
            <p>
              We are looking for an experienced MEAN/MERN Stack Developer to be
              part of our development team.
            </p>
            <div>
              <h3>Responsibilities:</h3>
            </div>
            <div>
              <ul>
                <li>
                  Building interactive data from multiple systems and Restfully
                  abstract to the UI through a Node.js backend
                </li>
                <li>
                  Define code architecture decisions to support a
                  high-performance and scalable product with a minimal footprint
                </li>
                <li>Address and improve any technical issues</li>
                <li>
                  Hands on Experience and manage Node js, MongoDB, ReactJs and
                  Express js.
                </li>
                <li>
                  Architect, Develop, test and deploy robust products that are
                  fast, scalable and highly responsive
                </li>
                <li>
                  Design and maintain large and complex databases, both
                  relational and non-relational databases.
                </li>
                <li>
                  Establish, refine and integrate development environment tools
                  and software as needed
                </li>
                <li>
                  Identify production and non-production application issues as a
                  part of deployment
                </li>
                <li>
                  Deploy applications on servers with ability to quickly debug
                  hosting related issues.
                </li>
              </ul>
            </div>
            <div>
              <h3>Must have:</h3>
              <ul>
                <li>At least 2+ years of experience in MERN Stack</li>
                <li>Minimum Bachelor’s Degree in CS/SE/IT</li>
                <li>Ability to contribute individually</li>
                <li>Strong knowledge of JavaScript</li>
                <li>proficiency in generating clean and functional code</li>
                <li>
                  Expertise in Complete MERN (Node js, MongoDB, React js and
                  Express js)
                </li>
                <li>Ability to manage and lead a team of developers</li>
                <li>Strong analytical and problem solving skills</li>
              </ul>
            </div>
            <div>
              <h3>Skills:</h3>
              <ul>
                <li>React JS</li>
                <li>Node.js</li>form-group
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-6"
            style={{
              background: "#a16af7",
              borderRadius: 30,
              height: "100%",
              paddingBottom: 40,
            }}
          >
            <div className="container">
              <div className="row">
                <h3
                className="font1"
                  style={{ color: "white",  paddingTop: 40}}
                >
                  Submit Your Application
                </h3>
                <form>
                  <div
                    style={{
                      paddingTop: 20,
                      width: 400,
                      marginLeft: 60,
                      borderRadius: 50,
                    }}
                    className="form-group"
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div
                    style={{ paddingTop: 20, width: 400, marginLeft: 60 }}
                    className="form-group"
                  >
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div
                    style={{ paddingTop: 20, width: 400, marginLeft: 60 }}
                    className="form-group"
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Contact No."
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                  <div
                    style={{ paddingTop: 20, width: 400, marginLeft: 60 }}
                    className="form-group"
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Position applying for"
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  </div>
                  <div
                    style={{ paddingTop: 20, width: 400, marginLeft: 60 }}
                    className="form-group"
                  >
                    <textarea
                      className="form-control"
                      placeholder="Why should we hire you?"
                      onChange={(e) => setDescription(e.target.value)}
                      style={{maxHeight: 3300}}
                     
                    />
                  </div>
                  <div
                    style={{ paddingTop: 20, width: 400, marginLeft: 60 }}
                    className="form-group"
                  >
                    <input
                      type="file"
                      className="form-control-file"
                      id="exampleFormControlFile1"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      value="submit"
                      // className="primary_btn"
                      style={{
                        padding: 10,
                        width: 400,
                        marginLeft: 60,
                        border: "none",
                        borderRadius: 5,
                      }}
                      onClick={(e) => onSubmitToAddData(e)}
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareersDetailPage;
