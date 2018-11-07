import { MERCHANT_SEARCH_HAS_ERROR, MERCHANT_SEARCH_IS_LOADING, MERCHANT_SEARCH_DATA_SUCCESS } from "../constants/merchant";
import { MERCHANT_DETAILS_HAS_ERROR, MERCHANT_DETAILS_IS_LOADING, MERCHANT_DETAILS_DATA_SUCCESS } from "../constants/merchant";
import { MERCHANT_API_EDT_CALL_HAS_ERROR, MERCHANT_API_EDT_CALL_IS_LOADING, MERCHANT_API_EDT_CALL_DATA_SUCCESS } from "../constants/merchant";
import { MERCHANT_API_CALL_HAS_ERROR, MERCHANT_API_CALL_IS_LOADING, MERCHANT_API_CALL_DATA_SUCCESS } from "../constants/merchant";

const initialState = {
    merchantSearchIsLoading: false,
    merchantSearchHasError: false,
    merchantSearchDataSuccess: [],

    merchantDetailsIsLoading: false,
    merchantDetailsHasError: false,
    merchantDetailsDataSuccess: null,

    merchantApiEdtCallIsLoading: false,
    merchantApiEdtCallHasError: false,
    merchantApiEdtCallDataSuccess: [],

    merchantApiCallIsLoading: false,
    merchantApiCallHasError: false,
    merchantApiCallDataSuccess: [],
};

export const formatDataMerchantSearch = (state) => {
    return state.searchMerchantReducer.merchantSearchDataSuccess.map(function (e) {
        return ( {
            title: e.name,
            idpartner: e.idpartner,
            description: e.isenabled,
            note: e.type,
        });
    });
};

export function searchMerchantReducer(state = initialState, action) {
    switch (action.type) {
        // merchant details
        case MERCHANT_SEARCH_IS_LOADING:
            return {
                ...state,
                merchantSearchIsLoading: action.isLoading
            };
        case MERCHANT_SEARCH_HAS_ERROR:
            return {
                ...state,
                merchantSearchHasError: action.hasError
            };
        case MERCHANT_SEARCH_DATA_SUCCESS:
            return {
                ...state,
                merchantSearchDataSuccess: action.data
            };
        // merchant details
        case MERCHANT_DETAILS_IS_LOADING:
            return {
                ...state,
                merchantDetailsIsLoading: action.isLoading
            };
        case MERCHANT_DETAILS_HAS_ERROR:
            return {
                ...state,
                merchantDetailsHasError: action.hasError
            };
        case MERCHANT_DETAILS_DATA_SUCCESS:
            return {
                ...state,
                merchantDetailsDataSuccess: action.data
            };
        // merchant api edt call
        case MERCHANT_API_EDT_CALL_IS_LOADING:
            return {
                ...state,
                merchantApiEdtCallIsLoading: action.isLoading
            };
        case MERCHANT_API_EDT_CALL_HAS_ERROR:
            return {
                ...state,
                merchantApiEdtCallHasError: action.hasError
            };
        case MERCHANT_API_EDT_CALL_DATA_SUCCESS:
            return {
                ...state,
                merchantApiEdtCallDataSuccess: action.data
            };
        // merchant api call
        case MERCHANT_API_CALL_IS_LOADING:
            return {
                ...state,
                merchantApiCallIsLoading: action.isLoading
            };
        case MERCHANT_API_CALL_HAS_ERROR:
            return {
                ...state,
                merchantApiCallHasError: action.hasError
            };
        case MERCHANT_API_CALL_DATA_SUCCESS:
            return {
                ...state,
                merchantApiCallDataSuccess: action.data
            };
        // merchant default
        default:
            return state;
    }
}