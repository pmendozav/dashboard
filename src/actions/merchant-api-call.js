import { MERCHANT_API_CALL_HAS_ERROR, MERCHANT_API_CALL_IS_LOADING, MERCHANT_API_CALL_DATA_SUCCESS } from "../constants/merchant";

import {apiGetMerchantApiCall} from '../services/get.services';


function merchantApiCallHasError(bool) {
    return {
        type: MERCHANT_API_CALL_HAS_ERROR,
        hasError: bool
    };
}

function merchantApiCallIsLoading(bool) {
    return {
        type: MERCHANT_API_CALL_IS_LOADING,
        isLoading: bool
    };
}

function merchantApiCallDataSuccess(data) {
    return {
        type: MERCHANT_API_CALL_DATA_SUCCESS,
        data
    };
}

export function merchantApiCallFetchData(idpartner) {
    return (dispatch) => {
        dispatch(merchantApiCallIsLoading(true));

        apiGetMerchantApiCall(idpartner).then(response => {
            if (!response) {
                throw Error(response.statusText);
            }
            dispatch(merchantApiCallIsLoading(false));

            dispatch(merchantApiCallDataSuccess(response));
        }).catch(() => dispatch(merchantApiCallHasError(true)));
    };
}