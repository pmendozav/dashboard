import React from 'react';
import './api-call-report.css';
import { Subtitle } from '../../common';

import Table from '../../../components/table/table'

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        data: state.searchMerchantReducer.merchantApiCallDataSuccess,
        hasError: state.searchMerchantReducer.merchantApiCallHasError,
        isLoading: state.searchMerchantReducer.merchantApiCallIsLoading,
    };
};

class ApiCallReport extends React.Component {
    render() {
        return (
            <div className='api-edt-call-report'>
                <Subtitle text='API calls (latest 50)'/>

                <div className="row">
                    {this.props.data && <Table isLoading={this.props.isLoading} id="report-api-call-table" data={this.props.data}/>}
                </div>
                <hr className="mb-4" />
            </div>
        );
    }
}

// export default ApiCallReport;
export default connect(mapStateToProps)(ApiCallReport);