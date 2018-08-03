import React, { Component } from 'react';
import { FormGroup, Col, Panel, Radio } from 'react-bootstrap';
// import { Jumbotron, Button } from 'reactstrap';
import Earnings from './../../assets/Earnings_icon.png';
import RightArraow from './../../assets/cta_green_arrow.png';
import { Label } from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Jumbotron } from 'reactstrap';
import PayrollBetty from './../../assets/Payroll_Betty_icon.png';
import HelpfulTips from './../../assets/Helpful_tips_icon.png';
import Header from './../Common/Header';

class EarningSetup extends Component {
  constructor() {
    super();
    this.AddBaseEarningsHandler = this.AddBaseEarningsHandler.bind(this);
    this.navigateToDashboard = this.navigateToDashboard.bind(this);
  }

  AddBaseEarningsHandler() {
    this.props.history.push('/baseearnings');
  }

  navigateToDashboard() {
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div className="data-container">
        <Header />
        
              <div className="row">
                <div className="marginTop13">
                  <div className="form-inline">
                    <div className="form-group">
                      <div className=""></div>
                      <div className="col-sm-12 push-sm-10">
                        <div className="setUpFontColor cursorSymbol" onClick={this.navigateToDashboard}> <i className=" setUpFontColor arrow left"></i> Dashboard</div>
                        </div>
                    </div>
                  </div>           
                  </div>
                </div>
              <div className="row marginTop15 content">
                <div className="col-md-8 col-sm-8 col-xs-8 paddingMidDiv push-md-1">            
                  <div className="row">
                    <img className='' src={Earnings} alt='Smiley face' height='100' width='100' />
                    <div className="">
                      <p className="headerFont">Earning Setup</p>
                      <p className="marginLeft">Below are the essential items needed to get you running your first payroll.</p>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className="row">
                    <Card className="cardwidth">
                      <CardBody>
                        <CardTitle className="font25"> 1. Earnings Setup
                              <img className='floatRight cursorSymbol mt-2' src={RightArraow} onClick={this.AddBaseEarningsHandler} alt='Smiley face' height='45' width='45' />
                        </CardTitle>

                        <CardText className="ml-4">Lets get a base set of earnings used for your company.</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </div>

                <div className="col-md-3 col-sm-3 col-xs-3 colorWhite push-md-1">
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
                    <p>Our main goal is to find out if you have more than one physical location to make sure we  setup taxes correctly if the locations are in more than one state.</p>
                    </div>

                  </div>
                </div>

              </div>
        
      </div>

    );
  }
}

export default EarningSetup;