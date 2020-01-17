import React, {useState} from 'react'
import {BrowserRouter as Router, Link, Route, Switch, withRouter} from 'react-router-dom'
import SignIn from "../containers/sign-in.jsx"
import {connect} from "react-redux"
import {isValidToken} from "../actions/sign-in"


export default function PrivateRoute({props, component, ...options}) {
    const [validToken, checkToken] = useState(false)

    isValidToken().then(result => {
        checkToken(result)
    })

    return (
       validToken ?  <Route {...options} component={component}/> : <Route {...options} component={SignIn}/>
    )

}
