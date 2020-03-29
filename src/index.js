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

            <Route exact path={process.env.PUBLIC_URL+"/"} component={() => {
                return <Covid19Container></Covid19Container>
            }} />
            <Route exact path={process.env.PUBLIC_URL+"/page1"} component={() => {
                return <Covid19Container context={"page1"}></Covid19Container>
            }} />
            <Route exact path={process.env.PUBLIC_URL+"/page2"} component={() => {
                return <Covid19Container context={"page2"}></Covid19Container>
            }} />
            <Route exact path={process.env.PUBLIC_URL+"/page3"} component={() => {
                return <Covid19Container context={"page3"}></Covid19Container>
            }} />
            <Route path={process.env.PUBLIC_URL+"/test"} component={() => {
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
