import React, { Component } from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import './style.scss'
class Animationonscroll extends Component {
    render() {
        return (
            <div>
                <h1>Scroll Animation Demo</h1>
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' className="animation-scroll">
                    <h1>React Animate On Scroll</h1>
                    <h2> Using:</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft' className="animation-scroll">
                    <h2><a href='https://daneden.github.io/animate.css/'>Animate.css</a></h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'>
                    <h1>React Animate On Scroll</h1>
                    <h2>Using:</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft' className="animation-scroll">
                    <h2><a href='https://daneden.github.io/animate.css/'>Animate.css</a></h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn' className="animation-scroll">
                    <h1>animateIn</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn='flipInY' animateOut='flipOutY' className="animation-scroll">
                    <h1>animateOut</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn='wobble' initiallyVisible={true} className="animation-scroll">
                    <h1>initiallyVisible</h1>
                </ScrollAnimation>
                <ScrollAnimation duration={5} animateIn='hinge' initiallyVisible={true} className="animation-scroll">
                    <h1>duration</h1>
                </ScrollAnimation>
                <ScrollAnimation delay={4000} animateIn='tada' initiallyVisible={true} className="animation-scroll">
                    <h1>delay</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounce' initiallyVisible={true} animateOnce={true} className="animation-scroll">
                    <h1>animateOnce</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn='flipInX'
                    afterAnimatedIn={function afterAnimatedIn(v) {
                        var t = "Animate In finished.\n";
                        t += 'v.onScreen: ' + v.onScreen + '\n';
                        t += 'v.inViewport: ' + v.inViewport;
                        alert(t);
                    }}>
                    <h1>afterAnimatedIn</h1>
                </ScrollAnimation>
            </div>
        );
    }
}
export default Animationonscroll;