import { MERCHANT_SEARCH_HAS_ERROR, MERCHANT_SEARCH_IS_LOADING, MERCHANT_SEARCH_DATA_SUCCESS } from "../constants/merchant";

import {apiGetMerchantSearch} from '../services/get.services';


function merchantSearchHasError(bool) {
    return {
        type: MERCHANT_SEARCH_HAS_ERROR,
        hasError: bool
    };
}

function merchantSearchIsLoading(bool) {
    return {
        type: MERCHANT_SEARCH_IS_LOADING,
        isLoading: bool
    };
}

function merchantSearchDataSuccess(data) {
    return {
        type: MERCHANT_SEARCH_DATA_SUCCESS,
        data
    };
}

export function merchantSearchFetchData(text) {
    return (dispatch) => {
        dispatch(merchantSearchIsLoading(true));

        apiGetMerchantSearch(text).then(response => {
            if (!response) {
                throw Error(response.statusText);
            }
            dispatch(merchantSearchIsLoading(false));

            dispatch(merchantSearchDataSuccess(response));
        }).catch(() => dispatch(merchantSearchHasError(true)));
    };
}