import React, { Component } from 'react';
import './Vendor.css';
import AnimatedWrapper from "../AnimatedWrapper";
import Footer from '../Footer/Footer.js';





class VendorComponent extends Component{

	render(){



		return(

			<div>
				<div class="container">
					<div class="row justify-content-start" id="verify">


						<div class="col-lg-3 text-left">
							<p>Walgreens Store 998439</p>
							<p>Pharmasist: Jessica Brockman</p>

						</div>




						<div class="col-lg-12">
							<div id="fill">
								<h2 id="order-header">Patient Orders</h2>

								<div id="order">
									<p>Perez, Giovanni
									<button>Submit</button>
									</p>
									<div>Address: 437 N. Lake Shore Dr. Chicago, Illinois 60614</div>
									<div>Req Number: 397398739</div>
								
								<hr/>
								</div>

								<div id="order">
									<p>Smith, Juan
									<button>Submit</button>
									</p>
									<div>Address: 496 W. Jackson St. Chicago, Illinois 60614</div>
									<div>Req Number: 98323657</div>
								
								<hr/>
								</div>
								<div id="order">
									<p>Kubaczyk, Mark
									<button>Submit</button>
									</p>
									<div>Address: 11 E Wacker Chicago, Illinois 60614</div>
									<div>Req Number: 903777</div>
								
								<hr/>
								</div>

								<div id="order">
									<p>Manderino, Maria
									<button>Submit</button>
									</p>
									<div>Address: 64 N Lake St. Chicago, Illinois 60614</div>
									<div>Req Number: 456627</div>
								
								<hr/>
								</div>

								<div id="order">
									<p>Barton, Olivia
									<button>Submit</button>
									</p>
									<div>Address: 33 E Van Buren St. Chicago, Illinois 60614</div>
									<div>Req Number: 836543</div>
								
								<hr/>
								</div>

								<div id="order">
									<p>Smith, Sarah
									<button>Submit</button>
									</p>
									<div>Address: 549 N Orleans St. Chicago, Illinois 60614</div>
									<div>Req Number: 748290</div>
								
								<hr/>
								</div>

								<div id="order">
									<p>Casper, Paul
									<button>Submit</button>
									</p>
									<div>Address: 440 W Ontatio St. Chicago, Illinois 60614</div>
									<div>Req Number: 3865248</div>
								
								<hr/>
								</div>

								<div id="order">
									<p>Wu, Amy
									<button>Submit</button>
									</p>
									<div>Address: 200 W Adams St. Chicago, Illinois 60614</div>
									<div>Req Number: 112864</div>
								
								<hr/>
								</div>
										


								
							
							</div>

						</div>
												
					</div>

				<div class="row justify-content-center">
					<div class="col-lg-12" id="landing">


						<h2>Pharmacy CMR and Hospital Integration</h2>

						<br/><br/>
						<p>Pharmacies can integrate the end point of RxChain to formulate an EMR system. This 
						feature can push out recipe shipment and send back prescription deliver information back 
						to Hospital EMR systems. Additionally, other vital information can also be sent 
						for providers to better analyze a patient's medical history and improve value-based care. 
						</p>
					</div>
				</div>

				</div>
				<Footer/>
			</div>

			)
	}
};






const Vendor = AnimatedWrapper(VendorComponent);
export default Vendor;