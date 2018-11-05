import React from 'react';
import './order-search.css';

import { connect } from 'react-redux';
import { formatDataOrdersSearch } from '../../../reducers/orders';
import Loader from '../../../components/loader/loader';

const mapStateToProps = state => {
    return {
        data: formatDataOrdersSearch(state),
        hasError: state.ordersReducer.ordersSearchHasError,
        isLoading: state.ordersReducer.ordersSearchIsLoading
    };
};

class ComputeItemsResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            idPartnerSelected: 0,
        };

        this.onclick = this.onclick.bind(this);
    }

    onclick(e, data) {
        e.preventDefault();
        this.props.onclick(data);
    }

    render() {
        let data = this.props.data;
        let onclick = this.onclick;

        if (this.props.isLoading) {
            return <Loader />
        }

        return (
            data.map(function (data, index) {
                return ( 
                        <li value={"" + data.id + ""} onClick={(e) => {onclick(e, data)}} className={"list-group-item d-flex justify-content-between flex-shrink-0 " + ((index % 2) ? "lh-condensed" : "bg-light")}>
                            <div>
                                <h6 className="my-0">{data.id}</h6>
                                <small className="text-muted">{data.merchant + " " + data.date}</small>
                            </div>
                            <span className="text-muted">{data.status}</span>
                        </li>
                );
            })
        );
    }
}

class ResultOrderSearch extends React.Component {
    render() {
        let data = this.props.data;
        return (
        <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Results</span>
                <span className="badge badge-secondary badge-pill">{this.props.data && this.props.data.length}</span>
            </h4>

            <ul className="list-group mb-3" id="container">
                {data && <ComputeItemsResult onclick={this.props.onclick} isLoading={this.props.isLoading} data={data}/>}
            </ul>
        </div>
        )
    };
}

// export default ResultOrderSearch;
export default connect(mapStateToProps)(ResultOrderSearch);