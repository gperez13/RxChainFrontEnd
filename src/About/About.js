import React, { Component } from 'react'
import './About.css';
import AnimatedWrapper from "../AnimatedWrapper";
import Footer from '../Footer/Footer.js';



class AboutComponent extends Component{

	render(){



		return(
			<div>
				<div class="container">
					<div class="col-lg-12 col-offset-6 centered" id="about">


						<h1 id="about-title">About RxChain</h1>
						<br/><br/>
						<h7>RxChain is a Blockchain based Pharmaceutical 
						application aimed at bridging the gap between 
						hospital EMR systems and Pharmacy records while 
						reducing drug abuse & operation inefficiencies. 
						It uses IBM’s Hyperledger technology to eliminate 
						PHI breaches and is displayed through a React front 
						d interphase. I am currently working on deploying 
						the Hyperledger model using Docker. </h7>


						
					</div>


				</div>
				<Footer />
			</div>

			)
	}
};

const About = AnimatedWrapper(AboutComponent);
export default About;