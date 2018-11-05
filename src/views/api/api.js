import React from 'react';
import { Route } from "react-router-dom";

import './api.css';

import EdtCallSearch from './edt-call-search/edt-call-search';

class Api extends React.Component {
    render() {
        return (
            <div className='workspace'>
                <Route exact path="/api/edt" component={EdtCallSearch} />
            </div>
            // <EdtCallSearch />
        );
    }
}

export default Api;
// export default connect(mapStateToProps, mapDispatchToProps)(Api);
