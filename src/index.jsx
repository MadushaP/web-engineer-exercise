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
import App from './components/app.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
           <App/>
        </Router>
    </Provider>,
    document.getElementById('app')
);
