import React, {Component} from 'react';

import Header from '../header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';
import HomePage from '../pages/HomePage'
import AuthorizationPage from '../pages/AuthorizationPage'
import RegistrationPage from "../pages/RegistrationPage";
import QuestionPage from "../pages/QuestionPage";

export default class App extends Component {
    render () {
        return (
            <div>
                <Router>
                    <Header />
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/authorization' exact component={AuthorizationPage}/>
                    <Route path='/registration' exact component={RegistrationPage}/>
                    <Route path='/question' exact component={QuestionPage}/>
                </Router>
            </div>
        );
    }
};
