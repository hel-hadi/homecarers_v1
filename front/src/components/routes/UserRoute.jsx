import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from "react-router-dom"

const UserRoute = ({ isAuthenticated, component: Component, ...rest}) => (
    <Route {...rest} render={props => isAuthenticated ? <Component {...props} /> : <Redirect to='/' /> } />
)

UserRoute.propTypes = {
    component: propTypes.func.isRequired,
    isAuthenticated: propTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps)(UserRoute);