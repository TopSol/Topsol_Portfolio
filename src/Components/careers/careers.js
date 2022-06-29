import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import careersBg from "../../../src/img/careersbg.webp";
import { useLocation } from "react-router-dom";


export default function Careers() {

	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	  }, [pathname]);
	
    return (
        <section
            id="careers"
            className="impress_area"
            style={{ backgroundImage: "url(" + careersBg + ")" , }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                <h1 style={{color: "white", fontSize: 50}}>
                    Careers at TopSol
                </h1>
                <p style={{color: "white", fontSize: 20}}>
                    Are you passionate about building your career with opportunities to learn and lead?
                </p>
                <p style={{color: "white", fontSize: 15}}>
                    Join us at TopSol a software development company based in Pakistan, with regional offices in Faisalabad.
                </p>
                </div>
                </div>
            </div>

            <div className="container">
            
            <div className="price_inner row justify-content-center" style={{paddingTop: 150}}>
			<div className="col-lg-4 col-md-6">
					<div className="price_item">
						<div className="price_head">
							<h4>Web development</h4>
						</div>
						<div className="price_body">
							<ul className="list">
								<li><a href="#">10 GB Space</a></li>
								<li><a href="#">Secure Online Transfer</a></li>
								<li><a href="#">Unlimited Styles</a></li>
								<li><a href="#">Customer Service</a></li>
							</ul>
						</div>
						<div className="price_footer">
							{/* <h3><span className="dlr">$</span> 69</h3> */}
							<Link className="primary_btn" to="/careersDetail"><span>Learn More</span></Link>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="price_item">
						<div className="price_head">
							<h4>App development</h4>
						</div>
						<div className="price_body">
							<ul className="list">
								<li><a href="#">10 GB Space</a></li>
								<li><a href="#">Secure Online Transfer</a></li>
								<li><a href="#">Unlimited Styles</a></li>
								<li><a href="#">Customer Service</a></li>
							</ul>
						</div>
						<div className="price_footer">
							{/* <h3><span className="dlr">$</span> 69</h3> */}
							<Link className="primary_btn" to="/careersDetail"><span>Learn More</span></Link>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="price_item">
						<div className="price_head">
							<h4>BlockChain</h4>
						</div>
						<div className="price_body">
							<ul className="list">
								<li><a href="#">Unlimited Space</a></li>
								<li><a href="#">Secure Online Transfer</a></li>
								<li><a href="#">Unlimited Styles</a></li>
								<li><a href="#">Customer Service</a></li>
							</ul>
						</div>
						<div className="price_footer">
							{/* <h3><span className="dlr">$</span> 99</h3> */}
							<Link className="primary_btn" to="/careersDetail"><span>Learn More</span></Link>

						</div>
					</div>
				</div>
			</div>
            </div>



        </section>
    )
	}
 
