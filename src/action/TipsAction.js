import * as ActionType from './ActionType';

var tipList = 
[
    { 'id': 1, 'Name': 'Tip Shortfall', 'Selected': false },
    { 'id': 2, 'Name': 'Makeup', 'Selected': false },
    { 'id': 3, 'Name': 'Personal', 'Selected': false },
    { 'id': 4, 'Name': 'Holiday', 'Selected': false }
];

export const getTipsResponse = tips => ({
    type: ActionType.GET_TIPS_ALL,
    tips
});

export const updateTips = (tips) => ({
    type: ActionType.UPDATE_TIP_LIST,
    tips
});

export const createTipList = () => ({
    type: ActionType.CREATE_TIP_LIST
});

export function getAllTips() {    

    return (dispatch) => {
        dispatch(getTipsResponse(tipList));
    };
}

export function clearAllTips() {    
    var tips = 
[
    { 'id': 1, 'Name': 'Tip Shortfall', 'Selected': false },
    { 'id': 2, 'Name': 'Makeup', 'Selected': false },
    { 'id': 3, 'Name': 'Personal', 'Selected': false },
    { 'id': 4, 'Name': 'Holiday', 'Selected': false }
];

    return (dispatch) => {
        dispatch(getTipsResponse(tips));
    };
}


export function updateTipFlag(isTip) {    
    var isTipped = isTip == '0' ? false : true;
        
    return (dispatch) => {
        dispatch({
                type: ActionType.IS_TIPPED_EMPLOYEE,
                isTipped
            });
    };
} 

export function updateTipList(tip) {    
    for (var i in tipList) {
        if (tipList[i].id ==parseInt(tip.id)) {
            tipList[i].Selected = tip.selected;
            break; 
        }
    }

    return (dispatch) => {
        dispatch(updateTips(tipList));
    };
}   

