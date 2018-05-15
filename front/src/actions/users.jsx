import React from 'react'
import api from '../api.jsx'
import { userLoggedIn } from "./auth.jsx"

export const signup = (data) => (dispatch) =>
    api.user.signup(data).then(user => {
        localStorage.homecareJWT = user.token;
        dispatch(userLoggedIn(user));
    });

export const beta = (data) => (dispatch) =>
    api.user.beta(data).then(user => {
    });

export const contact = (data) => (dispatch) =>
    api.user.contact(data).then(user => {
    });
