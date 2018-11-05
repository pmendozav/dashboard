import React from 'react';
import './order-details.css';
import { Subtitle } from '../../common';

import { connect } from 'react-redux';

import Loader from '../../../components/loader/loader';
import Table from '../../../components/table/table';

const mapStateToProps = state => {
    return {
        data: state.ordersReducer.orderDetailsDataSuccess,
        hasError: state.ordersReducer.orderDetailsHasError,
        isLoading: state.ordersReducer.orderDetailsIsLoading,
    };
};

const GetOneObjectValue = ({data, isLoading}) => {
    if (isLoading) {
        return <Loader />
    }

    return (
        Object.entries(data).map((value, index) => {
            if (value[0] === "items" || value[0] === "payment" || value[0] === "boxlink") {
                return '';
            }

            return <div className="col-md-4 mb-2">
                <label>{value[0]}</label>
                <input value={value[1]} type="text" className="form-control" disabled/>
            </div>            
        })
    );
};

const GetImage = ({isLoading, data}) => {
    let src = data.boxlink;

    if (isLoading) {
        return <Loader />
    }

    if (!src) {
        return <p>Image is not available</p>
    }

    return (
        <img class="mx-auto d-block" src={src} />  
    )
}

const GetItems = ({isLoading, data}) => {
    let items = data.items;

    if (isLoading) {
        return <Loader />
    }

    if (!items) {
        return <p>Order items details not available</p>
    }

    return (
            <Table isLoading={isLoading} id="items-order-table" data={items} />
    )
}

class OrderDetails extends React.Component {
    render() {
        return (
            <div className='order-details'>
                <Subtitle text='Order Info'/>
                <div className="row">
                    {this.props.data && <GetOneObjectValue isLoading={this.props.isLoading} data={this.props.data} />}
                </div>

                <hr className="mb-4" />

                <Subtitle text='Box Image'/>
                <div className="row">
                    {this.props.data && <GetImage isLoading={this.props.isLoading} data={this.props.data} />}
                </div>

                <hr className="mb-4" />

                <Subtitle text='Items info'/>
                <div className="row">
                    {this.props.data && <GetItems isLoading={this.props.isLoading} data={this.props.data} />}
                </div>

                <hr className="mb-4" />
            </div>
        );
    }
}

export default connect(mapStateToProps)(OrderDetails);
