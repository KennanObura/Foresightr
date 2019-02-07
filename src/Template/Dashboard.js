import React, { Component } from 'react';
import Todolist from './Todo';
import Newtask from './Newtaskform';
import Taskview from './Taskview';
import EventCalender from './CalenderEvents';

class Dashboard extends Component {
    render() {

        return (
            <div className="inbox-area">
                <div className="container">
                    <div className="row">
                        <Todolist />
                        <Newtask />
                        <Taskview />
                        <EventCalender/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
