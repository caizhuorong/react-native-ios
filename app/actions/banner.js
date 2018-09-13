
import * as types from './actionTypes';
import Util from '../common/Common';
import {
    indexImg,
    getTask,
    getbpcc,
} from '../common/api';
export let bannerfetch = () => {
    return dispatch => {
        Util.get(indexImg, (response) => {
                 dispatch(bannerlist(response.rows));
                 }, (error) => {
                 console.log(error)
                 })
    }
}
export let activelist = () =>{
    return dispatch => {
        Util.get(getTask,(response) => {
                 dispatch(activelists(response.rows));
                 },(error) => {
                 console.log(error);
                 })
    }
}
export let getbpccs = () => {
    return dispatch => {
        Util.get(getbpcc,(response)=>{
            console.log(response,1234)
         },(error) => {
                 console.log(error);
         })
    }
}
let bannerlist = (response) => {
    return {
    type: types.BANNER_LIST,
        response
    }
}

let activelists = ( response ) => {
    return {
    type: types.ACTIVE_ICON_LIST,
        response
    }
}

