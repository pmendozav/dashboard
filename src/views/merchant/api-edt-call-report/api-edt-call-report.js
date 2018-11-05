import React from 'react';
import './api-edt-call-report.css';
import { Subtitle } from '../../common';

import Table from '../../../components/table/table'

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        data: state.searchMerchantReducer.merchantApiEdtCallDataSuccess,
        hasError: state.searchMerchantReducer.merchantApiEdtCallHasError,
        isLoading: state.searchMerchantReducer.merchantApiEdtCallIsLoading,
    };
};

class ApiEdtCallReport extends React.Component {
    render() {
        return (
            <div className='api-edt-call-report'>
                <Subtitle text='EDT calls (latest 50)'/>

                <div className="row">
                    {this.props.data && <Table isLoading={this.props.isLoading} id="report-api-call-table" data={this.props.data}/>}
                </div>
                <hr className="mb-4" />
            </div>
        );
    }
}

// export default ApiEdtCallReport;
export default connect(mapStateToProps)(ApiEdtCallReport);