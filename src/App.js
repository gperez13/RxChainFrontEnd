import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './App.css';
import Hospital from './Hospital/Hospital.js';
import Patient from './Patient/Patient.js';
import Vendor from './Vendor/Vendor.js';
import Physician from './Physician/Physician.js';
import Mapp from './Map/Map.js';
import About from './About/About.js';









class App extends Component {




  render() {
    return (

      <div>
        <Router>
          <div>






        <section id="home" style={{"margin-bottom": "50px"}}>
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <h3>PRESCRIPTION BLOCKCHAIN | ONLINE RECIPE FILLER</h3><br/>
                <h1>RxChain</h1>
                <hr/>
                <Link to="/about"><p class="smoothScroll btn btn-default">What we do</p></Link>
                <Link to="/pharmamap"><p class="smoothScroll btn btn-default">Pharma Map</p></Link>
              </div>
            </div>
          </div>    
        </section>












        

          
                 <nav id="nav">
                  <container>
                    <ul style={{"list-style": "none", float: "right"}}>
                      <Link to="/hospital"><li>Hospital</li></Link>
                      <Link to="/physician"><li>Physicians</li></Link>
                      <Link to="/patient"><li>Patients</li></Link>
                      <Link to="/vendor"><li>Vendors</li></Link>
                    </ul>
                  </container>
                </nav>



             <Route path="/hospital"  component={Hospital}/>
             <Route path="/physician"  component={Physician}/>
             <Route path="/patient"  component={Patient}/>
             <Route path='/vendor'  component={Vendor}/>
             <Route path='/pharmamap'  component={Mapp}/>
             <Route path='/about'  component={About}/>

          </div>
        </Router>




        <footer/>


      </div>
    );
  }
}

export default App;
