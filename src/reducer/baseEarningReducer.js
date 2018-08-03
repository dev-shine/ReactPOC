import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';

const baseEarningReducer = (state = initialState.baseEarningReducer, action) => {      
    switch(action.type) {
        case ActionType.GET_BASEEARNINGS_ALL: {                        
            return {
                ...state,
                baseEarningList: _.assign(action.earnings)
            };
        } 
          case ActionType.GET_BASEEARNINGS_SELECTED: {                          
            return {
                ...state,
                selectedEarnings: _.assign(action.selectedEarnings)
            };
         }    

          case ActionType.UPDATE_EARNING_LIST: {              
          return {
              ...state,
               baseEarningList: _.assign(action.earnings)
            //   selectedEarnings: _.assign(action.earnings)
          };                  
        }

         case ActionType.UPDATE_OTHERFLAG: {              
          return {
              ...state,
               isOtherSelected : _.assign(action.isOtherSelected)              
          };                  
        }

         case ActionType.UPDATE_SELECTED_EARNINGS: {              
          return {
              ...state,
               selectedEarnings : _.assign(action.selectedEarnings)              
          };                  
        }
        case ActionType.UPDATE_OTHER_STRING: {              
          return {
              ...state,
               otherString : _.assign(action.otherEarnings)             
          };                  
        }            

        default: { return state; }
    }
};


export default baseEarningReducer;
