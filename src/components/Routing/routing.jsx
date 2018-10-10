import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import App from '../App/App';

export default class Routing extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route path="/" component={App}/>
                </React.Fragment>
            </Router>
        );
    }
}
