import React from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

class BetaForm extends React.Component {
    state = {
        data: {
            email: '',
            code_postal: ''
        },
        loading: 0,
        errors: {}
    };
    onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value}
    });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        console.log(errors);
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props
                .submit(this.state.data)
                .catch(err => this.setState({ errors: err.response.data.errors, loading: false })
                );
        }
    };

    validate = (data) => {
        const errors = {};
        if (!validator.isEmail(data.email)) errors.email = "cette adresse n'est pas valide";
        if (!validator.isPostalCode(data.code_postal, 'FR')) errors.code_postal = "Le code postal est incorrect";
        return errors;
    };

    render() {
        const { data, errors, loading }= this.state;
        return (
            <form onSubmit={this.onSubmit} loading={loading}>
                <div className="ui input large focus" error={!!errors.email}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Adresse email..."
                        value={data.email}
                        onChange={this.onChange}
                    />
                    {errors.email && <span style={{ color: "#f9c500" }}> {errors.email}</span>}
                </div>
                <div className="ui input large focus" error={!!errors.code_postal}>
                    <input
                        type="code_postal"
                        id="code_postal"
                        name="code_postal"
                        placeholder="Code Postal"
                        value={data.code_postal}
                        onChange={this.onChange}
                    />
                    {errors.code_postal && <span style={{ color: "#f9c500" }}> {errors.code_postal}</span>}
                </div>
                    <button className="ui medium large teal button">Inscrivez-vous à la bêta</button>
            </form>
        );
    }
}

BetaForm.propTypes = {
    submit: PropTypes.func.isRequired
};
export default BetaForm;