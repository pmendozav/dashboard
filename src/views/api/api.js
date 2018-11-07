import React from 'react';
import { Route } from "react-router-dom";

import './api.css';

import EdtCallSearch from './edt-call-search/edt-call-search';
import ConnectLandedCost from './connect-landed-cost/connect-landed-cost';
import ApiCallReport from './api-call-report/api-call-report';

class Api extends React.Component {
    render() {
        return (
            <div className='workspace'>
                <Route exact path="/api/edt" component={EdtCallSearch} />
                <Route exact path="/api/landed" component={ConnectLandedCost} />
                <Route exact path="/api/report" component={ApiCallReport} />
            </div>
            // <EdtCallSearch />
        );
    }
}

export default Api;
// export default connect(mapStateToProps, mapDispatchToProps)(Api);
