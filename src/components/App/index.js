import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
// import Carousel from '../Carousel';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import "./app.css"
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import ContactUs from '../ContactUs';

const App = () => (
    <Router>
        <div>

            <Navigation />



            <hr />
            <div className="main-content">
                {/* <Carousel /> */}
                {/* <Route exact path={ROUTES.LANDING} component={LandingPage} /> */}
                <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
                <Route
                    exact
                    path={ROUTES.PASSWORD_FORGET}
                    component={PasswordForgetPage}
                />
                <Route exact path={ROUTES.HOME} component={HomePage} />
                <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
                <Route exact path={ROUTES.ADMIN} component={AdminPage} />
                <Route exact path={ROUTES.CONTACTUS} component={ContactUs} />
            </div>
        </div>
    </Router>
);

export default withAuthentication(App);