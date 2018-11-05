import { combineReducers } from 'redux';

import {searchMerchantReducer} from './merchant';
import {ordersReducer} from './orders';
import {defaultReducer} from './default';
import {apiReducer} from './api';

export default combineReducers({
    defaultReducer,
    searchMerchantReducer,
    ordersReducer,
    apiReducer,
});


// export default rootReducer;