import React, { Component } from 'react';
import SuccessIcon from './../../assets/Succes_icon.png';
import { Jumbotron, Progress, Button } from 'reactstrap';
import Header from './../Common/Header';

class SuccessPage extends Component {

  constructor(props) {
    super(props);

    this.navigateToDashboard = this.navigateToDashboard.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  cancel() {
    this.props.history.replace('/review');
  }

  navigateToDashboard() {
    // this.props.history.replace('/dashboard');
  }

  render() {
    return (
      <div className="data-container">
        <Header />
         <div className="p-2 px-3  borderBottom">
          <div className="col-md-8 font20">                        
                <div class="col-sm-12 ml-5">Earnings Setup</div>             
          </div>
        </div>
        <div className="row jumbotronColor content-data" id="Success">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="row marginTop">
              <div className="barWidth col-md-12 col-xs-12 col-sm-12">
                <Progress color="success" value="100" />
              </div>
            </div>
            <br />
            <br />
            <div className="row" id="">              
              <div className="col-md-12 textAlign">
                <p className="headerSize">Earning Setup Complete!</p>
              </div>              
            </div>
            <div className="row" id="">
              <div className="col-md-12  col-xs-12 col-sm-12 textAlign">
                <img className='textAlign' src={SuccessIcon} alt='Smiley face' height='200' width='200' />
              </div>
            </div>

            <br />
            <br />

            <div className="row" id="">
              <div className="col-md-12 textAlign">
                Up Next : Deductions
            </div>
            </div>
        <br/>
            <div className="row" id="">
              
              <div className="col-md-12 textAlign">
                If employees live in a different state then the  company locations, tell us the state.
              </div>              
            </div>            
            <br />
            <br />
          </div>
          <div className="col-md-2"></div>

        </div>

        <div className="row paddingFooter borderTop">        
          <div className="col-md-12 textAlign">
            <a href="#" onClick={this.cancel}>BACK</a>
            <Button color="info" className="marginLeftButton blueButton" onClick={this.navigateToDashboard}>CONTINUE</Button>
          </div>          
        </div>
      </div>
    );
  }
}

export default SuccessPage;