import React from 'react'
import Form  from 'semantic-ui-react/dist/commonjs/collections/Form/Form'
import validator from 'validator'
import InlineError from '../../messages/InlineError'

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
        this.setState({errors});
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props
                .submit(this.state.data)
        }
    };

    validate = (data) => {
        const errors = {};
        if (!validator.isEmail(data.email)) errors.email = "Ce champs ne peut etre vide";
        if (!data.message) errors.message = "Ce champs ne peut etre vide";
        return errors;
    };

    render() {
        const {data, errors, loading} = this.state;
        return (
            <Form onSubmit={this.onSubmit} loading={loading} className="ui form">
                <div className="field"  error={!!errors.email}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Adresse Email"
                        value={data.email}
                        onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email} />}
                </div>
                <div className="field" error={!!errors.message}>
                    <textarea
                        placeholder="votre message"
                        id="message"
                        name="message"
                        placeholder="Votre Message"
                        value={data.message}
                        onChange={this.onChange}
                    >
                    </textarea>
                    {errors.message && <InlineError text={errors.message} />}
                </div>
                <button className="ui teal button" type="submit">Submit</button>
            </Form>
        );
    }
}

export default ContactUsForm