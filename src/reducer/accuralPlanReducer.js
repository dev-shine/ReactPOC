import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';

const accuralPlanReducer = (state = initialState.accuralPlanReducer, action) => {    
    switch (action.type) {
        case ActionType.GET_ACCURALPLANS_ALL: {
            return {
                ...state,
                accuralPlanList: _.assign(action.plans)
            };
        }
        case ActionType.GET_ACCURALPLANS_SELECTED: {            
            return {
                ...state,
                selectedPlans: _.assign(action.selectedPlans)
            };
        }

        case ActionType.UPDATE_PLAN_LIST: {
            return {
                ...state,
                accuralPlanList: _.assign(action.plans)
            };
        }

        case ActionType.HAVE_ACCURAL_PLAN: {
            return {
                ...state,
                haveAccuralPlan: _.assign(action.isPlan)
            };
        }

        default: { return state; }
    }
};


export default accuralPlanReducer;
