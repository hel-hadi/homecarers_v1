import axios from 'axios'

export default {
    user: {
        login: (credentials) =>
            axios.post('https://frozen-bayou-97220.herokuapp.com/api/auth', { credentials },
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user),
        signup: user =>
            axios.post('https://frozen-bayou-97220.herokuapp.com/api/users', { user },
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user),
        confirm: token =>
            axios.post('https://frozen-bayou-97220.herokuapp.com/api/auth/confirmation', { token },
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user)
    }
}