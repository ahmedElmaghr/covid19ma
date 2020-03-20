import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Covid19Container from './container/Covid19Container';

const hist = createBrowserHistory();
ReactDOM.render(
    <Router history={hist}>
        <Switch>

            <Route exact path="/" component={() => {
                return <Covid19Container></Covid19Container>
            }} />
            <Route exact path="/covid19wordwide" component={() => {
                return <Covid19Container context={"covid19wordwide"}></Covid19Container>
            }} />
            <Route exact path="/covid19ma" component={() => {
                return <Covid19Container context={"covid19ma"}></Covid19Container>
            }} />
            <Route exact path="/infos" component={() => {
                return <Covid19Container context={"infos"}></Covid19Container>
            }} />
            <Route path="/test" component={() => {
                return <div>This is a test page</div>
            }} />
        </Switch>
    </Router>
    , document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
