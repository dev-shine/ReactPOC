import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';

const tipReducer = (state = initialState.tipReducer, action) => {  
     
    switch(action.type) {
        case ActionType.GET_TIPS_ALL: {                        
            return {
                ...state,
                tipList: _.assign(action.tips)
            };
        } 
          case ActionType.GET_TIPS_SELECTED: { 
                           
            return {
                ...state,
                selectedTips: _.assign(action.selectedTips)
            };
         }    

          case ActionType.UPDATE_TIP_LIST: {
                
          return {
              ...state,
               tipList: _.assign(action.tips)              
          };
        }

          case ActionType.IS_TIPPED_EMPLOYEE: {
                
          return {
              ...state,
               isTippedEmployee: _.assign(action.isTipped)              
          };
        }

        

        default: { return state; }
    }
};


export default tipReducer;
