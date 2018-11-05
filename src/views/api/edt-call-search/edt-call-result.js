import React from 'react';
import { Subtitle } from '../../common';

import Table from '../../../components/table/table';

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        data: state.apiReducer.apiEdtCallDataSuccess,
        hasError: state.apiReducer.apiEdtCallHasError,
        isLoading: state.apiReducer.apiEdtCallIsLoading,
    };
};

class EdtCallResult extends React.Component {
    render() {
        return (
            <div className='api-edt-call-report'>
                <Subtitle text='Result'/>

                <div className="row">
                    {this.props.data && <Table isLoading={this.props.isLoading} id="report-api-call-table" data={this.props.data}/>}
                </div>
                <hr className="mb-4" />
            </div>
        );
    }
}

export default connect(mapStateToProps)(EdtCallResult);