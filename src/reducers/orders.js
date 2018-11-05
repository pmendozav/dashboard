import { ORDERS_SEARCH_HAS_ERROR, ORDERS_SEARCH_IS_LOADING, ORDERS_SEARCH_DATA_SUCCESS } from "../constants/orders";
import { ORDER_DETAILS_HAS_ERROR, ORDER_DETAILS_IS_LOADING, ORDER_DETAILS_DATA_SUCCESS } from "../constants/orders";

const initialState = {
    ordersSearchIsLoading: false,
    ordersSearchHasError: false,
    ordersSearchDataSuccess: [],

    merchantDetailsIsLoading: false,
    merchantDetailsHasError: false,
    merchantDetailsDataSuccess: [],
};

export const formatDataOrdersSearch = (state) => {
    return state.ordersReducer.ordersSearchDataSuccess.map(function (e) {
        return ( {
            id: e.id,
            table: e.table,
            column: e.column,
            status: e.status,
            merchant: e.merchant,
            date: e.date,
        });
    });
};

export function ordersReducer(state = initialState, action) {
    switch (action.type) {
        // orders info
        case ORDERS_SEARCH_IS_LOADING:
            return {
                ...state,
                ordersSearchIsLoading: action.isLoading
            };
        case ORDERS_SEARCH_HAS_ERROR:
            return {
                ...state,
                ordersSearchHasError: action.hasError
            };
        case ORDERS_SEARCH_DATA_SUCCESS:
            return {
                ...state,
                ordersSearchDataSuccess: action.data
            };
        // order details
        case ORDER_DETAILS_IS_LOADING:
            return {
                ...state,
                orderDetailsIsLoading: action.isLoading
            };
        case ORDER_DETAILS_HAS_ERROR:
            return {
                ...state,
                orderDetailsHasError: action.hasError
            };
        case ORDER_DETAILS_DATA_SUCCESS:
            return {
                ...state,
                orderDetailsDataSuccess: action.data
            };
       // merchant default
        default:
            return state;
    }
}