import React from 'react';
import { Grid, Menu } from 'semantic-ui-react'
import SemanticButton from '../SemanticElement/Button.js'
import CodeEditor from '../../Editor/LiveCodeEditor.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SemanticMenu from '../SemanticElement/Menu.js';

class Home extends React.Component {

    state = {
        activeItem: 'Button'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Router>
                    <Grid>
                        <Grid.Row vertical divided>
                            <Grid.Column width={3}>
                                <Menu inverted vertical>
                                    <Menu.Item><Link to="/button">Button</Link></Menu.Item>
                                    <Menu.Item><Link to="/menu">Menu</Link></Menu.Item>
                                </Menu>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Switch>
                                    <Route path="/button"><h1>Button</h1><hr></hr><SemanticButton /></Route>
                                    <Route path="/menu"><h1>Menu</h1><hr></hr><SemanticMenu /></Route>
                                </Switch>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <h1>Try Code here</h1><hr></hr>
                                <CodeEditor />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Router>
            </div>
        );
    }
}
export default Home;