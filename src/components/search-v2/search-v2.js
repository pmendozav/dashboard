import React from 'react';
// import './search.css';

const ComputeOptions = ({ options }) => {
    return (
        options.map(function (e, index) {
            return ( <option value={e}>{e}</option> );
        })
    )
};

const MainFilter = ({label, value, handleChange, onClick}) => {
    return (

        <div class="form-group row">
            <label class="col-lg-1 col-form-label col-form-label-sm">{label}</label>
            <div class="col-lg-3">
                <input type="email" class="col-lg-12 form-control form-control-sm" />
            </div>

            <div class="col-lg-3">
                <button className="col-lg-12 btn btn-primary btn-lg btn-block" type="submit" onClick={onClick}>Search</button>
            </div>
        </div>

    )
}

const MainFilter2 = ({filter, index, listFilters, handleChange}) => {
    return (
        <div className="row">
            <div className="form-check">
            </div>
            <div className="col-md-3 mb-3">
                <select name="filterValue" value={filter.filterValue} className="custom-select d-block w-100" onChange={(e) => handleChange(index, e.target)}>
                    <option value="">Filter..</option>
                    <ComputeOptions options={listFilters} />
                </select>
            </div>

            <div className="col-md-3 mb-3">
                <input name="value" value={filter.value} type="text" className="form-control" placeholder="" required onChange={(e) => handleChange(index, e.target)} />
            </div>
        </div>
    )
}

const RenderAllFilters = ({listFilterTypes, listFilters, filterValues, handleChange}) => {
    let result = filterValues.map(function (filter, index) {
        if (index == 0) {
            return <MainFilter2 filter={filter} index={index} listFilters={listFilters} handleChange={handleChange}/>
        }

        return (
            <div className="row">
                <div className="form-check">
                    <input name="isUsed" type="checkbox" checked={filter.isUsed} className="form-check-input" onChange={(e) => handleChange(index, e.target)} />
                    <label className="form-check-label" htmlFor="isUsed"> </label>
                </div>

                <div className="col-md-3 mb-3">
                    <select name="filterType" value={filter.filterType} className="custom-select d-block w-100" onChange={(e) => handleChange(index, e.target)}>
                        <option value="">Type..</option>
                        <ComputeOptions options={listFilterTypes} />
                    </select>
                </div>

                <div className="col-md-3 mb-3">
                    <select name="filterValue" value={filter.filterValue} className="custom-select d-block w-100" onChange={(e) => handleChange(index, e.target)}>
                        <option value="">Filter..</option>
                        <ComputeOptions options={listFilters} />
                    </select>
                </div>

                <div className="col-md-3 mb-3">
                    <input name="value" value={filter.value} type="text" className="form-control" placeholder="" required onChange={(e) => handleChange(index, e.target)}/>
                </div>
            </div>)
    });

    return (<div>{result}</div>)
};

class Search2 extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { 
    //         filterValues: [
    //             {
    //                 'isUsed': true,
    //                 'filterType': '',
    //                 'filterValue': '',
    //                 'value': '',
    //             },
    //             {
    //                 'isUsed': false,
    //                 'filterType': '',
    //                 'filterValue': '',
    //                 'value': '',
    //             },
    //             {
    //                 'isUsed': false,
    //                 'filterType': '',
    //                 'filterValue': '',
    //                 'value': '',
    //             }
    //        ],
    //     };

    //     this.onclick = this.onclick.bind(this);
    //     this.handleChange = this.handleChange.bind(this);
    // }

    // handleChange(index, target) {
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     let _filterValues = this.state.filterValues.reduce((acc, obj) => {acc.push({...obj}); return acc;}, []);
    //     _filterValues[index][name] = value;

    //     this.setState({
    //         filterValues: _filterValues
    //     });
    // }

    // onclick(e) {
    //     e.preventDefault();
    //     console.log(this.state.filterValues);
    // }

    render() {
        return (
            <form className="col-md-12 needs-validation" noValidate>
                <RenderAllFilters handleChange={this.props.handleChange} filterValues={this.props.filterValues} listFilterTypes={this.props.listFilterTypes} listFilters={this.props.listFilters} />
                <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={this.props.onclick}>I'm Feeling Lucky</button>
            </form>
        );
    }
}

export default Search2;