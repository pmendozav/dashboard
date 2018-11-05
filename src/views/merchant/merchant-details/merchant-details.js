import React from 'react';
import './merchant-details.css';
import { Subtitle } from '../../common';

import { connect } from 'react-redux';

import Loader from '../../../components/loader/loader';

const mapStateToProps = state => {
    return {
        data: state.searchMerchantReducer.merchantDetailsDataSuccess,
        hasError: state.searchMerchantReducer.merchantDetailsHasError,
        isLoading: state.searchMerchantReducer.merchantDetailsIsLoading,
    };
};

const GetOneObjectValue = ({data, isLoading}) => {
    if (isLoading) {
        return <Loader />
    }

    return (
        Object.entries(data).map((value, index) => {
            return <div className="col-md-4 mb-2">
                <label>{value[0]}</label>
                <input value={value[1]} type="text" className="form-control" disabled/>
            </div>            
        })
    );
};

const GetAllObjectValues = ({data}) => {
    return (
        data.map((e, index) => {
            return (
                <div className="row">
                    <GetOneObjectValue data={e} />
                </div>
            );
        })
    );
};

class MerchantDetails extends React.Component {
    render() {
        return (
            <div className='result-search-merchant'>
                <Subtitle text='Details'/>
                <div className="row">
                    {this.props.data && <GetOneObjectValue isLoading={this.props.isLoading} data={this.props.data} />}
                </div>
                <hr className="mb-4" />
            </div>
        );
    }
}

export default connect(mapStateToProps)(MerchantDetails);
