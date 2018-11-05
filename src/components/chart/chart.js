import React from 'react';
import { Line } from 'react-chartjs-2';
import './chart.css';

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    label: 'Population',
                    data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#007bff',
                    borderWidth: 4,
                    pointBackgroundColor: '#007bff'
                }]
            }
        }
    }

    render() {
        return (
            <div className='chart'>
                <Line
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        );
    }
}

export default Chart;