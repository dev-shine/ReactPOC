import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as accuralPlanAction from './../../action/AccuralPlanAction';
import * as baseEarningAction from './../../action/BaseEarningAction';
import * as tipsAction from './../../action/TipsAction';
import Review from './Review';


class ReviewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.navigateToSuccess = this.navigateToSuccess.bind(this);
        this.cancel = this.cancel.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }


    cancel() {
        this.props.history.push('/tips');
    }

    onEdit(element,value) {        

        switch (element) {
            case 'BaseEarnings':
                return this.props.history.replace('/baseearnings');
            case 'Accurals':
                return this.props.history.replace('/accuralplans');
            case 'Tips':
                return this.props.history.replace('/tips');
            default :
                 return this.props.history.replace('/dashboard');
        }

    }


    componentDidMount() {    
        this.props.action.getAllTips();
        this.props.action.getAllPlans();
        this.props.action.getAllBaseEarnings();        
    }

    navigateToSuccess() {
        this.props.history.push('/success');
    }



    render() {

        return (
            
                <Review tips={this.props.tipList} onEdit={this.onEdit} plans={this.props.planList} selectedEarnings={this.props.selectedEarnings} earnings={this.props.baseEarningList} cancel={this.cancel} navigateToSuccess={this.navigateToSuccess} />            
        );
    }
}

const mapStateToProps = (state, ownProps) => {    
    return {
        tipList: state.tipReducer.tipList,
        planList: state.accuralPlanReducer.accuralPlanList,
        baseEarningList: state.baseEarningReducer.baseEarningList,
        selectedEarnings: state.baseEarningReducer.selectedEarnings,
    };
};

const mapDispatchToProps = dispatch => ({
    action: bindActionCreators({ ...tipsAction, ...baseEarningAction, ...accuralPlanAction }, dispatch)
});



ReviewContainer.propTypes = {       
};



export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);
