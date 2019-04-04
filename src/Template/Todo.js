import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Todolist extends Component {
    render() {

        return (

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="inbox-text-list sm-res-mg-t-30">
                    <div className="form-group">
                        <div className="nk-int-st search-input search-overt">
                            <input type="text" className="form-control" placeholder="Search task..." />
                            <button className="btn search-ib">Search</button>
                        </div>
                    </div>
                    <div className="inbox-btn-st-ls btn-toolbar">
                        <div className="btn-group ib-btn-gp active-hook nk-email-inbox">
                            <button className="btn btn-default btn-sm"><i className="notika-icon notika-refresh"></i> Refresh</button>
                            <button className="btn btn-default btn-sm"><i className="notika-icon notika-next"></i></button>
                            <button className="btn btn-default btn-sm"><i className="notika-icon notika-trash"></i></button>
                            <button className="btn btn-default btn-sm"><i className="notika-icon notika-checked"></i></button>

                        </div>
                        <div className="btn-group ib-btn-gp active-hook nk-act nk-email-inbox">
                            <button className="btn btn-default btn-sm"><i className="notika-icon notika-left-arrow"></i></button>
                            <button className="btn btn-default btn-sm"><i className="notika-icon notika-right-arrow"></i></button>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover table-inbox">
                            <tbody>
                                <tr className="unread">
                                    <td className="">
                                        <label><input type="checkbox"  className="i-checks"  /></label>
                                    </td>
                                    <td><Link to="#">Jeremy Massey</Link></td>

                                    <td className="text-right mail-date">Tue, Nov 25</td>
                                </tr>


                                <tr>
                                    <td className="">
                                        <label><input type="checkbox"  className="i-checks" /></label>
                                    </td>
                                    <td><Link to="#">Ivor Rios</Link> <span className="label label-info">Social</span>
                                    </td>
                                    <td className="text-right mail-date">Sat, Dec 12</td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <label><input type="checkbox" className="i-checks" /></label>
                                    </td>
                                    <td><Link to="#">Maxwell Murphy</Link></td>
                                    <td className="text-right mail-date">Sun, May 17</td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <label><input type="checkbox" className="i-checks" /></label>
                                    </td>
                                    <td><Link to="#">Henry Patterson</Link></td>
                                    <td className="text-right mail-date">Thu, Aug 06</td>
                                </tr>

                            </tbody>
                        </table>
                        <div className="pagination-inbox">
                            <ul className="wizard-nav-ac">
                                <li><Link className="btn" to="#"><i className="notika-icon notika-back"></i></Link></li>
                                <li className="active"><Link className="btn" to="#">1</Link></li>
                                <li><Link className="btn" to="#">2</Link></li>
                                <li><Link className="btn" to="#">3</Link></li>
                                <li><Link className="btn" to="#"><i className="notika-icon notika-next-pro"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Todolist;
