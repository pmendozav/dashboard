import {ADD_ARTICLE, SEARCH_MERCHANT_SUCCESS, SELECT_MENU, SHOW_API_OPTIONS} from '../constants/action-types';

export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article,
});

export const actionFetchSearchMerchantResult = (merchantResultSearchData) => ({
    type: SEARCH_MERCHANT_SUCCESS,
    merchantResultSearchData: merchantResultSearchData,
});

export const actionSelectMenu = (value) => ({
    type: SELECT_MENU,
    value: value,
});

export const actionShowApiOptions = (value) => ({
    type: SHOW_API_OPTIONS,
    value: value,
});