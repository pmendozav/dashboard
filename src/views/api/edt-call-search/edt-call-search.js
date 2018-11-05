import React from 'react';
import { connect } from 'react-redux';

// import './api.css';
import Search2 from '../../../components/search-v2/search-v2';

import { apiEdtCallFetchData } from '../../../actions/api-edt-call';
import EdtCallResult from './edt-call-result';

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = {
    apiEdtCallFetchData,
};

class EdtCallSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listFilterTypes : [
                'AND', 
                'OR', 
                'EQUAL'
            ],
            listFilters: [
                'transaction_id',
                'idorders', 
                'retailers_order'
            ],
            filterValues: [
                {
                    'isUsed': true,
                    'filterType': '',
                    'filterValue': '',
                    'value': '',
                },
                {
                    'isUsed': false,
                    'filterType': '',
                    'filterValue': '',
                    'value': '',
                },
                {
                    'isUsed': false,
                    'filterType': '',
                    'filterValue': '',
                    'value': '',
                }
           ],
        };

        this.onclick = this.onclick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(index, target) {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let _filterValues = this.state.filterValues.reduce((acc, obj) => {acc.push({...obj}); return acc;}, []);
        _filterValues[index][name] = value;

        this.setState({
            filterValues: _filterValues
        });
    }

    onclick(e) {
        e.preventDefault();
        this.props.apiEdtCallFetchData(this.state.filterValues);
    }

    render() {
        return (
            <div className='edt-call-search'>
                <Search2 onclick={this.onclick} handleChange={this.handleChange} listFilterTypes={this.state.listFilterTypes} listFilters={this.state.listFilters} filterValues={this.state.filterValues}/>   
                <EdtCallResult />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EdtCallSearch);
