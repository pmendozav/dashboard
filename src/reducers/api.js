import { API_EDT_CALL_HAS_ERROR, API_EDT_CALL_IS_LOADING, API_EDT_CALL_DATA_SUCCESS } from "../constants/api";

const initialState = {
    apiEdtCallIsLoading: false,
    apiEdtCallHasError: false,
    apiEdtCallDataSuccess: [],
};

export function apiReducer(state = initialState, action) {
    switch (action.type) {
        // edt call
        case API_EDT_CALL_IS_LOADING:
            return {
                ...state,
                apiEdtCallIsLoading: action.isLoading
            };
        case API_EDT_CALL_HAS_ERROR:
            return {
                ...state,
                apiEdtCallHasError: action.hasError
            };
        case API_EDT_CALL_DATA_SUCCESS:
            return {
                ...state,
                apiEdtCallDataSuccess: action.data
            };
        // api default
        default:
            return state;
    }
}