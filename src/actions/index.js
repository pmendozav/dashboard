import {ADD_ARTICLE, SEARCH_MERCHANT_SUCCESS} from '../constants/action-types';

export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article,
});

export const actionFetchSearchMerchantResult = (merchantResultSearchData) => ({
    type: SEARCH_MERCHANT_SUCCESS,
    merchantResultSearchData: merchantResultSearchData,
});