import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Auth extends Component {
    render() {

        return (

            <div>
                <div className="login-content">

                    <div className="nk-block toggled" id="l-login">
                        <div className="nk-form">
                            <div className="input-group">
                                <span className="input-group-addon nk-ic-st-pro"><i className="notika-icon notika-support"></i></span>
                                <div className="nk-int-st">
                                    <input type="text" className="form-control" placeholder="Username" />
                                </div>
                            </div>
                            <div className="input-group mg-t-15">
                                <span className="input-group-addon nk-ic-st-pro"><i className="notika-icon notika-edit"></i></span>
                                <div className="nk-int-st">
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                            </div>
                            <div className="fm-checkbox">
                                <label><input type="checkbox" className="i-checks" /> <i></i> Keep me signed in</label>
                            </div>
                            <Link to="#l-register" data-ma-action="nk-login-switch" data-ma-block="#l-register" className="btn btn-login btn-success btn-float"><i className="notika-icon notika-right-arrow right-arrow-ant"></i></Link>
                        </div>

                        <div className="nk-navigation nk-lg-ic">
                            <Link to="#" data-ma-action="nk-login-switch" data-ma-block="#l-register"><i className="notika-icon notika-plus-symbol"></i> <span>Register</span></Link>
                            <Link to="#" data-ma-action="nk-login-switch" data-ma-block="#l-forget-password"><i>?</i> <span>Forgot Password</span></Link>
                        </div>
                    </div>

                    {/* register starts here */}
                    <div className="nk-block" id="l-register">
                        <div className="nk-form">
                            <div className="input-group">
                                <span className="input-group-addon nk-ic-st-pro"><i className="notika-icon notika-support"></i></span>
                                <div className="nk-int-st">
                                    <input type="text" className="form-control" placeholder="Username" />
                                </div>
                            </div>

                            <div className="input-group mg-t-15">
                                <span className="input-group-addon nk-ic-st-pro"><i className="notika-icon notika-mail"></i></span>
                                <div className="nk-int-st">
                                    <input type="text" className="form-control" placeholder="Email Address" />
                                </div>
                            </div>

                            <div className="input-group mg-t-15">
                                <span className="input-group-addon nk-ic-st-pro"><i className="notika-icon notika-edit"></i></span>
                                <div className="nk-int-st">
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                            </div>

                            <Link to="#l-login" data-ma-action="nk-login-switch" data-ma-block="#l-login" className="btn btn-login btn-success btn-float"><i className="notika-icon notika-right-arrow"></i></Link>
                        </div>

                        <div className="nk-navigation rg-ic-stl">
                            <Link to="#" data-ma-action="nk-login-switch" data-ma-block="#l-login"><i className="notika-icon notika-right-arrow"></i> <span>Sign in</span></Link>
                            <Link to="" data-ma-action="nk-login-switch" data-ma-block="#l-forget-password"><i>?</i> <span>Forgot Password</span></Link>
                        </div>
                    </div>

                    {/* forgot password */}
                    <div className="nk-block" id="l-forget-password">
                        <div className="nk-form">
                            <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu risus. Curabitur commodo lorem fringilla enim feugiat commodo sed ac lacus.</p>

                            <div className="input-group">
                                <span className="input-group-addon nk-ic-st-pro"><i className="notika-icon notika-mail"></i></span>
                                <div className="nk-int-st">
                                    <input type="text" className="form-control" placeholder="Email Address" />
                                </div>
                            </div>

                            <Link to="#l-login" data-ma-action="nk-login-switch" data-ma-block="#l-login" className="btn btn-login btn-success btn-float"><i className="notika-icon notika-right-arrow"></i></Link>
                        </div>

                        <div className="nk-navigation nk-lg-ic rg-ic-stl">
                            <Link to="" data-ma-action="nk-login-switch" data-ma-block="#l-login"><i className="notika-icon notika-right-arrow"></i> <span>Sign in</span></Link>
                            <Link to="" data-ma-action="nk-login-switch" data-ma-block="#l-register"><i className="notika-icon notika-plus-symbol"></i> <span>Register</span></Link>
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

export default Auth;
