import React from 'react';
import Form  from 'semantic-ui-react/dist/commonjs/collections/Form/Form'
import 'semantic-ui-css/semantic.min.css'
import PropTypes from 'prop-types';
import validator from 'validator';
import { InlineError } from '../../actions/routeSplit'

class BetaForm extends React.Component {
    state = {
        data: {
            email: '',
            code_postal: '78520'
        },
        loading: false,
        errors: {},
    };

    onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value}
    });


    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.props
                .submit(this.state.data)
                .catch(err => this.setState({ errors: {global: err.response.data.email.toString() }, loading: false })
                )
        }
    };


    validate = (data) => {
        const errors = {};
        if (!validator.isEmail(data.email)) errors.email = "Le champs mail ne peut etre vide";
        // if (!validator.isPostalCode(data.code_postal, 'FR')) errors.code_postal = "Le code postal est incorrect";
        return errors;
    };

    render() {
        const {data, errors, loading} = this.state;
        return (
            <div>
                {!this.props.active ?
                    <Form onSubmit={this.onSubmit} loading={loading} className="ui form ">
                        <div className="ui centered grid">
                            <div className="ui huge icon input">
                                <input className="beta"
                                       placeholder=" Example@email.com"
                                       type="email"
                                       id="email"
                                       name="email"
                                       value={this.state.data.email}
                                       onChange={this.onChange}
                                />
                            </div>
                            <button className="ui large button betabutt">
                                    <span className="light1">
                                        S'inscrire à la beta
                                    </span>
                            </button>
                        </div>
                        {/*<div className="ui input large focus" error={!!errors.code_postal}>*/}
                        {/*<input*/}
                        {/*type="code_postal"*/}
                        {/*id="code_postal"*/}
                        {/*name="code_postal"*/}
                        {/*placeholder="Code Postal"*/}
                        {/*value={data.code_postal}*/}
                        {/*onChange={this.onChange}*/}
                        {/*/>*/}
                        {/*</div>*/}
                        {errors.email && <InlineError text={errors.email}/>}
                        {/*{errors.code_postal && <InlineError text={errors.code_postal} />}*/}
                        {!!errors.global && <InlineError text={errors.global}/>}
                    </Form>
                    :
                    <Form onSubmit={this.onSubmit} loading={loading} className="ui centered form ">
                        <div className="ui centered grid">
                            <div className="ui huge icon input">
                                <input className="ui centered beta1"
                                       placeholder=" Example@email.com"
                                       type="email"
                                       id="email"
                                       name="email"
                                       value={data.email}
                                       onChange={this.onChange}
                                />
                            </div>

                            <button className="ui large button centered betabutt1">
                                    <span className="light1">
                                        S'inscrire à la beta
                                    </span>
                            </button>
                        </div>
                        {/*<div className="ui input large focus" error={!!errors.code_postal}>*/}
                        {/*<input*/}
                        {/*type="code_postal"*/}
                        {/*id="code_postal"*/}
                        {/*name="code_postal"*/}
                        {/*placeholder="Code Postal"*/}
                        {/*value={data.code_postal}*/}
                        {/*onChange={this.onChange}*/}
                        {/*/>*/}
                        {/*</div>*/}
                        {errors.email && <InlineError text={errors.email}/>}
                        {/*{errors.code_postal && <InlineError text={errors.code_postal} />}*/}
                        {!!errors.global && <InlineError text={errors.global}/>}
                    </Form>
                }
            </div>
        );
    }
}

BetaForm.propTypes = {
    submit: PropTypes.func.isRequired
};
export default BetaForm;