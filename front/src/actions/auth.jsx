import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types.jsx";
import api from '../api.jsx'

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
})

export const login = credentials  => (dispatch) =>
    api.user.login(credentials).then(user => {
        localStorage.homecareJWT = user.token;
        dispatch(userLoggedIn(user));
    })

export const logout = () => (dispatch) => {
    localStorage.removeItem('homecareJWT');
    dispatch(userLoggedOut());
};

export const confirm = (token) => dispatch => api.user.confirm(token).then(user => {
    localStorage.homecareJWT = user.token;
    dispatch(userLoggedIn(user));
    })
