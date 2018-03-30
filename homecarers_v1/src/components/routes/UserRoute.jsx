import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from "react-router-dom"

const UserRoute = () => (
    <div>f</div>
);

UserRoute.propTypes = {
    component: propTypes.func.isRequired,
    isAuthenticated: propTypes.bool.isRequired
};

function mapStateToProps(props) {
    return {
        isAuthenticated: !!state.user.token
    }
}

export default UserRoute