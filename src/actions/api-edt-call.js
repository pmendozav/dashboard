import { API_EDT_CALL_HAS_ERROR, API_EDT_CALL_IS_LOADING, API_EDT_CALL_DATA_SUCCESS } from "../constants/api";

import {apiGetApiEdtCall} from '../services/get.services';


function apiEdtCallHasError(bool) {
    return {
        type: API_EDT_CALL_HAS_ERROR,
        hasError: bool
    };
}

function apiEdtCallIsLoading(bool) {
    return {
        type: API_EDT_CALL_IS_LOADING,
        isLoading: bool
    };
}

function apiEdtCallDataSuccess(data) {
    return {
        type: API_EDT_CALL_DATA_SUCCESS,
        data
    };
}

export function apiEdtCallFetchData(data) {
    return (dispatch) => {
        dispatch(apiEdtCallIsLoading(true));

        apiGetApiEdtCall(data).then(response => {
            if (!response) {
                throw Error(response.statusText);
            }
            dispatch(apiEdtCallIsLoading(false));

            dispatch(apiEdtCallDataSuccess(response));
        }).catch(() => dispatch(apiEdtCallHasError(true)));
    };
}