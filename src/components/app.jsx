import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, withRouter} from 'react-router-dom'
import SignIn from "../containers/sign-in.jsx"
import Apps from "../containers/apps.jsx"
import Users from "../containers/users.jsx"
import {isValidToken} from "../actions/sign-in"
import {connect} from "react-redux"

import PrivateRoute from "./privateRoute.jsx"

export default function App() {
    return (
        <Switch>
            <Route exact path="/" component={SignIn} />
            <PrivateRoute exact path="/apps" component={Apps} />
            <PrivateRoute path="/apps/:id" component={Users} />
            <Route exact path="/*" component={SignIn} />
        </Switch>
    );
}
