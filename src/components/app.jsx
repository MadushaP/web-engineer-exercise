import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import SignIn from "../containers/sign-in.jsx"
import Apps from "../containers/apps.jsx"
import Users from "../containers/users.jsx"

const PrivateRoute = ({ component, ...options }) => {
    let authenticated   = false;

    let finalComponent = authenticated ? component : SignIn;

    return <Route {...options} component={finalComponent} />;
};

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
