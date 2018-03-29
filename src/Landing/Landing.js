import React, { Component } from 'react'
import './Landing.css';
import AnimatedWrapper from "../AnimatedWrapper";
import Footer from '../Footer/Footer.js';




class LandingComponent extends Component{




	render(){






		return(
			<div>
				<div id="landing">


					<h1>Welcome Home</h1>
					<h1>Welcome Home</h1>
					<h1>Welcome Home</h1>

				</div>
				<Footer />

			</div>

			)
	}
};


const Landing = AnimatedWrapper(LandingComponent);
export default Landing;