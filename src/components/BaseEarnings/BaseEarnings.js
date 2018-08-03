import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import SuccessIcon from './../../assets/Succes_icon.png';
import Payroll_Betty from './../../assets/Payroll_Betty_icon.png';
import Header from './../Common/Header';


class BaseEarnings extends Component {
  render() {
    return (
      <div className="data-container">
        <Header />
          <div className="p-2 px-3  boxShadow borderBottom">
          <div className="col-md-8 font20">                        
                <div className="col-sm-12 ml-5">Earnings Setup</div>
          </div>
        </div>  

        <div className="col-md-12 jumbotronColor content-data" id="BaseEarning">
          <div className="row">
            <div className="col-md-2 col-sm-2 col-xs-2">&nbsp;</div>
            <div className="col-md-8 col-sm-8 col-xs-8">
              <div className="row marginTop">
                <div className="barWidth col-md-12 col-sm-12 col-xs-12">
                  <Progress color="success" value="25" />
                </div>
              </div>
              <br />
              <br />

              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-6 push-md-3">
                  <div className="col-md-12 col-xs-12 col-sm-12"> <p className="headerSize">Choose Base earnings</p></div>
                  <div className="col-md-12 col-xs-12 col-sm-12">Select from the list of the earnings below ones you would like to add to your company.</div>
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-2 col-xs-1 row">
                  {
                    this.props.earnings.map((record) =>
                      record["Selected"]
                        ?
                        <div className="cursorSymbol" key={record["id"]} id={record["id"]}>
                          <div className="selectrectangle" shape="rectangle" nodediv="square" ischecked="true" recordid={record["id"]} value={record["Name"]} onClick={this.props.selectEarningHandler.bind(this)}>
                            <div className="textAlign paddingTop">
                              <img className='marginBottom17' shape="circle" src={SuccessIcon} alt='Smiley face' height='40' width='40' />
                              <div className="textAlign fontWhite" nodediv="square" ischecked="true" recordid={record["id"]} value={record["Name"]}>{record["Name"]}</div>
                            </div>
                          </div>
                        </div>
                        :
                        <div className="cursorSymbol" key={record["id"]} id={record["id"]}>
                          <div className="unselectrectangle" shape="rectangle" nodediv="square" ischecked="false" recordid={record["id"]} value={record["Name"]} onClick={this.props.selectEarningHandler}>
                            <div className="textAlign paddingTop">
                              <div className="unselectcircle marginLeft38 marginBottom17" shape="circle"></div>
                              <div className="textAlign" nodediv="square" recordid={record["id"]} ischecked="false" value={record["Name"]}>{record["Name"]}</div>
                            </div>
                          </div>
                        </div>
                    )
                  }
                </div>
                {
                  this.props.isOtherSelected.valueOf() &&
                  <div className="col-lg-6 col-md-4 col-sm-4 col-xs-4 leftBorder">
                    <div className="row">
                      <div className="col-md-1 col-xs-1 col-sm-1">&nbsp;</div>
                      <div className="col-md-11 col-sm-11 col-xs-11">
                        <div id="DashboardHeader">Other</div>
                      </div>
                    </div>


                    <div className="row">
                      <div className="col-md-1 col-sm-1 col-xs-1">&nbsp;</div>
                      <div className="col-md-11 col-sm-11 col-xs-11">
                        <p>List the earnings you would like to add. We will reach out
                                            for further information on these earnings if needed.</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-1 col-sm-1 col-xs-1"></div>
                      <div className="col-md-11  col-sm-11 col-xs-11">
                        <textarea placeholder="Add these additional earnings..." value={this.props.otherString != undefined ? this.props.otherString : ''} onChange={this.props.onChange} className="form-control" rows="10" cols="50"></textarea>
                      </div>
                    </div>
                  </div>
                }

              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">&nbsp;</div>
          </div>
        </div>    
        <div className="clearfix px-5 py-3 borderTop">
          <div className="float-left"> 
            <div className="form-inline">
             <div className="form-group">
                <img className='' src={Payroll_Betty} alt='Smiley face' height='60' width='60' />
                <div className="col-sm-8"><b className="fontGrey">...</b>
                  <p>Holiday,Overtime and Regular Earnings will be added to your company by default.</p></div>
              </div>
          </div>
          </div>

          <div className="float-right px-2 py-3"> 
              <a href="#" onClick={this.props.cancel}>BACK</a>
                <Button color="info" className="marginLeftButton blueButton" onClick={this.props.navigateToAccuralHandler}>CONTINUE</Button>
            </div>
        </div>
      </div>
    );
  }
}

export default BaseEarnings;