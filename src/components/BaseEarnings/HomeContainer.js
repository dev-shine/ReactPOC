import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseEarningAction from './../../action/BaseEarningAction';
import BaseEarnings from './BaseEarnings';


class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.selectEarningHandler = this.selectEarningHandler.bind(this);
        this.navigateToAccural = this.navigateToAccural.bind(this);
        this.onChange = this.onChange.bind(this);
        this.cancel = this.cancel.bind(this);
    }


    onChange(e) {        
        var otherearnings = e.target.value.split(',');
        if (otherearnings.length != 0) {
            this.props.action.updateEarningListwithOther(otherearnings);
        }
    }

    cancel() {
        this.props.history.push('/earningsetup');
    }


    componentDidMount() {
        this.props.action.getAllBaseEarnings();
    }

    navigateToAccural() {
        this.props.history.push('/accuralplans');
    }

    selectEarningHandler(e) {         
        var selectedNode = e.target.closest("div[nodediv='square']");
        var selectedEarning = {
            id: selectedNode.attributes.recordid.value,
            name: selectedNode.attributes.value["value"],
            selected:!(/true/i).test(selectedNode.attributes.ischecked.value)
        }

        if (selectedNode.attributes.value["value"] == "Other") {
            this.props.action.updateOtherFlag(!(/true/i).test(selectedNode.attributes.ischecked.value));
        }

        this.props.action.updateEarningList(selectedEarning);
        this.setState({ value: 'abc' });

        // if (e.target.attributes["shape"].value == 'circle') {
        //     selectedNode = e.target.closest("div[nodediv='square']");   
        // }
        // else {
        //     selectedNode = e.target;
        // }

        // if (selectedNode.className == "unselectrectangle") {
        //     var selectedEarning = {
        //         id: selectedNode.attributes.recordid.value,
        //         name: selectedNode.attributes.value["value"],
        //         selected: true
        //     }

        //     if (selectedNode.attributes.value["value"] == "Other") {
        //         this.props.action.updateOtherFlag(true);
        //     }
        // }
        // else {
        //     var selectedEarning = {
        //         id: selectedNode.attributes.recordid.value,
        //         name: selectedNode.attributes.value["value"],
        //         selected: false
        //     }

        //     if (selectedNode.attributes.value["value"] == "Other") {
        //         this.props.action.updateOtherFlag(false);
        //     }
        // }
    }

    render() {
        return (            
                <BaseEarnings onChange={this.onChange} otherString={this.props.otherString} isOtherSelected={this.props.isOtherSelected} earnings={this.props.baseEarningList} cancel={this.cancel} selectEarningHandler={this.selectEarningHandler} navigateToAccuralHandler={this.navigateToAccural} />            
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isOtherSelected: state.baseEarningReducer.isOtherSelected,
        baseEarningList: state.baseEarningReducer.baseEarningList,
        selectedEarnings: state.baseEarningReducer.selectedEarnings,
        otherString: state.baseEarningReducer.otherString
    };
};

const mapDispatchToProps = dispatch => ({
    action: bindActionCreators(baseEarningAction, dispatch)
});



HomeContainer.propTypes = {
};



export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
