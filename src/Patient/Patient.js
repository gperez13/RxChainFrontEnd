import React, { Component } from 'react'
import './Patient.css';
import AnimatedWrapper from "../AnimatedWrapper";




class PatientComponent extends Component{




	render(){






		return(
			<div>
				<div id="verify">


					<h1>Hello Person, <br/> Which prescription would you like to verify?</h1>



					<button>Order</button>
					
				</div>






			</div>

			)
	}
};






const Patient = AnimatedWrapper(PatientComponent);
export default Patient;