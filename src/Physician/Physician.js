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



<ul >{data}</ul>
Page not finished yet, click on something else please! :)

				<Prescribed />



				<div class="container">
					<div class="row justify-content-start" id="verify">


						<div class="col-lg-12">
							<div id="prescribe">
								<h2 id="script-header">Prescribe</h2>



									<form id="script-form">
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

						</div>
												
					</div>

				<div class="row justify-content-center">
					<div class="col-lg-12" id="landing">


						<h2>Ditch the pad, deliver better care</h2>

						<br/><br/>
						<p>Electronic scripts 
						</p>
					</div>
				</div>

				</div>
				<Prescribed />
				<Footer/>
			</div>

			)
	}
};




const Physician = AnimatedWrapper(PhysicianComponent);
export default Physician;