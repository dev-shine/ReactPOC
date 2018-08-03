import React, { Component } from 'react';
import { FormGroup, Col, Panel, Radio } from 'react-bootstrap';
import { Jumbotron, Button } from 'reactstrap';
import LocationLogo from './../../assets/Locations_icon.png';
import Earnings from './../../assets/Earnings_icon.png';
import Uploads_icon from './../../assets/Uploads_icon.png';
import PaySchedules from './../../assets/Pay_Schedules_icon.png';
import PhoneIcon from './../../assets/phone_icon.png';
import PayrollBetty from './../../assets/Payroll_Betty_icon.png';
import HelpfulTips from './../../assets/Helpful_tips_icon.png';
import Header from './Header';



class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.navigateToEarningSetup = this.navigateToEarningSetup.bind(this);

    }

    navigateToEarningSetup() {
        this.props.history.replace('/earningsetup');
    }


    render() {
        return (
            <div className="fullCol data-container">
                <Header />
                <div className="row fullCol marginTop content">
                    <div className="col-md-1 col-sm-1 col-xs-1">&nbsp;</div>
                    <div className="col-md-8 col-sm-8 col-xs-8">
                        <div className="row"><div id="DashboardHeader" className="col-md-12 col-sm-12 col-xs-12">Up,Up, and Away!</div></div>
                        <br />
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div>This setup is designed to help you blast off to a great start and fast-track</div>
                                <div>your deployment in 4 simple steps. Choose and item to begin.</div>
                            </div>
                        </div>
                        <br />

                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <h4 className="h4ColorGreen cursorSymbol" onClick={this.navigateToEarningSetup}>Basic Setup</h4>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="textAlign"><img className='' src={LocationLogo} alt='Smiley face' height='120' width='120' /></div>
                                <div className="textAlign fontColor">Locations</div>
                                <div className="textAlign">0/2</div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">

                                <div className="textAlign"><img className='' src={PaySchedules} alt='Smiley face' height='120' width='120' /></div>
                                <div className="textAlign fontColor">Pay Schedules</div>
                                <div className="textAlign">0/2</div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="textAlign"><img className='' src={Earnings} alt='Smiley face' height='120' width='120' /></div>
                                <div className="textAlign fontColor">Earnings</div>
                                <div className="textAlign">0/1</div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="textAlign"><img className='' src={Uploads_icon} alt='Smiley face' height='120' width='120' /></div>
                                <div className="textAlign fontColor">Uploads</div>
                                <div className="textAlign">0/4</div>
                            </div>
                        </div>

                        <br />
                        <br />
                        <div className="row">
                            <div className="col-md-8 col-xs-8 col-sm-8 push-md-2 textAlign">
                                <div className="">
                                    <img className='' src={PhoneIcon} alt='Smiley face' height='20' width='20' />
                                </div>
                                <div className="">Once you complete the basic setup, you will</div>
                                <div className="">have the opportunity to schedule your kick off call.</div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 colorWhite">
                        <div className="textAlign marginTop30">
                            <img className='' src={HelpfulTips} alt='Smiley face' height='60' width='60' />
                        </div>

                        <div className="rightPadding">
                            <div className="textAlign font20"> Helpful Tips</div>
                            <div className="row">
                                <img className='' src={PayrollBetty} alt='Smiley face' height='60' width='60' />
                            </div>

                            <div className="row">
                                ...
                                <p>Hello, we are happy to be here to help guide you through the setup process  and offer tips througout the process to save time.</p>
                                <p>Remember to have these items ready to reference:</p>
                                <ul className="listItem">
                                    <li>Form #1</li>
                                    <li>Form #2</li>
                                    <li>Form #3</li>
                                </ul>
                                <p>Great to have you aboard and lets get started!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Dashboard;