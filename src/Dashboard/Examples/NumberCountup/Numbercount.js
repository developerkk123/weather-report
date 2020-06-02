import React, { Component } from 'react';
import CountUp from 'react-countup';
import { Card, Image, Icon, Progress } from 'semantic-ui-react';
import image from '../../../asset/image/insta.png';
import './style.scss'
class Numbercount extends Component {
    render() {
        return (
            <div className="number-count">
                <h1>Number Count Animation</h1>
                <CountUp
                    start={-875.039}
                    end={160527.012}
                    duration={2.75}
                    separator=" "
                    decimals={4}
                    decimal=","
                    prefix="EUR "
                    suffix=" left"
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                >
                    {({ countUpRef, start }) => (
                        <div>
                            <span ref={countUpRef} />
                            <button onClick={start}>Start</button>
                        </div>
                    )}
                </CountUp>
                <div className="card">
                    <img src={image} /><br></br>
                    <span>
                        <span><b><CountUp end={425} duration={5} /></b></span> posts |
                      <span><b><CountUp end={6230} duration={5} /></b></span> followers |
                      <span><b><CountUp end={256} duration={5} /></b></span> following
                    </span>
                </div>
                <div className="dashboard-card">
                    <span><b><CountUp end={43423} duration={5} decimal=","/></b></span><br></br>
                    <Icon name='cart' className="icon" />
                    <br></br>
                    <Progress percent={70} size='tiny' color='brown' />
                    <h4>Total order</h4>
                    <p>+70.2<span><Icon name="arrow up" size="tiny" /></span></p>
                </div>
            </div>
        )
    }
}
export default Numbercount;