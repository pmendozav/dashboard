import React from 'react';
import './merchant-search.css';

import { connect } from 'react-redux';
import { formatDataMerchantSearch } from '../../../reducers/merchant';
import Loader from '../../../components/loader/loader';

const mapStateToProps = state => {
    return {
        data: formatDataMerchantSearch(state),
        hasError: state.searchMerchantReducer.merchantSearchHasError,
        isLoading: state.searchMerchantReducer.merchantSearchIsLoading
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

    onclick(e, obj) {
        e.preventDefault();
        this.props.onclick(obj);
    }

    render() {
        let data = this.props.data;
        let onclick = this.onclick;

        if (this.props.isLoading) {
            return <Loader />
        }

        return (
            data.map(function (obj, index) {
                return ( 
                        <li value={"" + obj.idpartner + ""} onClick={(e) => onclick(e, obj)} className={"list-group-item d-flex justify-content-between flex-shrink-0 " + ((index % 2) ? "lh-condensed" : "bg-light")}>
                            <div>
                                <h6 className="my-0">{obj.title}</h6>
                                <small className="text-muted">{obj.description}</small>
                            </div>
                            <span className="text-muted">{obj.note}</span>
                        </li>
                );
            })
        );
    }
}

class ResultMerchantSearch extends React.Component {
    render() {
        let data = this.props.data;
        return (
        <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Results</span>
                <span className="badge badge-secondary badge-pill">{this.props.data && this.props.data.length}</span>
            </h4>

            <ul className="list-group mb-3" id="container">
                {data && <ComputeItemsResult isLoading={this.props.isLoading} data={data} onclick={this.props.onclick}/>}
            </ul>
        </div>
        )
    };
}

// export default PreviewResultSearch;
export default connect(mapStateToProps)(ResultMerchantSearch);