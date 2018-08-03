import React, { Component } from 'react';
import { Router, Route, Switch,Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';  
import Shell from './../Common/Shell';
import Dashboard from './../Common/Dashboard';
import EarningSetup from './../EarningSetup/EarningSetup';
import HomeContainer from './../BaseEarnings/HomeContainer';
import AccuralPlanContainer from './../AccuralPlans/AccuralPlanContainer';
import TipContainer from './../Tips/TipContainer';
import BaseEarningswithOthers from './../BaseEarnings/BaseEarningswithOthers';
import ReviewContainer from './../Review/ReviewContainer';
import Success from './../Success/Success';
import './App.css';
import { FormGroup, Col, Panel, Radio } from 'react-bootstrap';


const history = createBrowserHistory();

class App extends Component {
  render() {
    return (     
            <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
                <div className="data-container" id="AppNode">
                <Shell/>
                    <Switch>                      
                        <Route path="/dashboard" component={Dashboard} />                      
                         <Route path="/earningsetup" component={EarningSetup} />
                         <Route path="/baseearnings" component={HomeContainer} />
                         <Route path="/baseearningsothers" component={BaseEarningswithOthers} />
                         <Route path="/accuralplans" component={AccuralPlanContainer} />
                         <Route path="/tips" component={TipContainer} />
                         <Route path="/review" component={ReviewContainer} />
                         <Route path="/success" component={Success} />
                    </Switch>
                </div>
            </Router>        
    );
  }
}

export default App;
