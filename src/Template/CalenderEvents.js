import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';

import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

//for test
import Events from './Dummies/Events';

class CalenderEvents extends Component {
    render() {
        const localizer = BigCalendar.momentLocalizer(moment)

        const MyCalendar = () => {
            return (
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="breadcomb-list">
                        <div className="row">
                            <BigCalendar
                                localizer={localizer}
                                events={Events}
                                startAccessor="start"
                                endAccessor="end"
                                step={60}
                                views={['day','week','month']}
                                defaultView='week'
                                
                            />
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <MyCalendar />
        );
    }
}

export default CalenderEvents;
