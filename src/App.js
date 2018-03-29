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
import Landing from './Landing/Landing.js';
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





        <Route

            exact
            path="/"
            children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
                {match && <Landing {...rest} />}
            </TransitionGroup>
        )}/>

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



      </div>
    );
  }
}

export default App;
