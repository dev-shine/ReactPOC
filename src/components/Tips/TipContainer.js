import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as accuralPlanAction from './../../action/AccuralPlanAction';
import * as baseEarningAction from './../../action/BaseEarningAction';
import * as tipsAction from './../../action/TipsAction';
import Tips from './Tips';


class TipContainer extends React.Component {
    constructor(props) {
        super(props);
        this.selectTipHandler = this.selectTipHandler.bind(this);
        this.navigateToReview = this.navigateToReview.bind(this);
        this.onTipChanged = this.onTipChanged.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    onTipChanged(changeEvent) {        
        this.props.action.updateTipFlag(changeEvent.target.value);
    }

    cancel() {
        this.props.history.push('/accuralplans');
    }


    componentDidMount() {        
        this.props.action.getAllTips();
        this.props.action.getAllPlans();
        this.props.action.getAllBaseEarnings();
    }

    navigateToReview() {
        this.props.history.push('/review');
    }

    selectTipHandler(e) {        
        var selectedNode = e.target.closest("div[nodediv='square']");
        var selectedTip = {
            id: selectedNode.attributes.recordid.value,
            name: selectedNode.attributes.value["value"],
            selected: !(/true/i).test(selectedNode.attributes.ischecked.value)
        }

        this.props.action.updateTipList(selectedTip);
        this.setState({ value: 'abc' });
        // if (e.target.attributes["shape"].value == 'circle') {
        //     selectedNode = e.target.closest("div[nodediv='square']");
        // }
        // else {
        //     selectedNode = e.target;
        // }

        // if (selectedNode.className == "unselectrectangle") {
        //     var selectedTip = {
        //         id: selectedNode.attributes.id.value,
        //         name: selectedNode.attributes.value["value"],
        //         selected: true
        //     }
        // }
        // else {
        //     var selectedTip = {
        //         id: selectedNode.attributes.id.value,
        //         name: selectedNode.attributes.value["value"],
        //         selected: false
        //     }
        // }

    }

    render() {

        return (
            <div className="data-container">
                <Tips tips={this.props.tipList} onTipChanged={this.onTipChanged} isTippedEmployee={this.props.isTippedEmployee} cancel={this.cancel} selectTipHandler={this.selectTipHandler} navigateToReviewHandler={this.navigateToReview} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {    
    return {
        tipList: state.tipReducer.tipList,
        selectedTips: state.tipReducer.selectedTips,
        isTippedEmployee: state.tipReducer.isTippedEmployee
    };
};

const mapDispatchToProps = dispatch => ({
    action: bindActionCreators({ ...tipsAction, ...baseEarningAction, ...accuralPlanAction }, dispatch)
});



TipContainer.propTypes = {
    //baseearnings : PropTypes.object
    // baseearnings: PropTypes.array,
    //baseEarningList: PropTypes.array       
};



export default connect(mapStateToProps, mapDispatchToProps)(TipContainer);
