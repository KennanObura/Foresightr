import React, { Component } from 'react';

class Mininav extends Component {
    render() {

        return (

            <div className="main-menu-area mg-tb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <ul className="nav nav-tabs notika-menu-wrap menu-it-icon-pro">
                                <li><a data-toggle="tab" href="#Home"><i className="notika-icon notika-house"></i> Home</a>
                                </li>
                                <li className="active"><a data-toggle="tab" href="#mailbox"><i className="notika-icon notika-mail"></i> Email</a>
                                </li>
                                <li><a data-toggle="tab" href="#Tables"><i className="notika-icon notika-windows"></i> Tables</a>
                                </li>
                                <li><a data-toggle="tab" href="#Forms"><i className="notika-icon notika-form"></i> Forms</a>
                                </li>
                              
                            </ul>
                            <div className="tab-content custom-menu-content">
                                <div id="Home" className="tab-pane in notika-tab-menu-bg animated flipInX">
                                    <ul className="notika-main-menu-dropdown">
                                        <li><a href="index.html">Dashboard One</a>
                                        </li>
                                        <li><a href="index-2.html">Dashboard Two</a>
                                        </li>
                                    </ul>
                                </div>
                                <div id="mailbox" className="tab-pane active notika-tab-menu-bg animated flipInX">
                                    <ul className="notika-main-menu-dropdown">
                                        <li><a href="inbox.html">Inbox</a>
                                        </li>
                                        <li><a href="view-email.html">View Email</a>
                                        </li>
                                        <li><a href="compose-email.html">Compose Email</a>
                                        </li>
                                    </ul>
                                </div>
                                <div id="Tables" className="tab-pane notika-tab-menu-bg animated flipInX">
                                    <ul className="notika-main-menu-dropdown">
                                        <li><a href="normal-table.html">Normal Table</a>
                                        </li>
                                        <li><a href="data-table.html">Data Table</a>
                                        </li>
                                    </ul>
                                </div>
                                <div id="Forms" className="tab-pane notika-tab-menu-bg animated flipInX">
                                    <ul className="notika-main-menu-dropdown">
                                        <li><a href="form-elements.html">Form Elements</a>
                                        </li>
                                        <li><a href="form-components.html">Form Components</a>
                                        </li>
                                        <li><a href="form-examples.html">Form Examples</a>
                                        </li>
                                    </ul>
                                </div>
                               </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Mininav;
