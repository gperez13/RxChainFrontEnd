import React, { Component } from 'react'
import './Patient.css';
import AnimatedWrapper from "../AnimatedWrapper";
import Footer from '../Footer/Footer.js';





class PatientComponent extends Component{




	render(){






		return(
			<div>
				<div class="container">
					<div class="row justify-content-start" id="verify">


						<div class="col-lg-3 text-left">
							<h3>Welcome back Jamie!</h3>
							<br/> 
							<h5>Which prescription would you like to verify?</h5>

						</div>




						<div class="col-lg-12">
							<div id="my-prescriptions">
								<h2 id="med-header">My Prescriptions</h2>

								<div id="meds1">
									<p>Xanex
									<button>Order</button>
									</p>
									<div>Description: 100 mg Capsules</div>
									<div>Directions: Take one orally</div>
									<div>Date: 11/20/2018</div>
								
								</div>
								
								<div id="meds2">
									<p>Prozak
									<button>Order</button>
									</p>
									<div>Description: 100 mg Capsules</div>
									<div>Directions: Take one orally</div>
									<div>Date: 11/20/2018</div>
								</div>
								
								<div id="meds3">
									<p>Loestrin
									<button>Order</button>
									</p>
									<div>Description: 100 mg pills</div>
									<div>Directions: Take one orally once a month. Placebo included</div>
									<div>Date: 11/20/2018</div>
								
								</div>

								<div id="meds1">
									<p>Nexium
									<button>Order</button>
									</p>
									<div>Description: 100 mg Capsules</div>
									<div>Directions: Take one orally</div>
									<div>Date: 11/20/2018</div>
									
								</div>
								
								<div id="meds2">
									 <p>Ventolin
									 <button>Order</button>
									 </p>
									<div>Description: Inhaler device</div>
									<div>Directions: Inhale when short of breath</div>
									<div>Date: 11/20/2018</div>
									
								</div>
								
								<div id="meds3">
									<p>Humira
									<button>Order</button>
									</p>
									<div>Description: 100 mg Tablets</div>
									<div>Directions: Take one orally</div>
									<div>Date: 11/20/2018</div>
									
								</div>
								
								<div id="meds1">
									<p>Harvoni
									<button>Order</button>
									</p>
									<div>Description: 100 mg Capsules</div>
									<div>Directions: Take one orally</div>
									<div>Date: 11/20/2018</div>
																
								</div>
								
								<div id="meds2">
									<p>Abilify
									<button>Order</button>
									</p>
									<div>Description: 500 mg Horse Pill</div>
									<div>Directions: You may need water. Good luck!</div>
									<div>Date: 11/20/2018</div>
									
								</div>
								
								<div id="meds3">
									<p>Cialis
									<button>Order</button>
									</p>
									<div>Description: 100 mg Capsules</div>
									<div>Directions: Take one orally</div>
									<div>Date: 11/20/2018</div>
									
								</div>

								<div id="meds1">
									<p>Crestor
									<button>Order</button>
									</p>
									<div>Description: 100 mg Capsules</div>
									<div>Directions: Take one orally</div>
									<div>Date: 11/20/2018</div>
										
								</div>
								
								<div id="meds2">
									<p>Lantus Solostar
									<button>Order</button>
									</p>
									<div>Description: 100 mg Capsules</div>
									<div>Directions: Take one orally</div>
									<div>Date: 11/20/2018</div>
									
								</div>
								
								<div id="meds3">
									<p>Advir Diskus
									<button>Order</button>
									</p>
									<div>Description: Circle Contraption</div>
									<div>Directions: Take one orally</div>
									<div>Date: 11/20/2018</div>
									
								</div>

								
							
							</div>

						</div>








						
						
					</div>

				<div class="row justify-content-center">
					<div class="col-lg-12" id="landing">


						<h2>Medication Delivery</h2>

						<br/><br/>
						<p>Patients Will be able to access a listing of their currently 
						prescribed medications. They will then have to option to purchase their 
						medication and have it delivered to their place or residence. Because of 
						Hyperledgers permissioned ledger, we can restrict the information given to 
						a medication shipper so that the respective pharmasists and transit team 
						members can only see the information pertinent to their roles.  
						</p>


	

					</div>
				</div>




				</div>
				<Footer/>
			</div>


			)
	}
};






const Patient = AnimatedWrapper(PatientComponent);
export default Patient;