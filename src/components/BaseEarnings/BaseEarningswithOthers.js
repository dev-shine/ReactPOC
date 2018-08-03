import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import SuccessIcon from './../../assets/Succes_icon.png';
import Payroll_Betty from './../../assets/Payroll_Betty_icon.png';


class BaseEarnings extends Component {


  render() {
    return (
      <div>
        <div className="row appBackgroundColor" id="BaseEarning">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <Jumbotron className="">
              <div className="">
                <div className="row">
                  <div className="barWidth">
                    <Progress color="success" value="25" />
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-8">
                    <div className="row"> <h1>Choose Base earnings</h1></div>
                    <div className="row">Select from the list of the earnings below ones you would like to add to your company.</div>
                    <div className="row">
                      <div className="col-md-2">
                        <div>Berevement</div>
                        <div className="selectrectangle">
                          <img className='floatRight' src={SuccessIcon} alt='Smiley face' height='40' width='40' />
                        </div>
                      </div>

                      <div className="col-md-2">
                        <div>Bonus</div>
                        <div className="selectrectangle">
                          <img className='floatRight' src={SuccessIcon} alt='Smiley face' height='40' width='40' />
                        </div>

                      </div>

                      <div className="col-md-2">
                        <div>Commision</div>
                        <div className="selectrectangle">
                          <img className='floatRight' src={SuccessIcon} alt='Smiley face' height='40' width='40' />
                        </div>

                      </div>
                      <div className="col-md-2">
                        <div>Holiday</div>
                        <div className="selectrectangle">
                          <img className='floatRight' src={SuccessIcon} alt='Smiley face' height='40' width='40' />
                        </div>

                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <div>Jury Duty</div>
                        <div className="unselectrectangle">
                          <div className="row"><div className="unselectcircle"></div></div>
                        </div>

                      </div>
                      <div className="col-md-2">
                        <div>Overtime</div>
                        <div className="unselectrectangle">
                          <div className="row"><div className="unselectcircle"></div></div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div>Regular</div>
                        <div className="unselectrectangle">
                          <div className="row"><div className="unselectcircle"></div></div>
                        </div>

                      </div>
                      <div className="col-md-2">
                        <div>Other</div>
                        <div className="unselectrectangle">
                          <div className="row"><div className="unselectcircle"></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1">
                      
                  </div>
                </div>


                <br />
                <br />
                <br />
                <div className="row">
                </div>
              </div>  
              <div className="col-md-4">
              </div>

              <div className="row">
                <div class="col-md-1"><img className='' src={Payroll_Betty} alt='Smiley face' height='60' width='60'/></div>
                <div class="col-md-7">                                                   
                 <div className="">Holiday,Overtime and Regular Earnings will be added to your company by default.</div>                                                                     
                </div>
                <div class="col-md-4 floatRight">                  
                  <a href="">Back</a>                                    
                  <Button color="info" className="marginLeftButton">Continue</Button>                  
                </div>
              </div>

            </Jumbotron>
          </div>
          <div className="col-md-2"></div>



        </div>
      </div>
    );
  }
}

export default BaseEarnings;