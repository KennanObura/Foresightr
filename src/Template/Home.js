import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Partials/Navigation';
import Mininav from './Partials/Mini-nav';
import Inprogress from './Partials/Inprogress';
import Dashboard from './Dashboard';
import Achieved from './Achieved';
import Flagged from './Flagged';



class App extends Component {
  render() {

    // const allTasks = [
    //   {
    //       name: "Dummy to do task",
    //       start: "10:10",
    //       end : "11:10",
    //       date: "2019/04/21",
    //       status: 2,
    //   },
    //   {
    //     name: "Dummy to do task2",
    //       start: "10:10",
    //       end : "11:10",
    //       date: "2019/04/21",
    //       status: 1
    //   },
    //   {
    //     name: "Dummy to do task3",
    //       start: "10:10",
    //       end : "11:10",
    //       date: "2019/04/21",
    //       status: 3
    //   }
    // ]

    return (
      <Router>
        <div>
          <Navigation />
          <Mininav />
          <Inprogress />
          <Route exact path="/home/" component={Dashboard} />
          <Route path="/home/achieved" component={Achieved} />
          <Route path="/home/flagged" component={Flagged} />
        </div >
      </Router>
    );
  }
}

export default App;
