import axios from 'axios'

export default {
    user: {
        beta: (data) =>
            axios.post('http://0.0.0.0:8000/api/landing_users/', data,
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user),
        contact: (data) =>
            axios.post('http://0.0.0.0:8000/api/contact_messages/', data,
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user),
        login: (credentials) =>
            axios.post('http://0.0.0.0:8000/api/auth', { credentials },
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user),
        signup: user =>
            axios.post('http://0.0.0.0:8000/api/users', { user },
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user),
        confirm: token =>
            axios.post('http://0.0.0.0:8000/api/auth/confirmation', { token },
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user)
    },
}