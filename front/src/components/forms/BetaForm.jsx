import React from 'react';
import Form  from 'semantic-ui-react/dist/commonjs/collections/Form/Form'
import 'semantic-ui-css/semantic.min.css'
import PropTypes from 'prop-types';
import validator from 'validator';
import { InlineError } from '../../actions/routeSplit'

class BetaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count_global: 1,
            data: {
                email: '',
                code_postal: '78520'
            },
            loading: this.props.loader,
            errors: {},
        }
    }

    onChange = e => {
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        });
        this.state.count_global = 0;
    };

    onSubmit = () => {
        this.setState({ count_global: 1 });
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props
                .submit(this.state.data).then(this.setState({loading: this.props.loader})).then( this.setState({
                data: {...this.state.data, email: ''}}))
                .catch(err => this.setState({ errors: {global: err.response.data.email.toString() }, loading: false })
                )
        }
    };


    validate = (data) => {
        const errors = {};
        if (!validator.isEmail(data.email)) errors.email = "Vous devez renseigner votre adresse mail !";
        // if (!validator.isPostalCode(data.code_postal, 'FR')) errors.code_postal = "Le code postal est incorrect";
        return errors;
    };


    render() {
        const {data, errors, loading, count_global} = this.state;
        return (
            <div>
                {!this.props.active ?
                    <Form onSubmit={this.onSubmit} loading={loading} className="ui form">
                        <div className="ui centered grid">
                            <div className="ui huge icon input">
                                <input className="beta"
                                       placeholder=" Example@email.com"
                                       type="email"
                                       id="email"
                                       name="email"
                                       value={data.email}
                                       onChange={this.onChange}
                                />
                            </div>
                            <button className="ui large button clear betabutt">
                                    <span className="light1">
                                        S'inscrire à la bêta
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
                        {/*{errors.code_postal && <InlineError text={errors.code_postal} />}*/}
                        {(count_global === 1 && errors.email) && <InlineError text={errors.email}/>}
                        {(count_global === 1 && errors.global) && <InlineError text={errors.global} />}
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
                                        S'inscrire à la bêta
                                    </span>
                            </button>
                        </div>
                        {(count_global === 1 && errors.email) && <InlineError text={errors.email}/>}
                        {(count_global === 1 && errors.global) && <InlineError text={errors.global} />}
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