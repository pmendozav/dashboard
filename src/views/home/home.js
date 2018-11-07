import React from 'react';
import { connect } from 'react-redux';

import { AdminIndexHeader } from '../../components/indexbody/indexbody';
import Chart from '../../components/chart/chart';

import {actionSelectMenu} from '../../actions/index';

import './home.css';

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = {
    actionSelectMenu
};

class Home extends React.Component {
    componentDidMount() {
        this.props.actionSelectMenu(0);
    }

    render() {
        return (
            <div className='home'>
                Home <br/>

                <AdminIndexHeader />
                <Chart id="myChart" />
            </div>
        );
    }
}

// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);