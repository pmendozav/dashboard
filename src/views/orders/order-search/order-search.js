import React from 'react';
import { connect } from 'react-redux';

import './order-search.css';

import Search from '../../../components/search/search'
import { Subtitle } from '../../common';
import ResultOrderSearch from './result-order-search';

import { ordersSearchFetchData } from '../../../actions/orders-search';
import { orderDetailsFetchData } from '../../../actions/order-details';

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = {
    ordersSearchFetchData,
    orderDetailsFetchData,
    // merchantApiCallFetchData,
};

class SearchOrder extends React.Component {
    constructor(props) {
        super(props);
    }

    SearchOnClick = (filterType, text) => {
        // alert('SearchOnClick');
        this.props.ordersSearchFetchData(text);
    }

    ResultOnClick = (data) => {
        console.log(data.id, data.table, data.column);
        this.props.orderDetailsFetchData(data.id, data.table, data.column);
        // this.props.merchantApiCallFetchData(idpartner);
    }

    render() {
        return (
            <div className='search-order'>
                <Subtitle text='Find an Order'/>

                <div className="row">   
                    <ResultOrderSearch onclick={this.ResultOnClick} />             
                    <Search onclick={this.SearchOnClick} options={['transaction_id', 'onum', 'WO']} />
                    <hr className="mb-4" />
                </div>
            </div>
        );
    }
}

// export default SearchOrder;
export default connect(mapStateToProps, mapDispatchToProps)(SearchOrder);
