import React from 'react'
import Form  from 'semantic-ui-react/dist/commonjs/collections/Form/Form'
import validator from 'validator'
import { InlineError } from '../../actions/routeSplit'

class ContactUsForm extends React.Component {
    state = {
        data: {
            email: '',
            message: '',
        },
        loading: false,
        errors: {}
    };

    onChange = e => this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value}
    });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props
                .submit(this.state.data).then(this.setState({loading: this.props.loader}))
        }
    };

    validate = (data) => {
        const errors = {};
        if (!validator.isEmail(data.email)) errors.email = "Votre adresse email est necessaire";
        if (!data.message) errors.message = "Vous ne pouvez pas envoyer un message vide";
        return errors;
    };

    render() {
        const {data, errors, loading} = this.state;
        return (
            <Form onSubmit={this.onSubmit} loading={loading} className="ui form">
                <div className="field">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Adresse E-mail"
                        value={this.state.data.email}
                        onChange={this.onChange}
                    />
                </div>
                <div className="field">
                    <textarea
                        placeholder="votre message"
                        id="message"
                        name="message"
                        placeholder="Votre Message"
                        value={data.message}
                        onChange={this.onChange}
                    >
                    </textarea>
                </div>
                {errors.email && <InlineError text={errors.email} />}
                {errors.message && <InlineError text={errors.message} />}
                <button className="ui colorbutton button" type="submit">Envoyer</button>
            </Form>
        );
    }
}

export default ContactUsForm