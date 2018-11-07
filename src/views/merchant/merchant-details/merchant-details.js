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

const GetOneObjectValue = ({disabled, data, isLoading}) => {
    if (isLoading) {
        return <Loader />
    }

    return (
        Object.entries(data).map((value, index) => {
            return <div className="col-md-4 mb-2">
                <label>{value[0]}</label>
                <input value={value[1]} type="text" className="form-control" {...disabled}/>
            </div>            
        })
    );
};

class MerchantDetails extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            editBtnEnable: true,
        }

        this.onclick = this.onclick.bind(this);
    }

    onclick(e) {
        e.preventDefault();
        this.setState({
            editBtnEnable: !this.state.editBtnEnable,
        });
    }


    render() {
        let opts =
            <div className="d-flex">
                <button className="btn btn-primary btn-lg" type="submit" onClick={this.onclick}> Cancel </button>
                <button className="btn btn-secondary btn-lg" type="submit" onClick={this.onclick}> Update </button>
            </div>

        return (
            <div className='result-search-merchant'>
                <Subtitle text='Details'/>
                {/* <div className="row"> */}
                    {this.props.data && this.state.editBtnEnable && <button className="btn btn-primary btn-block" type="submit" onClick={this.onclick}> Edit </button>}
                    {!this.state.editBtnEnable && opts}
                {/* </div> */}
                <div className="row">
                    {this.props.data && <GetOneObjectValue disabled={{"disabled": this.state.editBtnEnable}} isLoading={this.props.isLoading} data={this.props.data} />}
                </div>
                <hr className="mb-4" />
            </div>
        );
    }
}

export default connect(mapStateToProps)(MerchantDetails);
