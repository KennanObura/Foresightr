import React, { Component } from 'react';

class Flagged extends Component {
    render() {

        return (
            <div className="data-table-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="data-table-list">
                                <div className="basic-tb-hd">
                                    <h2>Flagged Actiones</h2>
                                    
                                </div>
                                <div className="table-responsive">
                                    <table id="data-table-basic" className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Action</th>
                                                <th>Detail</th>
                                                <th>Start</th>
                                                <th>Date</th>
                                                <th>Metric</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                           
                                            <tr>
                                                <td>Angelica Ramos</td>
                                                <td>Chief Executive Officer (CEO)</td>
                                                <td>London</td>
                                                <td>47</td>
                                                <td>2009/10/09</td>
                                               
                                            </tr>
                                            <tr>
                                                <td>Gavin Joyce</td>
                                                <td>Developer</td>
                                                <td>Edinburgh</td>
                                                <td>42</td>
                                                <td>2010/12/22</td>
                                               
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Flagged;