import React, { Component } from 'react';
import SuccessIcon from './../../assets/Succes_icon.png';
import Payroll_Betty from './../../assets/Payroll_Betty_icon.png';
import LeftArrow from './../../assets/keyboard-left-arrow-button.png';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Jumbotron, Progress, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import Header from './../Common/Header';


class AccuralPlans extends Component {


  constructor(props) {
    super(props);

    this.navigateToTips = this.navigateToTips.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  cancel() {
    this.props.history.push('/baseearnings');
  }

  navigateToTips() {
    this.props.history.push('/tips');
  }

  render() {

    return (
      <div className="data-container">
        <Header />
         <div className="p-2 px-3  borderBottom">
          <div className="col-md-8 font20">                        
                <div className="col-sm-12 ml-5">Earnings Setup</div>             
          </div>
        </div>
        <div className="col-md-12 jumbotronColor content-data" id="accuralplans">
          <div className="row">
            <div className="col-md-2 col-sm-2 col-xs-2">&nbsp;</div>
            <div className="col-md-8 col-sm-8 col-xs-8">
              <div className="row marginTop">
                <div className="barWidth col-sm-12 col-md-12 col-xs-12">
                  <Progress color="success" value="45" />
                </div>
              </div>
              <br />
              <br />
              <div className="row" id="">
                <div className="col-md-3 col-sm-3 col-xs-3">&nbsp;</div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <p className="headerSize">Accural Plans</p>
                </div>
                <div className="col-md-1 col-sm-1 col-xs-1">&nbsp;</div>
              </div>
              <div className="row" id="">
                <div className="col-md-3 col-sm-3 col-xs-3"></div>
                <div className="col-md-5 col-xs-5 col-sm-5">
                  Do you have accural plans?
                            </div>
                <div className="col-md-1 col-xs-1 col-sm-1"></div>
              </div>
              <br />
              <div className="row" id="">
                <div className="col-md-3 col-xs-3 col-sm-3"></div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <input type="radio" name="planned_employees" checked={this.props.haveAccuralPlan.valueOf()} value="1" onChange={this.props.handlePlanChange} /> Yes
                                              &nbsp; &nbsp;
                              <input type="radio" name="planned_employees" checked={!this.props.haveAccuralPlan.valueOf()} value="0" onChange={this.props.handlePlanChange} /> No
                            </div>
                <div className="col-md-1 col-sm-1 col-xs-1"></div>
              </div>
              <br />
              <div className="row" id="">
                <div className="col-md-3 col-sm-3 col-xs-3"></div>
                <div className="col-md-5 col-sm-5 col-xs-5">
                  Which earnings do you want to add?
                            </div>
                <div className="col-md-1 col-sm-1 col-xs-1"></div>
              </div>
              <br />

              <div className="row" id="">
                <div className="col-md-3 col-sm-3 col-xs-3"></div>
                <div className="col-md-8 col-sm-8 col-xs-8">

                  <div className="row col-md-12">

                    {
                      this.props.plans.map((record) =>
                        record["Selected"]
                          ?
                          <div className="cursorSymbol" key={record["id"]} id={record["id"]}>
                            <div className="selectrectangle " nodediv="square" shape="rectangle" ischecked="true" recordid={record["id"]} value={record["Name"]} onClick={this.props.selectPlanHandler.bind(this)}>
                              <div className="textAlign paddingTop">
                                <img shape="circle" className='marginBottom17' src={SuccessIcon} alt='Smiley face' height='40' width='40' />
                                <div className="textAlign fontWhite" nodediv="square" ischecked="true" recordid={record["id"]} value={record["Name"]}>{record["Name"]}</div>
                              </div>
                            </div>
                          </div>
                          :
                          <div className="cursorSymbol" key={record["id"]} id={record["id"]}>
                            <div className="unselectrectangle" nodediv="square" shape="rectangle" ischecked="false" recordid={record["id"]} value={record["Name"]} onClick={this.props.selectPlanHandler}>
                              <div className="textAlign paddingTop">
                                <div className="unselectcircle marginLeft38 marginBottom17" shape="circle"></div>
                                <div className="textAlign" nodediv="square" ischecked="false" recordid={record["id"]} value={record["Name"]}>{record["Name"]}</div>
                              </div>
                            </div>
                          </div>
                      )
                    }

                  </div>
                </div>
                <div className="col-md-1 col-sm-1 col-xs-1"></div>
              </div>
              <br />
              <br />
            </div>
            <div className="col-md-2 col-xs-2 col-sm-2"></div>
          </div>
        </div>

        <div className="clearfix px-5 py-3 borderTop">
          <div className="float-left col-md-8"> <div className="form-inline">
            <div className="form-group col-md-12 col-xs-12 col-sm-12">
              <img src={Payroll_Betty} alt='Smiley face' height='60' width='60' />
              <div className="col-sm-8"><b className="fontGrey">...</b><p>Accural Plans are....</p></div>
            </div>
          </div>
          </div>

          <div className="float-right px-2 py-3">
            <a href="#" onClick={this.props.cancel}>BACK</a>
            <Button className="marginLeftButton blueButton" onClick={this.props.navigateToTipsHandler}>CONTINUE</Button>
          </div>
        </div>






      </div>
    );
  }
}

export default AccuralPlans;