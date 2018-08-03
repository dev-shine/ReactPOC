import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as accuralPlanAction from './../../action/AccuralPlanAction';
import * as baseEarningAction from './../../action/BaseEarningAction';
import * as tipsAction from './../../action/TipsAction';
import Success from './Success';


class SuccessContainer extends React.Component {
    constructor(props) {
        super(props);
        this.navigateToDashboard = this.navigateToDashboard.bind(this);
        this.cancel = this.cancel.bind(this);        
    }


    cancel() {
        this.props.history.push('/review');
    }



    componentDidMount() {
    
        //this.props.action.clearAllTips();
        //this.props.action.clearAllPlans();
        //this.props.action.clearAllBaseEarnings();
    }

    navigateToDashboard() {        
        this.props.history.push('/dashboard');
    }



    render() {

        return (
            <div>
                <Success cancel={this.cancel} navigateToDashboard={this.navigateToDashboard} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {    
    return {
        // tipList: state.tipReducer.tipList,
        // planList: state.accuralPlanReducer.accuralPlanList,
        // baseEarningList: state.baseEarningReducer.baseEarningList,
    };
};

const mapDispatchToProps = dispatch => ({
    action: bindActionCreators({ ...tipsAction, ...baseEarningAction, ...accuralPlanAction }, dispatch)
});



SuccessContainer.propTypes = {       
};



export default connect(mapStateToProps, mapDispatchToProps)(SuccessContainer);
