import React from 'react';
import './merchant.css';
import SearchMerchant from './merchant-search/merchant-search';
import MerchantDetails from './merchant-details/merchant-details';

import {Title} from '../common';
import ApiEdtCallReport from './api-edt-call-report/api-edt-call-report';
import ApiCallReport from './api-call-report/api-call-report';

import { connect } from 'react-redux';
import {actionSelectMenu} from '../../actions/index';

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = {
    actionSelectMenu
};

class Merchant extends React.Component {
    componentDidMount() {
        this.props.actionSelectMenu(2);
    }

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

// export default Merchant;
export default connect(mapStateToProps, mapDispatchToProps)(Merchant);
