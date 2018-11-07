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

class ConnectLandedCost extends React.Component {
    componentDidMount() {
        this.props.actionSelectMenu(6);
    }

    render() {
        return (
        <div>ConnectLandedCost</div>
        );
    }
}

// export default ConnectLandedCost;
export default connect(mapStateToProps, mapDispatchToProps)(ConnectLandedCost);
