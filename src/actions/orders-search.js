import { ORDERS_SEARCH_HAS_ERROR, ORDERS_SEARCH_IS_LOADING, ORDERS_SEARCH_DATA_SUCCESS } from "../constants/orders";

import {apiGetOrdersInfo} from '../services/get.services';


function ordersSearchHasError(bool) {
    return {
        type: ORDERS_SEARCH_HAS_ERROR,
        hasError: bool
    };
}

function ordersSearchIsLoading(bool) {
    return {
        type: ORDERS_SEARCH_IS_LOADING,
        isLoading: bool
    };
}

function ordersSearchDataSuccess(data) {
    return {
        type: ORDERS_SEARCH_DATA_SUCCESS,
        data
    };
}

export function ordersSearchFetchData(text) {
    return (dispatch) => {
        dispatch(ordersSearchIsLoading(true));

        apiGetOrdersInfo(text).then(response => {
            if (!response) {
                throw Error(response.statusText);
            }
            dispatch(ordersSearchIsLoading(false));

            dispatch(ordersSearchDataSuccess(response));
        }).catch(() => dispatch(ordersSearchHasError(true)));
    };
}