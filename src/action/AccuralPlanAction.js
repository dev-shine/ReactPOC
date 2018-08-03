import * as ActionType from './ActionType';

var planList = 
[
{ 'id': 1, 'Name': 'Piad Time Off', 'Selected': false },
{ 'id': 2, 'Name': 'Personal', 'Selected': false },
{ 'id': 3, 'Name': 'Sick', 'Selected': false },
{ 'id': 4, 'Name': 'Vacation', 'Selected': false }
];

export const getPlansResponse = plans => ({
    type: ActionType.GET_ACCURALPLANS_ALL,
    plans
});

export const updatePlans = (plans) => ({
    type: ActionType.UPDATE_PLAN_LIST,
    plans
});

export const createPlanList = () => ({
    type: ActionType.CREATE_PLAN_LIST
});



export function getAllPlans() {    

    return (dispatch) => {
        dispatch(getPlansResponse(planList));
    };
}

export function clearAllPlans() {    
var plans = 
[
{ 'id': 1, 'Name': 'Piad Time Off', 'Selected': false },
{ 'id': 2, 'Name': 'Personal', 'Selected': false },
{ 'id': 3, 'Name': 'Sick', 'Selected': false },
{ 'id': 4, 'Name': 'Vacation', 'Selected': false }
];
    return (dispatch) => {
        dispatch(getPlansResponse(plans));
    };
}



export function updateHavePlanFlag(havePlan) {    
    var isPlan = havePlan == '0' ? false : true;
        
    return (dispatch) => {
        dispatch({
                type: ActionType.HAVE_ACCURAL_PLAN,
                isPlan
            });
    };
} 

export function updateaccuralPlanList(plan) {    
    for (var i in planList) {
        if (planList[i].id ==parseInt(plan.id)) {
            planList[i].Selected = plan.selected;
            break; 
        }
    }
    
    return (dispatch) => {
        dispatch(updatePlans(planList));
    };
}   

