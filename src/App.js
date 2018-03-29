import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import TransitionGroup from "react-transition-group/TransitionGroup";
import './App.css';
import Header from './Header/Header.js';
import Hospital from './Hospital/Hospital.js';
import Patient from './Patient/Patient.js';
import Vendor from './Vendor/Vendor.js';
import Physician from './Physician/Physician.js';
import Mapp from './Map/Map.js';
import About from './About/About.js';









class App extends Component {




  render() {


  const firstChild = props => {

    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;

  };



    return (

      <div>
        <Router>
          <div>


            <Header/>






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





        <Route

            exact
            path="/about"
            children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
                {match && <About {...rest} />}
            </TransitionGroup>
        )}/>

        <Route

            exact
            path="/hospital"
            children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
                {match && <Hospital {...rest} />}
            </TransitionGroup>
        )}/> 


        <Route

            exact
            path="/patient"
            children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
                {match && <Patient {...rest} />}
            </TransitionGroup>
        )}/>        

        <Route

            exact
            path="/physician"
            children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
                {match && <Physician {...rest} />}
            </TransitionGroup>
        )}/>

        <Route

            exact
            path="/vendor"
            children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
                {match && <Vendor {...rest} />}
            </TransitionGroup>
        )}/>

        <Route

            exact
            path="/pharmamap"
            children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
                {match && <Mapp {...rest} />}
            </TransitionGroup>
        )}/> 

          </div>
        </Router>




        <footer/>


      </div>
    );
  }
}

export default App;
