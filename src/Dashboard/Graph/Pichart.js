import React, { Component } from 'react';
import { Chart } from '@bit/primefaces.primereact.chart';

const Pidata = {
    labels: ['India', 'USA', 'UK'],
    datasets: [
        {
            data: [200, 150, 300],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
    ]
};

class Pichart extends Component {
    render() {
        return (
            <div>
                <Chart type='pie' data={Pidata} />
            </div>
        )
    }
}
export default Pichart;
