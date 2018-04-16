import React from 'react';
import Form  from 'semantic-ui-react/dist/commonjs/collections/Form/Form'
import 'semantic-ui-css/semantic.min.css'
import PropTypes from 'prop-types';
import validator from 'validator';
import InlineError from '../../messages/InlineError'

class BetaForm extends React.Component {
    state = {
        data: {
            email: '',
            code_postal: ''
        },
        loading: false,
        errors: {}
    };
    onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value}
    });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props
                .submit(this.state.data)
                .catch(err => this.setState({ errors: {global: err.response.data.email.toString() }, loading: false })
                );
            //     .catch((err) => {
            //     console.log('catch response', {global: err.response.data.email.toString() })
            // });

        }
    };

    validate = (data) => {
        const errors = {};
        if (!validator.isEmail(data.email)) errors.email = "Ce champs ne peut etre vide";
        if (!validator.isPostalCode(data.code_postal, 'FR')) errors.code_postal = "Le code postal est incorrect";
        return errors;
    };

    render() {
        const { data, errors, loading } = this.state;
        return (
            <Form onSubmit={this.onSubmit} loading={loading} className="ui form">
                <div className="ui input large focus" error={!!errors.email}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Adresse email..."
                        value={data.email}
                        onChange={this.onChange}
                    />
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
                </div>
                    <button className="ui medium large teal button">Inscrivez-vous à la bêta</button>
                {errors.email && <InlineError text={errors.email} />}
                {errors.code_postal && <InlineError text={errors.code_postal} />}
                {!!errors.global && <InlineError text={errors.global} />}
            </Form>
        );
    }
}

BetaForm.propTypes = {
    submit: PropTypes.func.isRequired
};
export default BetaForm;