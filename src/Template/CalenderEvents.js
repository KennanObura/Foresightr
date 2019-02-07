import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

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
