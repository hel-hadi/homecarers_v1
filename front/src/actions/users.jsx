import api from '../api.jsx'
import { userLoggedIn } from "./auth.jsx"

export const signup = (data) => (dispatch) =>
    api.user.signup(data).then(user => {
        localStorage.homecareJWT = user.token;
        dispatch(userLoggedIn(user));
    })