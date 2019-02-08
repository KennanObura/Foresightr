import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Auth from './Template/Auth';
import Home from './Template/Home';



class App extends Component {
  render() {

    return (
      <Router>
        <div>
          <Route exact path="/" component={Auth} />
          <Route path="/home" component={Home} />
        </div >
      </Router>
    );
  }
}

export default App;
