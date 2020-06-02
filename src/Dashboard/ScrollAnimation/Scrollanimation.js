import React, { Component } from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Card, Image, Icon } from 'semantic-ui-react';
import image from '../../asset/image/techskill.jpg';
import './style.scss';

class Animationonscroll extends Component {
    render() {
        return (
            <div>
                <h1>Scroll Animation Demo</h1>
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' className="animation-scroll">
                    <Card>
                        <Image src={image} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>@tech.skill_s</Card.Header>
                            <Card.Description>
                                Web developer
                                🔥Full stack Engineer 🔥
                                📚 HTML/CSS/JavaScript/MySQL/React/Java
                                📑 Code snippets🔥
                                📩 DM for coding &placement related quer
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a><Icon name='user' />585 Followers</a>
                        </Card.Content>
                    </Card>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft' className="animation-scroll">
                <Card>
                        <Image src={image} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>@tech.skill_s</Card.Header>
                            <Card.Description>
                                Web developer
                                🔥Full stack Engineer 🔥
                                📚 HTML/CSS/JavaScript/MySQL/React/Java
                                📑 Code snippets🔥
                                📩 DM for coding &placement related quer
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a><Icon name='user' />585 Followers</a>
                        </Card.Content>
                    </Card>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft' className="animation-scroll">
                <Card>
                        <Image src={image} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>@tech.skill_s</Card.Header>
                            <Card.Description>
                                Web developer
                                🔥Full stack Engineer 🔥
                                📚 HTML/CSS/JavaScript/MySQL/React/Java
                                📑 Code snippets🔥
                                📩 DM for coding &placement related quer
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a><Icon name='user' />585 Followers</a>
                        </Card.Content>
                    </Card>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn' className="animation-scroll">
                <Card>
                        <Image src={image} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>@tech.skill_s</Card.Header>
                            <Card.Description>
                                Web developer
                                🔥Full stack Engineer 🔥
                                📚 HTML/CSS/JavaScript/MySQL/React/Java
                                📑 Code snippets🔥
                                📩 DM for coding &placement related quer
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a><Icon name='user' />585 Followers</a>
                        </Card.Content>
                    </Card>
                </ScrollAnimation>
                <ScrollAnimation animateIn='flipInY' animateOut='flipOutY' className="animation-scroll">
                <Card>
                        <Image src={image} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>@tech.skill_s</Card.Header>
                            <Card.Description>
                                Web developer
                                🔥Full stack Engineer 🔥
                                📚 HTML/CSS/JavaScript/MySQL/React/Java
                                📑 Code snippets🔥
                                📩 DM for coding &placement related quer
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a><Icon name='user' />585 Followers</a>
                        </Card.Content>
                    </Card>
                </ScrollAnimation>
                <ScrollAnimation animateIn='wobble' initiallyVisible={true} className="animation-scroll">
                <Card>
                        <Image src={image} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>@tech.skill_s</Card.Header>
                            <Card.Description>
                                Web developer
                                🔥Full stack Engineer 🔥
                                📚 HTML/CSS/JavaScript/MySQL/React/Java
                                📑 Code snippets🔥
                                📩 DM for coding &placement related quer
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a><Icon name='user' />585 Followers</a>
                        </Card.Content>
                    </Card>
                </ScrollAnimation>
                <ScrollAnimation duration={5} animateIn='hinge' initiallyVisible={true} className="animation-scroll">
                <Card>
                        <Image src={image} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>@tech.skill_s</Card.Header>
                            <Card.Description>
                                Web developer
                                🔥Full stack Engineer 🔥
                                📚 HTML/CSS/JavaScript/MySQL/React/Java
                                📑 Code snippets🔥
                                📩 DM for coding &placement related quer
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a><Icon name='user' />585 Followers</a>
                        </Card.Content>
                    </Card>
                </ScrollAnimation>
                <ScrollAnimation delay={4000} animateIn='tada' initiallyVisible={true} className="animation-scroll">
                <Card>
                        <Image src={image} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>@tech.skill_s</Card.Header>
                            <Card.Description>
                                Web developer
                                🔥Full stack Engineer 🔥
                                📚 HTML/CSS/JavaScript/MySQL/React/Java
                                📑 Code snippets🔥
                                📩 DM for coding &placement related quer
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a><Icon name='user' />585 Followers</a>
                        </Card.Content>
                    </Card>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounce' initiallyVisible={true} animateOnce={true} className="animation-scroll">
                <Card>
                        <Image src={image} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>@tech.skill_s</Card.Header>
                            <Card.Description>
                                Web developer
                                🔥Full stack Engineer 🔥
                                📚 HTML/CSS/JavaScript/MySQL/React/Java
                                📑 Code snippets🔥
                                📩 DM for coding &placement related quer
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a><Icon name='user' />585 Followers</a>
                        </Card.Content>
                    </Card>
                </ScrollAnimation>
                <ScrollAnimation animateIn='flipInX'
                    afterAnimatedIn={function afterAnimatedIn(v) {
                        var t = "Animate In finished.\n";
                        t += 'v.onScreen: ' + v.onScreen + '\n';
                        t += 'v.inViewport: ' + v.inViewport;
                        alert(t);
                    }}>
                    <Card>
                        <Image src={image} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>@tech.skill_s</Card.Header>
                            <Card.Description>
                                Web developer
                                🔥Full stack Engineer 🔥
                                📚 HTML/CSS/JavaScript/MySQL/React/Java
                                📑 Code snippets🔥
                                📩 DM for coding &placement related quer
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a><Icon name='user' />585 Followers</a>
                        </Card.Content>
                    </Card>
                </ScrollAnimation>
            </div>
        );
    }
}
export default Animationonscroll;