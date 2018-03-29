import React, { Component } from 'react';
import AnimatedWrapper from "../AnimatedWrapper";
import './Hospital.css';
import Footer from '../Footer/Footer.js';


class HospitalComponent extends Component{
	constructor(){
    super()

    this.state = {
      recipe: {


          },
          patients: [],
          new: {
          	$class: "org.rxchain.Patient",
          	PMI: '',
          	accountBalance: '',
    		address: {
		        $class: "org.rxchain.Address",
		        city: "Chicago",
		        country: "United States",
		        street: "444 N Wabash",
		        zip: "60613",
		        id: "something"
   					 }
          }

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
				<div id="hospital">

					<h1>New Patient</h1>

					<form>
						Name: <input type="text" style={{"height": "27px"}}/><br/>
						PIN: <input type="text" style={{"height": "27px"}}/><br/>
						Account Balance: <input type="text" style={{"height": "27px"}}/><br/>
						City: <input type="text" style={{"height": "27px"}}/><br/>						
						Country: <input type="text" style={{"height": "27px"}}/><br/>
						Street: <input type="text" style={{"height": "27px"}}/><br/>
						ZipCode: <input type="text" style={{"height": "27px"}}/><br/>
						Street: <input type="text" style={{"height": "27px"}}/><br/>
		

						<a href="" rel="noopener noreferrer" target="_blank"><small>Read Terms and Conditions </small></a><input id="checkBox" type="checkbox"/><br/>
						<button>Submit</button>

					</form>





				</div>



<ul >{data}</ul>


	
				<Footer/>
			</div>

			)
	}
}





const Hospital = AnimatedWrapper(HospitalComponent);
export default Hospital;