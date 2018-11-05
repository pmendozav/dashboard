import React from 'react';
import './merchant.css';
import SearchMerchant from './merchant-search/merchant-search';
import MerchantDetails from './merchant-details/merchant-details';

import {Title} from '../common';
import ApiEdtCallReport from './api-edt-call-report/api-edt-call-report';
import ApiCallReport from './api-call-report/api-call-report';

class Merchant extends React.Component {
    render() {
        return (
            <div className='merchant'>
                <Title text='Merchant Site' />

                <div className='search-merchant-section'>
                    <SearchMerchant />
                    <MerchantDetails />
                </div>

                <div className='api-edt-call-merchant-section'>
                    <ApiEdtCallReport />
                    <ApiCallReport />
                </div>
            </div>
        );
    }
}

export default Merchant;