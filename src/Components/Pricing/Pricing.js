import React from "react"

function Pricing (){
    return(
        <section className="price_area section_gap">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 text-center">
					<div className="main_title">
						<p className="top_title">Features Specifications</p>
						<h2>Amazing Features That make it Awesome!</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
					</div>
				</div>
			</div>
			<div className="price_inner row justify-content-center">
				<div className="col-lg-4 col-md-6">
					<div className="price_item">
						<div className="price_head">
							<h4>Real Basic</h4>
						</div>
						<div className="price_body">
							<ul className="list">
								<li><a href="#">2.5 GB Space</a></li>
								<li><a href="#">Secure Online Transfer</a></li>
								<li><a href="#">Unlimited Styles</a></li>
								<li><a href="#">Customer Service</a></li>
							</ul>
						</div>
						<div className="price_footer">
							<h3><span className="dlr">$</span> 39</h3>
							<a className="primary_btn" href="#"><span>Get Started</span></a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="price_item">
						<div className="price_head">
							<h4>Real Standard</h4>
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
							<h3><span className="dlr">$</span> 69</h3>
							<a className="primary_btn" href="#"><span>Get Started</span></a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="price_item">
						<div className="price_head">
							<h4>Real Ultimate</h4>
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
							<h3><span className="dlr">$</span> 99</h3>
							<a className="primary_btn" href="#"><span>Get Started</span></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default Pricing