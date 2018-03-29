import React, { Component } from 'react'
import './Prescribed.css';
import AnimatedWrapper from "../AnimatedWrapper";
import Footer from '../Footer/Footer.js';




class PrescribedComponent extends Component{




	render(){






		return(
			<div>
				<div id="scripts">


					<h1>This is a list of prescribed scripts</h1>

				</div>
				<Footer />

			</div>

			)
	}
};


const Prescribed = AnimatedWrapper(PrescribedComponent);
export default Prescribed;