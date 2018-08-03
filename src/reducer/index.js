import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import baseEarningReducer from './baseEarningReducer';
import accuralPlanReducer from './accuralPlanReducer';
import tipReducer from './tipReducer';


export default combineReducers({
    baseEarningReducer,
    accuralPlanReducer,  
    tipReducer,    
    form: formReducer
});