import React from 'react';
import './table.css';

import Loader from '../../components/loader/loader';


const ComputeRow = ({ row }) => {
    return (
        Object.values(row).map(function (key) {
            return ( <td>{key}</td> );
        })
    )
};

const ComputeHeader = ({ headers }) => {
    return (
        headers.map(function (e, index) {
            return ( <th>{e}</th> );
        })
    )
};

const ComputeAllRows = ({ rows }) => {
    return (
        rows.map(function (row, index) {
            return ( <tr> <ComputeRow row={row}/> </tr> );
        })
    )
};

class Table extends React.Component {
    render() {
        let headers;
        if (this.props.data.length > 0)
            headers = Object.keys(this.props.data[0]);

        if (this.props.isLoading) {
            return <Loader />
        }

        return (
            <div className="row table-responsive offset-table" id={this.props.id}>
                <table className="table table-striped table-sm">
                    <thead>
                        {headers && <ComputeHeader headers = {headers}/>}
                    </thead>
                    <tbody>
                        <ComputeAllRows rows = {this.props.data}/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;