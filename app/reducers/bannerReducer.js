
/**
 * Created by haifeng on 17/1/10.
 */

import * as types from '../actions/actionTypes';

const initialState = {
    isLoading:true,
    bannerlist:[],
    activelist:[],
    activeloading:true,
};

let bannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ACTIVE_ICON_LIST:
            return {
                ...state,
            activeloading:false,
            activelist:[...action.response]
            };
        case types.BANNER_LIST:
            return {
                ...state,
            isLoading: false,
            bannerlist:[...action.response]
            }
        default:
            return state
    }
}

export default bannerReducer;
