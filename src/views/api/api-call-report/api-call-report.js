import React from 'react';

import { connect } from 'react-redux';
import {actionSelectMenu} from '../../../actions/index';

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = {
    actionSelectMenu
};

class ApiCallReport extends React.Component {
    componentDidMount() {
        this.props.actionSelectMenu(4);
    }

    render() {
        return (
            <div>ApiCallReport</div>
        );
    }
}

// export default ApiCallReport;
export default connect(mapStateToProps, mapDispatchToProps)(ApiCallReport);
