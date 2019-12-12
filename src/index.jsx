import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

import SignIn from './containers/sign-in.jsx';
import Apps from './containers/Apps.jsx';
import Users from './containers/Users.jsx';

import rootReducer from './reducers/root-reducer';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
const PrivateRoute = ({ component, ...options }) => {
    let authenticated   = false;

    let finalComponent = authenticated ? component : SignIn;

    return <Route {...options} component={finalComponent} />;
};

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={SignIn} />
                <PrivateRoute exact path="/apps" component={Apps} />
                <PrivateRoute path="/apps/:id" component={Users} />
                <Route exact path="/*" component={SignIn} />

            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
);
