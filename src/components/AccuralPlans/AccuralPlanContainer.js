import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as accuralPlanAction from './../../action/AccuralPlanAction';
import * as baseEarningAction from './../../action/BaseEarningAction';
import AccuralPlans from './AccuralPlans';


class AccuralPlanContainer extends React.Component {
    constructor(props) {
        super(props);
        this.selectPlanHandler = this.selectPlanHandler.bind(this);
        this.handlePlanChange = this.handlePlanChange.bind(this);
        this.navigateToTips = this.navigateToTips.bind(this);
        this.cancel = this.cancel.bind(this);
    }


    handlePlanChange(changeEvent) {
        this.props.action.updateHavePlanFlag(changeEvent.target.value);
    }



    cancel() {        
        this.props.history.push('/baseearnings');
    }


    componentDidMount() {        
        this.props.action.getAllPlans();
        this.props.action.getAllBaseEarnings();
    }

    navigateToTips() {        
        this.props.history.push('/tips');
    }

    selectPlanHandler(e) {        
        var selectedNode = e.target.closest("div[nodediv='square']");
        var selectedPlan = {
            id: selectedNode.attributes.recordid.value,
            name: selectedNode.attributes.value["value"],
            selected: !(/true/i).test(selectedNode.attributes.ischecked.value)
        }

        this.props.action.updateaccuralPlanList(selectedPlan);
        this.setState({ value: 'abc' });

        // if (e.target.attributes["shape"].value == 'circle') {
        //     selectedNode = e.target.closest("div[nodediv='square']");
        // }
        // else {
        //     selectedNode = e.target;
        // }


        // if (selectedNode.className == "unselectrectangle") {
        //     var selectedPlan = {
        //         id: selectedNode.attributes.id.value,
        //         name: selectedNode.attributes.value["value"],
        //         selected: true
        //     }
        // }
        // else {
        //     var selectedPlan = {  
        //         id: selectedNode.attributes.id.value,
        //         name: selectedNode.attributes.value["value"],
        //         selected: false
        //     }
        // }
    }

    render() {

        return (
            
                <AccuralPlans plans={this.props.accuralPlansList} haveAccuralPlan={this.props.haveAccuralPlan} handlePlanChange={this.handlePlanChange} cancel={this.cancel} selectPlanHandler={this.selectPlanHandler} navigateToTipsHandler={this.navigateToTips} />
            
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        accuralPlansList: state.accuralPlanReducer.accuralPlanList,
        selectedPlans: state.accuralPlanReducer.selectedPlans,
        haveAccuralPlan: state.accuralPlanReducer.haveAccuralPlan
    };
};

const mapDispatchToProps = dispatch => ({
    action: bindActionCreators({ ...baseEarningAction, ...accuralPlanAction }, dispatch)
});



AccuralPlanContainer.propTypes = {
    //baseearnings : PropTypes.object
    // baseearnings: PropTypes.array,
    //baseEarningList: PropTypes.array       
};



export default connect(mapStateToProps, mapDispatchToProps)(AccuralPlanContainer);
