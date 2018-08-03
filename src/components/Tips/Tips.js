import React, { Component } from 'react';
import SuccessIcon from './../../assets/Succes_icon.png';
import Payroll_Betty from './../../assets/Payroll_Betty_icon.png';
import LeftArrow from './../../assets/keyboard-left-arrow-button.png';
import Header from './../Common/Header';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Jumbotron, Progress, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';


class Tips extends Component {

  constructor(props) {
    super(props);

    this.navigateToReview = this.navigateToReview.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  cancel() {
    this.props.history.replace('/accuralplans');
  }

  navigateToReview() {
    this.props.history.replace('/review');
  }

  render() {
    return (
      <div className="data-container" id="tipdiv">
        <Header />

      <div className="p-2 px-3  borderBottom">
          <div className="col-md-8 font20">                        
                <div className="col-sm-12 ml-5">Earnings Setup</div>        
          </div>
        </div>
        <div className="col-md-12 jumbotronColor content-data" id="Tips">
          <div className="row">

            <div className="col-md-2">&nbsp;</div>
            <div className="col-md-8">
              <div className="row marginTop">
                <div className="barWidth">
                  <Progress color="success" value="60" />
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <p className="headerSize">Tips</p>
                </div>
                <div className="col-md-1"></div>
              </div>
              <div className="row" id="">
                <div className="col-md-3"></div>
                <div className="col-md-5">
                  Do you have tipped employees?
                </div>
                <div className="col-md-1"></div>
              </div>
              <br />
              <div className="row" id="">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <input type="radio" name="tipped_employees" value="1" checked={this.props.isTippedEmployee.valueOf()} onChange={this.props.onTipChanged} /> Yes
                                   &nbsp; &nbsp;
                  <input type="radio" name="tipped_employees" value="0" checked={!this.props.isTippedEmployee.valueOf()} onChange={this.props.onTipChanged} /> No
                </div>
                <div className="col-md-1"></div>
              </div>
              <br />
              <div className="row" id="">
                <div className="col-md-3"></div>
                <div className="col-md-5">
                  Which earnings do you want to add?
                </div>
                <div className="col-md-1"></div>
              </div>
              <br />

              <div className="row" id="">
                <div className="col-md-3"></div>
                <div className="col-md-8">

                  <div className="row col-md-12">
                    {
                      this.props.tips.map((record) =>
                        record["Selected"]
                          ?
                          <div className="cursorSymbol" key={record["id"]} id={record["id"]}>
                            <div className="selectrectangle" nodediv="square" shape="rectangle" ischecked="true" recordid={record["id"]} value={record["Name"]} onClick={this.props.selectTipHandler.bind(this)}>
                              <div className="textAlign paddingTop">
                                <img shape="circle" className='marginBottom17' src={SuccessIcon} alt='Smiley face' height='40' width='40' />
                                <div className="textAlign fontWhite" nodediv="square" recordid={record["id"]} value={record["Name"]} ischecked="true">{record["Name"]}</div>
                              </div>
                            </div>
                          </div>
                          :
                          <div className="cursorSymbol" key={record["id"]} id={record["id"]}>
                            <div className="unselectrectangle" nodediv="square" shape="rectangle" ischecked="false" recordid={record["id"]} value={record["Name"]} onClick={this.props.selectTipHandler}>
                              <div className="textAlign paddingTop">
                                <div className="unselectcircle marginLeft38 marginBottom17" shape="circle"></div>
                                <div className="textAlign" ischecked="false" recordid={record["id"]} value={record["Name"]} nodediv="square">{record["Name"]}</div>
                              </div>
                            </div>
                          </div>
                      )
                    }
                  </div>
                </div>
                <div className="col-md-1"></div>
              </div>

            </div>
            <div className="col-md-2"></div>

          </div>
        </div>    


  <div className="clearfix px-5 py-3 borderTop">
          <div className="float-left col-md-8"> <div className="form-inline">
            <div className="form-group col-md-12">
              <img src={Payroll_Betty} alt='Smiley face' height='60' width='60' />
            <div className="col-sm-7"><b className="fontGrey">...</b><p>Tips are...</p></div>
            </div>
          </div>
          </div>

          <div className="float-right px-2 py-3">  
             <a href="#" onClick={this.props.cancel}>BACK</a>
                <Button className="marginLeftButton blueButton" onClick={this.props.navigateToReviewHandler}>CONTINUE</Button>
            </div>
        </div>
      </div>
    );
  }
}

export default Tips;