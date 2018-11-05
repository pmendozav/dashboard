import React from 'react';

import { AdminIndexHeader } from '../../components/indexbody/indexbody';
import Chart from '../../components/chart/chart';

import './home.css';


class Home extends React.Component {
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

export default Home;