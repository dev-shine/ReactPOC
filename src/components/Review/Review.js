import React, { Component } from 'react';
import SuccessIcon from './../../assets/Succes_icon.png';
import EditIcon from './../../assets/icons8-edit-50.png';
import Payroll_Betty from './../../assets/Payroll_Betty_icon.png';
import Header from './../Common/Header';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Jumbotron, Progress, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';


class Review extends Component {

  render() {

    var tips = this.props.tips != undefined ? this.props.tips.filter(function (item) { return item.Selected == true; }).sort((a, b) => a.Name > b.Name) : [];
    var plans = this.props.plans != undefined ? this.props.plans.filter(function (item) { return item.Selected == true; }).sort((a, b) => a.Name > b.Name) : [];
    // var earnings = this.props.earnings != undefined ? this.props.earnings.filter(function(item){return item.Selected == true;}) : [];

    var earnings = this.props.selectedEarnings.length != 0 ? this.props.selectedEarnings.filter(function (item) { return item.Name != 'Other' }).sort((a, b) => a.Name > b.Name) : this.props.earnings != undefined ? this.props.earnings.filter(function (item) { return (item.Selected == true && item.Name != 'Other') }).sort((a, b) => a.Name > b.Name) : [];

    // tips = tips.filter(function(item){return item.Selected == true;});  
    return (
      <div className="data-container">
        <Header />
        <div className="p-2 px-3  borderBottom">
          <div className="col-md-8 font20">
            <div class="col-sm-12 ml-5">Earnings Setup</div>
          </div>
        </div>

        <div className="jumbotronColor content-data" id="review">
          <div className="row col-md-12">
            <div className="col-md-2 col-sm-2 col-xs-2">&nbsp;</div>
            <div className="col-md-8 col-xs-8 col-sm-8">
              <div className="row marginTop">
                <div className="barWidth col-md-12 col-sm-12 col-xs-12">
                  <Progress color="success" value="75" />
                </div>
              </div>
              <br />
              <br />

              <div className="row" id="">
                
                <div className="col-md-12 col-sm-12 col-xs-12 ">
                  <p className="headerSize">Alright, here is what we have so far..</p>
                </div>
                
              </div>

              <div className="row" id="">
                
                <div className="col-md-12 col-sm-12 col-xs-12 ">
                  Take a look what we have for your earnings setup. You will have more customizable
            options within Netchex once your company is created.
          </div>
                
              </div>
              <br />
              <br />
              <div className="row" id="">
                
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <Card className="reviewListBackgroundColor borderNone">

                    <CardBody id="review">
                      <div className="row listScroll p-2">
                        <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4 col-12">
                          <ListGroup className="reviewListBackgroundColor">
                            <ListGroupItem className="reviewListBackgroundColor">
                              <b className="">Basic Earnings</b>
                              <div className="">
                                <img className='cursorSymbol ml-3' src={EditIcon} onClick={this.props.onEdit.bind(this, 'BaseEarnings')} alt='Smiley face' height='17' width='17' />                                
                              </div>

                            </ListGroupItem>
                            {
                              earnings.map((record) =>
                                <ListGroupItem key={record["id"]} className="reviewListBackgroundColor list-group-item-pad">
                                  <div className="">
                                    {record["Name"]}
                                  </div>
                                </ListGroupItem>
                              )
                            }

                          </ListGroup>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12 col-xs-12">
                          <ListGroup>
                            <ListGroupItem className="reviewListBackgroundColor">
                              <b className="">Accurals</b>
                              <div className="">
                                <img className='cursorSymbol ml-3' src={EditIcon} onClick={this.props.onEdit.bind(this, 'Accurals')} alt='Smiley face' height='17' width='17' />
                              </div>
                            </ListGroupItem>

                            {
                              plans.map((record) =>
                                <ListGroupItem key={record["id"]} className="reviewListBackgroundColor list-group-item-pad">
                                  <div className="">
                                    {record["Name"]}
                                  </div>
                                </ListGroupItem>

                              )
                            }
                          </ListGroup>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12 col-xs-12">
                          <ListGroup>
                            <ListGroupItem className="reviewListBackgroundColor">
                              <b className="">Tips</b>
                              <div className="">
                                <img className='cursorSymbol ml-3' src={EditIcon} onClick={this.props.onEdit.bind(this, 'Tips')} alt='Smiley face' height='17' width='17' />
                              </div>
                            </ListGroupItem>
                            {
                              tips.map((record) =>
                                <ListGroupItem key={record["id"]} className="reviewListBackgroundColor list-group-item-pad">
                                  <div className="">
                                    {record["Name"]}
                                  </div>
                                </ListGroupItem>
                              )
                            }

                          </ListGroup>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
                
              </div>
              <br />
              <br />
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2"></div>
          </div>
        </div>



        <div className="clearfix px-5 py-3 borderTop">
          <div className="float-left col-md-8">
            <div className="form-inline">
              <div className="form-group col-md-12">
                <img src={Payroll_Betty} alt='Smiley face' height='60' width='60' />
                <div className="col-sm-8"><b className="fontGrey">...</b>
                  <p>Based on this information we will be able to...</p></div>
              </div>
            </div>
          </div>

          <div className="float-right px-2 py-3"> 
             <a href="#" onClick={this.props.cancel}>BACK</a>
            <Button color="success" className="marginLeftButton cursorSymbol greenButton" onClick={this.props.navigateToSuccess}>LOOKS GOOD</Button></div>
        </div>

      </div>
    );
  }
}

export default Review;