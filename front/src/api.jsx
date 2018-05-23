import axios from 'axios'

export default {
    user: {
        beta: (data) =>
            axios.post('http://www.homecarers.co/api/landing_users/', data,
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user),
        contact: (data) =>
            axios.post('http://www.homecarers.co/api/contact_messages/', data,
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user),
        login: (credentials) =>
            axios.post('https://www.homecarers.co/api/auth', { credentials },
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user),
        signup: user =>
            axios.post('https://www.homecarers.co/api/users', { user },
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user),
        confirm: token =>
            axios.post('https://www.homecarers.co/api/auth/confirmation', { token },
                { headers: {'Content-Type': 'application/json',}}).then(res => res.data.user)
    },
}