import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { createBrowserHistory } from "history";
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from "react-router-dom";
import Covid19Container from './container/Covid19Container';
import './index.css';
import * as serviceWorker from './serviceWorker';
const hist = createBrowserHistory();
ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route exact path={process.env.PUBLIC_URL+"/"} component={() => {
                console.log("redirect to" ,process.env.PUBLIC_URL+"/")
                return <Covid19Container context={"page1"}></Covid19Container>
            }} />
            <Route exact path={process.env.PUBLIC_URL+"/home"} component={() => {
                console.log("redirect to" , process.env.PUBLIC_URL+"/home")
                return <Covid19Container context={"page1"}></Covid19Container>
            }} />
            <Route exact path={process.env.PUBLIC_URL+"/page2"} component={() => {
                return <Covid19Container context={"page2"}></Covid19Container>
            }} />
            <Route exact path={process.env.PUBLIC_URL+"/page3"} component={() => {
                return <Covid19Container context={"page3"}></Covid19Container>
            }} />
            <Route exact path={process.env.PUBLIC_URL+"/page4"} component={() => {
                return <Covid19Container context={"page4"}></Covid19Container>
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
