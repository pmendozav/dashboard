import { MERCHANT_API_EDT_CALL_HAS_ERROR, MERCHANT_API_EDT_CALL_IS_LOADING, MERCHANT_API_EDT_CALL_DATA_SUCCESS } from "../constants/merchant";

import {apiGetMerchantApiEdtCall} from '../services/get.services';


function merchantApiEdtCallHasError(bool) {
    return {
        type: MERCHANT_API_EDT_CALL_HAS_ERROR,
        hasError: bool
    };
}

function merchantApiEdtCallIsLoading(bool) {
    return {
        type: MERCHANT_API_EDT_CALL_IS_LOADING,
        isLoading: bool
    };
}

function merchantApiEdtCallDataSuccess(data) {
    return {
        type: MERCHANT_API_EDT_CALL_DATA_SUCCESS,
        data
    };
}

export function merchantApiEdtCallFetchData(idpartner) {
    return (dispatch) => {
        dispatch(merchantApiEdtCallIsLoading(true));

        apiGetMerchantApiEdtCall(idpartner).then(response => {
            if (!response) {
                throw Error(response.statusText);
            }
            dispatch(merchantApiEdtCallIsLoading(false));

            dispatch(merchantApiEdtCallDataSuccess(response));
        }).catch(() => dispatch(merchantApiEdtCallHasError(true)));
    };
}