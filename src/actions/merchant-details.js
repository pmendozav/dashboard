import { MERCHANT_DETAILS_HAS_ERROR, MERCHANT_DETAILS_IS_LOADING, MERCHANT_DETAILS_DATA_SUCCESS } from "../constants/merchant";

import {apiGetMerchantDetails} from '../services/get.services';


function merchantDetailsHasError(bool) {
    return {
        type: MERCHANT_DETAILS_HAS_ERROR,
        hasError: bool
    };
}

function merchantDetailsIsLoading(bool) {
    return {
        type: MERCHANT_DETAILS_IS_LOADING,
        isLoading: bool
    };
}

function merchantDetailsDataSuccess(data) {
    return {
        type: MERCHANT_DETAILS_DATA_SUCCESS,
        data
    };
}

export function merchantDetailsFetchData(idpartner) {
    return (dispatch) => {
        dispatch(merchantDetailsIsLoading(true));

        apiGetMerchantDetails(idpartner).then(response => {
            if (!response) {
                throw Error(response.statusText);
            }
            dispatch(merchantDetailsIsLoading(false));

            dispatch(merchantDetailsDataSuccess(response));
        }).catch(() => dispatch(merchantDetailsHasError(true)));
    };
}