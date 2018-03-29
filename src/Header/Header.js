import React, { Component } from 'react'
import './Header.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';



class Header extends Component{

	render(){



		return(
			<div>
				<div id="nav">

					<div class="container">
						<div class="row">



							<div class="col-2">
								<h4 class="header">RxChain</h4>

							</div>



							<div class="col-10">

			                  <Link to="/about"><p class="smoothScroll btn btn-default link">About</p></Link>
			                  <Link to="/hospital"><p class="smoothScroll btn btn-default link">Hospitals</p></Link>
			                  <Link to="/pharmamap"><p class="smoothScroll btn btn-default link">PharmaFinder</p></Link>

							</div>

						<div class="row">

							<div class="col-12">
								<h5 class="audiences">Audiences</h5>

							</div>



							<div class="col-12">

			                  <Link to="/physician"><p class="smoothScroll btn btn-default link">Physicians</p></Link>
			                  <Link to="/patient"><p class="smoothScroll btn btn-default link">Patients</p></Link>
			                  <Link to="/vendor"><p class="smoothScroll btn btn-default link">Pharma</p></Link>

							</div>
						</div>
						</div>
					</div>
				</div>
			</div>

			)
	}
}






export default Header;