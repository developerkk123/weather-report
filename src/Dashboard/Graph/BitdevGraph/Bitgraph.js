import React, { Component } from 'react';
import { Grid, Card } from 'semantic-ui-react';
import BarChart from '@bit/recharts.recharts.bar-chart';
import Bar from '@bit/recharts.recharts.bar';
import XAxis from '@bit/recharts.recharts.x-axis';
import YAxis from '@bit/recharts.recharts.y-axis';
import CartesianGrid from '@bit/recharts.recharts.cartesian-grid';
import Tooltip from '@bit/recharts.recharts.tooltip';
import Legend from '@bit/recharts.recharts.legend';
import AreaChart from '@bit/recharts.recharts.area-chart';
import Area from '@bit/recharts.recharts.area';
import Dataset from '@bit/nexxtway.react-rainbow.dataset';
import Chart from '@bit/nexxtway.react-rainbow.chart';
import Pichart from '../Pichart';
import './style.scss';
const data = [
    {
        name: 'Jan', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Feb', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Mar', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Apr', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'May', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'June', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'July', uv: 3490, pv: 4300, amt: 2100,
    },
];

const containerStyles = {
    width: 390,
    height: 190
};

class Bitgraph extends Component {
    render() {
        return (
            <div className="bitgraph">
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>Country-sales</Card.Header>
                                </Card.Content>
                                <Card.Content>
                                    <Pichart />
                                </Card.Content>
                            </Card>

                        </Grid.Column>
                        <Grid.Column>
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>Monthly-sales</Card.Header>
                                </Card.Content>
                                <Card.Content>
                                    <BarChart
                                        width={400}
                                        height={190}
                                        data={data}
                                        margin={{
                                            top: 20, right: 30, left: 20, bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        {/* <Bar dataKey="pv" stackId="a" fill="#8884d8" /> */}
                                        <Bar dataKey="uv" stackId="a" fill="#36A2EB" />
                                    </BarChart>
                                </Card.Content>
                            </Card>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>Sale</Card.Header>
                                </Card.Content>
                                <Card.Content>
                                    <div style={containerStyles}>
                                        <div>
                                            <Chart
                                                labels={['2010', '2011', '2012', '2013']}
                                                type="line"
                                            >
                                                <Dataset
                                                    title="Dataset 1"
                                                    values={[23, 45, 123, 56]}
                                                    backgroundColor="#1de9b6"
                                                    borderColor="#1de9b6"
                                                />
                                                <Dataset
                                                    title="Dataset 2"
                                                    values={[66, 100, 30, 156]}
                                                    backgroundColor="#01b6f5"
                                                    borderColor="#01b6f5"
                                                />
                                            </Chart>
                                        </div>
                                    </div>
                                </Card.Content>
                            </Card>

                        </Grid.Column>
                        <Grid.Column>
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>Sale</Card.Header>
                                </Card.Content>
                                <Card.Content>
                                    <AreaChart
                                        width={400}
                                        height={190}
                                        data={data}
                                        margin={{
                                            top: 10, right: 30, left: 0, bottom: 0,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#36A2EB" />
                                    </AreaChart>
                                </Card.Content>
                            </Card>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div >
        );
    }
}
export default Bitgraph;