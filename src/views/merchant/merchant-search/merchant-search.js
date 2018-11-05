import React from 'react';
import './merchant-search.css';

import Search from '../../../components/search/search'

import { merchantSearchFetchData } from '../../../actions/merchant-search';
import { merchantDetailsFetchData } from '../../../actions/merchant-details';
import { merchantApiEdtCallFetchData } from '../../../actions/merchant-api-edt-call';
import { merchantApiCallFetchData } from '../../../actions/merchant-api-call';
import { connect } from 'react-redux';

import { Subtitle } from '../../common';

import ResultMerchantSearch from './result-merchant-search'

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = {
    merchantSearchFetchData,
    merchantDetailsFetchData,
    merchantApiEdtCallFetchData,
    merchantApiCallFetchData,
};

class SearchMerchant extends React.Component {
    constructor(props) {
        super(props);
    }

    SearchOnClick = (filterType, text) => {
        this.props.merchantSearchFetchData(text);
    }

    ResultOnClick = (data) => {
        this.props.merchantDetailsFetchData(data.idpartner);
        this.props.merchantApiEdtCallFetchData(data.idpartner);
        this.props.merchantApiCallFetchData(data.idpartner);
    }

    render() {
        return (
            <div className='search-merchant'>
                <Subtitle text='Find a Merchant'/>
                
                <div className="row">
                    <ResultMerchantSearch onclick={this.ResultOnClick} />
                    <Search onclick={this.SearchOnClick} options={['name', 'idparter', 'MailBox']} />
                    <hr className="mb-4" />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMerchant);
