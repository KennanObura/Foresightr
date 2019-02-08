import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../custom.css';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";


const customStyles = {
    content : {
      top                   : '60%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width : '25%'
    }
  };

  //bind modal to appelement

  Modal.setAppElement('#root')

class Newtask extends Component {


    constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      modalIsOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

    render() {

        

        const Taskview = () => {
            return (
                <div className="task-view col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="view-mail-list sm-res-mg-t-30">
                        <div className="cmp-int mg-t-20">
                            <div className="row">
                                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                                    <div className="cmp-int-lb cmp-int-lb1 text-right">

                                    </div>
                                </div>
                                <div className="col-lg-11 col-md-10 col-sm-10 col-xs-12">
                                    <div className="form-group">
                                        <div className="nk-int-st cmp-int-in cmp-email-over">
                                            <input type="text" className="form-control" placeholder="Task name" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                                    <div className="cmp-int-lb cmp-int-lb1 text-right">

                                    </div>
                                </div>
                                <div className="col-lg-11 col-md-10 col-sm-10 col-xs-12">
                                    <div className="form-group">
                                        <div className="nk-int-st cmp-int-in cmp-email-over">
                                            <DatePicker 
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                                    <div className="cmp-int-lb text-right">

                                    </div>
                                </div>
                                <div className="col-lg-11 col-md-10 col-sm-10 col-xs-12">
                                    <div className="form-group cmp-em-mg">
                                        <div className="nk-int-st cmp-int-in cmp-email-over">
                                        <DatePicker 
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cmp-int-box mg-t-20">
                            <div className="html-editor-cm">
                                <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the <b>dustrys standard dummy text</b>.</p>
                            </div>
                        </div>

                       
                    </div>
                </div>
            )
        }

        const ViewtaskActions = () => {
            return( 
            <div className="vw-ml-action-ls text-right mg-t-20">
                            <div className="btn-group ib-btn-gp active-hook nk-email-inbox">
                                <button className="btn btn-default btn-sm waves-effect"><i className="notika-icon notika-right-arrow"></i> Forward</button>
                                <button className="btn btn-default btn-sm waves-effect"><i className="notika-icon notika-trash"></i> Remove</button>
                            </div>
                        </div>
                        )
        }


        const Newtask = () => {
            return (
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="breadcomb-list">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                                <div className="breadcomb-wp">
                                    <div className="breadcomb-icon">
                                        <i className="notika-icon notika-edit"></i>
                                    </div>
                                    <div className="breadcomb-ctn">
                                        <h2>No action <span className="bread-ntd"></span></h2>
                                        <p>Tap + to add new <span className="bread-ntd"></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="popover-cl-pro">
                                    <button onClick={this.openModal} className="btn btn-primary" data-toggle="popover" >+
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            )
        }

        return (

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" >
                <Newtask />
                <Taskview />

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
                    <div className="popover-cl-pro">
                    <button onClick={this.closeModal} className="btn btn-primary"  >x
                                </button>
                                </div>
                    <Taskview/>
                    
        </Modal>
          
            </div>
        );
    }

    composePopup = () => {
        // swal("Here's a message!"); 
        alert('adding')
    }


}



export default Newtask;
