import * as ActionType from './ActionType';

var selectedEarnings = [];

var earningList =
    [{ 'id': 8, 'Name': 'Bereavement', 'Selected': false },
    { 'id': 1, 'Name': 'Bonus', 'Selected': false },
    { 'id': 2, 'Name': 'Commision', 'Selected': false },
    { 'id': 3, 'Name': 'Holiday', 'Selected': false },
    { 'id': 4, 'Name': 'Jury Duty', 'Selected': false },
    { 'id': 5, 'Name': 'Overtime', 'Selected': false },
    { 'id': 6, 'Name': 'Regular', 'Selected': false },
    { 'id': 7, 'Name': 'Other', 'Selected': false }];

export const getEarningsResponse = earnings => ({
    type: ActionType.GET_BASEEARNINGS_ALL,
    earnings
});

export const getSelectedEarningsResponse = selectedEarnings => ({
    type: ActionType.GET_BASEEARNINGS_SELECTED,
    selectedEarnings
});





export const updateEarnings = (earnings) => ({
    type: ActionType.UPDATE_EARNING_LIST,
    earnings
});


export const updateOtherFlag = (isOtherSelected) => ({
    type: ActionType.UPDATE_OTHERFLAG,
    isOtherSelected
});

export const createEarningList = () => ({
    type: ActionType.CREATE_EARNING_LIST
});

export const updateSelectedEarnings = (selectedEarnings) => ({
    type: ActionType.UPDATE_SELECTED_EARNINGS,
    selectedEarnings
})



export function clearAllBaseEarnings() {

    var earnings =
        [{ 'id': 8, 'Name': 'Bereavement', 'Selected': false },
        { 'id': 1, 'Name': 'Bonus', 'Selected': false },
        { 'id': 2, 'Name': 'Commision', 'Selected': false },
        { 'id': 3, 'Name': 'Holiday', 'Selected': false },
        { 'id': 4, 'Name': 'Jury Duty', 'Selected': false },
        { 'id': 5, 'Name': 'Overtime', 'Selected': false },
        { 'id': 6, 'Name': 'Regular', 'Selected': false },
        { 'id': 7, 'Name': 'Other', 'Selected': false }];

    return (dispatch) => {
        dispatch(getEarningsResponse(earnings));
    };
}

export function getAllBaseEarnings() {


    return (dispatch) => {
        dispatch(getEarningsResponse(earningList));
    };
}

export function getSelectedBaseEarnings() {


    return (dispatch) => {
        dispatch(getSelectedEarningsResponse(selectedEarnings));
    };
}


function search(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}


export function updateEarningList(earning) {    
    for (var i in earningList) {
        if (earningList[i].id == parseInt(earning.id)) {

            if (earning.selected) {
                selectedEarnings.push(
                    {
                        // 'id': selectedEarnings.length + 1,
                        'id': earning.id,
                        'Name': earning.name,
                        'Selected': true
                    }
                );
            }
            else {
                var ear = {
                    'id': earning.id,
                    'Name': earning.name,
                    'Selected': true
                }

                //var resultObject = search("string 1", array);
                const index = selectedEarnings.findIndex(x => x.Name == ear.Name);
                // const index = selectedEarnings.indexOf(ear);
                selectedEarnings.splice(index, 1);
            }

            earningList[i].Selected = earning.selected;
            break;
        }
    }

    return (dispatch) => {
        dispatch(updateEarnings(earningList));
        dispatch(updateSelectedEarnings(selectedEarnings));
    };
}


export function updateEarningListwithOther(otherEarnings) {    
    if (otherEarnings.length != 0) {
        selectedEarnings = earningList.filter(function (i) {
            return i.Name != "Other" && i.Selected == true
        });

        var earningLength = earningList.length;
        for (var index = 0; index < otherEarnings.length; index++) {
            if (otherEarnings[index] != "") {
                selectedEarnings.push({
                    'id': earningLength + index,
                    'Name': otherEarnings[index],
                    'Selected': true
                })
            }
        }

        otherEarnings = otherEarnings.join(',');
        return (dispatch) => {
            dispatch({
                type: ActionType.UPDATE_OTHER_STRING,
                otherEarnings
            });
            dispatch(updateSelectedEarnings(selectedEarnings));
        };
    }
}


