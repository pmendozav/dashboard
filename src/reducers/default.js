import { ADD_ARTICLE, SEARCH_MERCHANT_SUCCESS, SELECT_MENU, SHOW_API_OPTIONS } from "../constants/action-types";

const initialState = {
    articles: [],
    merchantResultSearchData: [],
    test: 'test',
    menuSelected: 0,
    showApiOptions: false,
};

export const defaultReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                ...state,
                articles: [...state.articles, action.payload]
            };
        case SELECT_MENU:
            return {
                ...state,
                menuSelected: action.value
            };
        case SHOW_API_OPTIONS:
            return {
                ...state,
                showApiOptions: action.value
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