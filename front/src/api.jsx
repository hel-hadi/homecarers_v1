import axios from 'axios'

export default {
    user: {
        login: (credentials) =>
            axios.post('/api/auth', {credentials}).then(res => res.data.user),
        signup: user =>
            axios.post('/auth', { user }).then(res => res.data.user),
        confirm: token =>
            axios.post("/api/auth/confirmation", {token}).then(res.data.user)
    }
}