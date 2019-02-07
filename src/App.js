import React, { Component } from 'react';
import Navigation from './Template/Partials/Navigation';
import Mininav from './Template/Partials/Mini-nav';
import Inprogress from './Template/Partials/Inprogress';
import Dashboard from './Template/Dashboard';



class App extends Component {
  render() {

    return (
      <div>
        <Navigation />
        <Mininav />
        <Inprogress />
        <Dashboard />
      </div >
    );
  }
}

export default App;
