import React from 'react';
import './search.css';

const ComputeOptions = ({ options }) => {
    return (
        options.map(function (e, index) {
            return ( <option value={e}>{e}</option> );
        })
    )
};

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            filterType: '',
            text: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.onclick = this.onclick.bind(this);
    }

    onclick(e) {
        e.preventDefault();
        this.props.onclick(this.state.filterType, this.state.text);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <form className="col-md-8 order-md-1 needs-validation" noValidate>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">Text</label>
                        <input name="text" value={this.props.text} type="text" className="form-control" id="firstName" placeholder="" required onChange={this.handleChange} />
                        <div className="invalid-feedback">Valid text is required.</div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="state">Filter</label>
                        <select name="filterType" value={this.state.filterType} className="custom-select d-block w-100" onChange={this.handleChange} required>
                            <option value="">Select..</option>
                            <ComputeOptions options={this.props.options} />
                        </select>
                        <div className="invalid-feedback">Please provide a filter.</div>
                    </div>

                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="same-address" />
                        <label className="custom-control-label" htmlFor="same-address">Use wildcards </label>
                    </div>
                </div>

                <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={this.onclick}>I'm Feeling Lucky</button>
            </form>
        );
    }
}

export default Search;