import React from 'react';
import { PacmanLoader } from 'react-spinners';

import './loader.css';

import { css } from 'react-emotion';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return <PacmanLoader
            className={override}
            sizeUnit={"px"}
            size={15}
            color={'#434650'}
            loading={this.state.loading} />
    }
}

export default Loader;