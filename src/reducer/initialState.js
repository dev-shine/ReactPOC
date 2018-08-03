//This is to ensure that we can see the entirety of the store

export default {  
    baseEarningReducer : {
      baseearnings: [],
      baseEarningList : [],
      selectedEarnings : [],
      isOtherSelected : false,
      otherString : ''
    },

    accuralPlanReducer : {
      accuralPlans: [],
      accuralPlanList : [],
      selectedPlans : [],
      haveAccuralPlan : false
    },

    tipReducer : {
      tips: [],
      tipList : [],
      selectedTips : [],
      isTippedEmployee : false     
    },

    reviewReducer : {
      reviews: [],
      tipList : [],
      selectedTips : []     
    }
};
