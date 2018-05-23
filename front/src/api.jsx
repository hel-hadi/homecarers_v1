import axios from 'axios'

export default {
    user: {
        beta: (data) =>
            axios.post('http://prod-homecarers-api.herokuapp.com/api/landing_users/', data,
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user),
        contact: (data) =>
            axios.post('http://prod-homecarers-api.herokuapp.com/api/contact_messages/', data,
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user),
        login: (credentials) =>
            axios.post('https://prod-homecarers-api.herokuapp.com/api/auth', { credentials },
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user),
        signup: user =>
            axios.post('https://prod-homecarers-api.herokuapp.com/api/users', { user },
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user),
        confirm: token =>
            axios.post('https://prod-homecarers-api.herokuapp.com/api/auth/confirmation', { token },
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user)
    },
}