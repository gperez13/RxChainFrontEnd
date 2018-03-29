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

			                  <Link to="/Abount"><p class="smoothScroll btn btn-default link">Home</p></Link>
			                  <Link to="/Hospitals"><p class="smoothScroll btn btn-default link">Sign In</p></Link>

							</div>
						</div>
					</div>
				</div>
			</div>

			)
	}
}






export default Header;