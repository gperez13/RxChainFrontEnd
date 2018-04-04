import React, { Component } from 'react';
import './Physician.css';
import AnimatedWrapper from "../AnimatedWrapper";
import Prescribed from '../Prescribed/Prescribed.js';
import Footer from '../Footer/Footer.js';


class PhysicianComponent extends Component{
	constructor(){
    super()

    this.state = {
      recipe: {
          $class: "org.rxchain."

          },
          patients: []

    }
  }



  // componentDidMount(){
  //     fetch('http://localhost:3000/api/Patient')
  //     .then(response => response.json())
  //     .then(data => {
  //       const state = this.state;
  //       state.patients = data;
  //       this.setState(state)
  //     })
   

  //   }

    //API call to the Hyperledger

	render(){

		const data = this.state.patients.map((data, i)=>{
			return <div key={i}>
						<li> {data.PMI} </li>
					</div>
		})


		console.log(this.state, "this is the state")


		return(

			<div>

				<div id="prescribe">

					<h1>Prescribe</h1>

					<form>
						Name: <input type="text" style={{"height": "27px"}}/><br/>
						PIN: <input type="text" style={{"height": "27px"}}/><br/>
						NPI: <input type="text" style={{"height": "27px"}}/><br/>
						Dosage: <input type="text" style={{"height": "27px"}}/><br/>
						Drug: <input type="text" style={{"height": "27px"}}/><br/>
						Dosage: <input type="text" style={{"height": "27px"}}/><br/>
						Notes: <textarea rows="2" cols="25">
						Take 1 tablet 2 times a day. AM-PM
						</textarea><br/>

						<a href="" rel="noopener noreferrer" target="_blank"><small>Read Terms and Conditions </small></a><input id="checkBox" type="checkbox"/><br/>
						<button>Submit</button>

					</form>


					




				</div>

				<Prescribed />

<ul >{data}</ul>



				<div class="container">
					<div class="row justify-content-start" id="verify">


						<div class="col-lg-3 text-left">
							<p>Walgreens Store 998439</p>
							<p>Pharmasist: Jessica Brockman</p>

						</div>




						<div class="col-lg-12">
							<div id="prescribe">
								<h2 id="order-header">Patient Orders</h2>

								

								
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


						<h2>Pharmacy CMR and Hospitasl Integration</h2>

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




const Physician = AnimatedWrapper(PhysicianComponent);
export default Physician;