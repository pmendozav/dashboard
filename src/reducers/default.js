import { ADD_ARTICLE, SEARCH_MERCHANT_SUCCESS } from "../constants/action-types";

const initialState = {
    articles: [],
    merchantResultSearchData: [],
    test: 'test',
};

export const defaultReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                ...state,
                articles: [...state.articles, action.payload]
            };
        case SEARCH_MERCHANT_SUCCESS:
            return {
                ...state,
                merchantResultSearchData: action.merchantResultSearchData,
            };
        default:
            return state;
    }
}