import {db_merchants_search, db_merchants_details, db_merchants_api_edt_call, db_merchants_api_call} from './db'
import {db_orders_search, db_order_details} from './db';

const TIMEOUT = 100

export function apiGetMerchantSearch(wildcard) {
    // let url = 'http://localhost:8080/partner/info/' + wildcard;
    // return fetch(url) 
    //     .then(results => {
    //         return results.json();
    //     });
    return new Promise(resolve => {
        setTimeout(() => resolve(db_merchants_search), TIMEOUT);
      });
}

export function apiGetMerchantDetails(idpartner) {
    // let url = 'http://localhost:8080/partner/details/' + idpartner;
    // return fetch(url) 
    //     .then(results => {
    //         return results.json();
    //     });
    return new Promise(resolve => {
        setTimeout(() => resolve(db_merchants_details), TIMEOUT);
      });
}

export function apiGetMerchantApiEdtCall(idpartner) {
    // let url = 'http://localhost:8080/api/' + idpartner;
    // return fetch(url) 
    //     .then(results => {
    //         return results.json();
    //     });
    return new Promise(resolve => {
        setTimeout(() => resolve(db_merchants_api_edt_call), TIMEOUT);
      });
}

export function apiGetMerchantApiCall(idpartner) {
    return new Promise(resolve => {
        setTimeout(() => resolve(db_merchants_api_call), TIMEOUT);
      });
}

export function apiGetOrdersInfo(value) {
    return new Promise(resolve => {
        setTimeout(() => resolve(db_orders_search), TIMEOUT);
      });
}

export function apiGetOrderDetails(key, tableName, columnName) {
    return new Promise(resolve => {
        setTimeout(() => resolve(db_order_details), TIMEOUT);
      });
}

export function apiGetApiEdtCall(data) {
    return new Promise(resolve => {
        setTimeout(() => resolve(db_merchants_api_edt_call), TIMEOUT);
      });
}