import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {

        return (
            <div className="header-top-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="logo-area">
                                <Link to="/"><img src="img/logo/logo.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div className="header-top-menu">
                                <ul className="nav navbar-nav notika-top-nav">
                                    <li className="nav-item dropdown">
                                        <Link to="/" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-Link dropdown-toggle"><span><i className="notika-icon notika-search"></i></span></Link>
                                        <div role="menu" className="dropdown-menu search-dd animated flipInX">
                                            <div className="search-input">
                                                <i className="notika-icon notika-left-arrow"></i>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link to="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-Link dropdown-toggle"><span><i className="notika-icon notika-mail"></i></span></Link>
                                        <div role="menu" className="dropdown-menu message-dd animated zoomIn">
                                            <div className="hd-mg-tt">
                                                <h2>Messages</h2>
                                            </div>
                                            <div className="hd-message-info">
                                                <Link to="#">
                                                    <div className="hd-message-sn">
                                                        <div className="hd-message-img">
                                                            <img src="img/post/1.jpg" alt="" />
                                                        </div>
                                                        <div className="hd-mg-ctn">
                                                            <h3>David Belle</h3>
                                                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="hd-message-sn">
                                                        <div className="hd-message-img">
                                                            <img src="img/post/2.jpg" alt="" />
                                                        </div>
                                                        <div className="hd-mg-ctn">
                                                            <h3>Jonathan Morris</h3>
                                                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="hd-message-sn">
                                                        <div className="hd-message-img">
                                                            <img src="img/post/4.jpg" alt="" />
                                                        </div>
                                                        <div className="hd-mg-ctn">
                                                            <h3>Fredric Mitchell</h3>
                                                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="hd-message-sn">
                                                        <div className="hd-message-img">
                                                            <img src="img/post/1.jpg" alt="" />
                                                        </div>
                                                        <div className="hd-mg-ctn">
                                                            <h3>David Belle</h3>
                                                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="hd-message-sn">
                                                        <div className="hd-message-img">
                                                            <img src="img/post/2.jpg" alt="" />
                                                        </div>
                                                        <div className="hd-mg-ctn">
                                                            <h3>Glenn Jecobs</h3>
                                                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="hd-mg-va">
                                                <Link to="#">View All</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item nc-al"><Link to="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-Link dropdown-toggle"><span><i className="notika-icon notika-alarm"></i></span><div className="spinner4 spinner-4"></div><div className="ntd-ctn"><span>3</span></div></Link>
                                        <div role="menu" className="dropdown-menu message-dd notification-dd animated zoomIn">
                                            <div className="hd-mg-tt">
                                                <h2>Notification</h2>
                                            </div>
                                            <div className="hd-message-info">
                                                <Link to="#">
                                                    <div className="hd-message-sn">
                                                        <div className="hd-message-img">
                                                            <img src="img/post/1.jpg" alt="" />
                                                        </div>
                                                        <div className="hd-mg-ctn">
                                                            <h3>David Belle</h3>
                                                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="hd-message-sn">
                                                        <div className="hd-message-img">
                                                            <img src="img/post/2.jpg" alt="" />
                                                        </div>
                                                        <div className="hd-mg-ctn">
                                                            <h3>Jonathan Morris</h3>
                                                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="hd-message-sn">
                                                        <div className="hd-message-img">
                                                            <img src="img/post/4.jpg" alt="" />
                                                        </div>
                                                        <div className="hd-mg-ctn">
                                                            <h3>Fredric Mitchell</h3>
                                                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="hd-message-sn">
                                                        <div className="hd-message-img">
                                                            <img src="img/post/1.jpg" alt="" />
                                                        </div>
                                                        <div className="hd-mg-ctn">
                                                            <h3>David Belle</h3>
                                                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="hd-message-sn">
                                                        <div className="hd-message-img">
                                                            <img src="img/post/2.jpg" alt="" />
                                                        </div>
                                                        <div className="hd-mg-ctn">
                                                            <h3>Glenn Jecobs</h3>
                                                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="hd-mg-va">
                                                <Link to="#">View All</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item"><Link to="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-Link dropdown-toggle"><span><i className="notika-icon notika-menus"></i></span><div className="spinner4 spinner-4"></div><div className="ntd-ctn"><span>2</span></div></Link>
                                        <div role="menu" className="dropdown-menu message-dd task-dd animated zoomIn">
                                            <div className="hd-mg-tt">
                                                <h2>Tasks</h2>
                                            </div>
                                            <div className="hd-message-info hd-task-info">
                                                <div className="skill">
                                                    <div className="progress">
                                                        <div className="lead-content">
                                                            <p>HTML5 Validation Report</p>
                                                        </div>
                                                        <div className="progress-bar wow fadeInLeft" data-progress="95%" data-wow-duration="1.5s" data-wow-delay="1.2s"> <span>95%</span>
                                                        </div>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="lead-content">
                                                            <p>Google Chrome Extension</p>
                                                        </div>
                                                        <div className="progress-bar wow fadeInLeft" data-progress="85%" data-wow-duration="1.5s" data-wow-delay="1.2s"><span>85%</span> </div>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="lead-content">
                                                            <p>Social Internet Projects</p>
                                                        </div>
                                                        <div className="progress-bar wow fadeInLeft" data-progress="75%" data-wow-duration="1.5s" data-wow-delay="1.2s"><span>75%</span> </div>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="lead-content">
                                                            <p>Bootstrap Admin</p>
                                                        </div>
                                                        <div className="progress-bar wow fadeInLeft" data-progress="65%" data-wow-duration="1.5s" data-wow-delay="1.2s"><span>65%</span> </div>
                                                    </div>
                                                    <div className="progress progress-bt">
                                                        <div className="lead-content">
                                                            <p>Youtube App</p>
                                                        </div>
                                                        <div className="progress-bar wow fadeInLeft" data-progress="55%" data-wow-duration="1.5s" data-wow-delay="1.2s"><span>55%</span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hd-mg-va">
                                                <Link to="#">View All</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item"><Link to="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-Link dropdown-toggle"><span><i className="notika-icon notika-chat"></i></span></Link>
                                        <div role="menu" className="dropdown-menu message-dd chat-dd animated zoomIn">
                                            <div className="hd-mg-tt">
                                                <h2>Chat</h2>
                                            </div>
                                            <div className="search-people">
                                                <i className="notika-icon notika-left-arrow"></i>
                                                <input type="text" placeholder="Search People" />
                                            </div>
                                            <div className="hd-message-info">
                                                <Link to="#">
                                                    <div className="hd-message-sn">
                                                        <div className="hd-message-img chat-img">
                                                            <img src="img/post/1.jpg" alt="" />
                                                            <div className="chat-avaible"><i className="notika-icon notika-dot"></i></div>
                                                        </div>
                                                        <div className="hd-mg-ctn">
                                                            <h3>David Belle</h3>
                                                            <p>Available</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="hd-message-sn">
                                                        <div className="hd-message-img chat-img">
                                                            <img src="img/post/2.jpg" alt="" />
                                                        </div>
                                                        <div className="hd-mg-ctn">
                                                            <h3>Jonathan Morris</h3>
                                                            <p>Last seen 3 hours ago</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="hd-message-sn">
                                                        <div className="hd-message-img chat-img">
                                                            <img src="img/post/4.jpg" alt="" />
                                                        </div>
                                                        <div className="hd-mg-ctn">
                                                            <h3>Fredric Mitchell</h3>
                                                            <p>Last seen 2 minutes ago</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="hd-message-sn">
                                                        <div className="hd-message-img chat-img">
                                                            <img src="img/post/1.jpg" alt="" />
                                                            <div className="chat-avaible"><i className="notika-icon notika-dot"></i></div>
                                                        </div>
                                                        <div className="hd-mg-ctn">
                                                            <h3>David Belle</h3>
                                                            <p>Available</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="hd-message-sn">
                                                        <div className="hd-message-img chat-img">
                                                            <img src="img/post/2.jpg" alt="" />
                                                            <div className="chat-avaible"><i className="notika-icon notika-dot"></i></div>
                                                        </div>
                                                        <div className="hd-mg-ctn">
                                                            <h3>Glenn Jecobs</h3>
                                                            <p>Available</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="hd-mg-va">
                                                <Link to="#">View All</Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;
