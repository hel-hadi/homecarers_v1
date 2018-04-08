import React from 'react';
import { Message, Form} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import validator from 'validator';

class LoginForm extends React.Component {
    state = {
        data: {
            email: '',
            password: ''
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
                .catch(err => this.setState({ errors: err.response.data.errors, loading: false })
                );
        }
    };

    validate = (data) => {
        const errors = {};
        if (!validator.isEmail(data.email)) errors.email = "Invalid Email";
        if (!data.password) errors.password = "Can't be blank";
        return errors;
    };

    render() {
        const { data, errors, loading }= this.state;
        return (
            <Form onSubmit={this.onSubmit} loading ={loading} className="ui  large form">
                <div className="ui stacked segment">
                    { errors.global && (
                        <Message negative>
                            <Message.Header> Something Went Wrong</Message.Header>
                            <p>{errors.global}</p>
                        </Message>
                    )}
                    <div className="field" error={!!errors.email} >
                        <div className="ui left icon input">
                            <i className="user icon"></i>
                            <label htmlFor="email"></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@example.com"
                                value={data.email}
                                onChange={this.onChange}
                            />
                        </div>
                        {errors.email && <p> error </p>}
                    </div>

                    <div className="field" error={!!errors.password} >
                        <div className="ui left icon input">
                            <i className="user icon"></i>
                            <label htmlFor="password"></label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Make it secure"
                                value={data.password}
                                onChange={this.onChange}
                            />
                        </div>
                        {errors.password && <p> error </p>}
                    </div>
                    <button className="ui fluid large teal submit button">Login</button>
                </div>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};
export default LoginForm;