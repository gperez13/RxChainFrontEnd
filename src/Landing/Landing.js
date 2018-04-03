import React, { Component } from 'react'
import './Landing.css';
import AnimatedWrapper from "../AnimatedWrapper";
import Footer from '../Footer/Footer.js';




class LandingComponent extends Component{




	render(){






		return(
			<div>
				<div class="container">
				<div class="row">
					<div class="col-lg-12" id="landing">


						<h2>The Healthcare Bridge Between The Hospital and Home</h2>

						<br/><br/>
						<h7>The prescribed medication process in the United States 
						is broken. Many physicians still issue paper recipes and not all 
						prescriptions are recorded onto a Patient's files. As it stands, 
						Hospitals are able to prescribe medication without verifying whether or not
						a Patient has successfully filled their prescription at their local 
						Pharmacies. The integration of Pharmacy information systems and 
						Hospital EMR systems is also problematic as we attempt to secure 
						PHI following HIPAA regulations. Enter RxChain, a distributed ledger 
						solution for the modern pharmaceutical industry</h7>


	

					</div>


					<div class="col text-center" id="squares">
						<img id="vector" src="/doctor128.png"/>
						<h2>Wholistic Patient Care</h2>
						<h7>Physicians are able to deliver greater Value Based Care as they 
						monitor medication intake from their patients, improve preventitive care, 
						and make recommendations based on a broader information scope.</h7>

					</div>

					<div class="col text-center" id="squares">
						<img id="vector" src="/pills128.png"/>
						<h2>Medication Delivered </h2>
						<h7>Patients are able to order their medication from the comfort of 
						their own home. Hospitals and Pharmacies can rest assured that the correct
						medication is being delivered to the right patients and can streamline their 
						fulfillment process to maximize efficiency and accuracy.</h7>

					</div>

					<div class="col text-center" id="squares">
						<img id="vector" src="/chart128.png"/>
						<h2>Medical Records Secure</h2>
						<h7>Pharmacies can access specific medical data without overstepping HIPAA 
						boundries. As Pharmacy services overlap with local clinical functions, we are also
						able to enter pertinent data right onto Patient Medical Records, tracking vitals 
						and other routine check ups. </h7>

					</div>


				</div>
				</div>
				<Footer />
			</div>

			)
	}
};


const Landing = AnimatedWrapper(LandingComponent);
export default Landing;