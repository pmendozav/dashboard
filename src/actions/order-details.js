import { ORDER_DETAILS_HAS_ERROR, ORDER_DETAILS_IS_LOADING, ORDER_DETAILS_DATA_SUCCESS } from "../constants/orders";

import {apiGetOrderDetails} from '../services/get.services';


function orderDetailsHasError(bool) {
    return {
        type: ORDER_DETAILS_HAS_ERROR,
        hasError: bool
    };
}

function orderDetailsIsLoading(bool) {
    return {
        type: ORDER_DETAILS_IS_LOADING,
        isLoading: bool
    };
}

function orderDetailsDataSuccess(data) {
    return {
        type: ORDER_DETAILS_DATA_SUCCESS,
        data
    };
}

export function orderDetailsFetchData(key, tableName, columnName) {
    return (dispatch) => {
        dispatch(orderDetailsIsLoading(true));

        apiGetOrderDetails(key, tableName, columnName).then(response => {
            if (!response) {
                throw Error(response.statusText);
            }
            dispatch(orderDetailsIsLoading(false));

            dispatch(orderDetailsDataSuccess(response));
        }).catch(() => dispatch(orderDetailsHasError(true)));
    };
}