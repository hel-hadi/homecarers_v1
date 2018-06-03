import React from 'react';
import Form  from 'semantic-ui-react/dist/commonjs/collections/Form/Form'
import 'semantic-ui-css/semantic.min.css'
import PropTypes from 'prop-types';
import validator from 'validator';
import { InlineError } from '../../actions/routeSplit'
import Popup from "reactjs-popup"
import '@css/styles.css'

class BetaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count_global: 1,
            data: {
                email: '',
                postal_code: '',
                profile: ''

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
        if (!this.state.data.postal_code){
            this.state.data.postal_code = '00000';
        }
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props
                .submit(this.state.data).then(this.setState({loading: this.props.loader})).then( this.setState({
                data: {...this.state.data, email: ''}}))
                .catch(err => this.setState({ errors: {global: err.response.data.email.toString() }, loading: false })
                )
        }
    };

    onLoader() {
        this.state.errors.email = '';
        this.state.errors.code_postal = '';
        this.state.errors.global = null ;
    }

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
                    <Form loading={loading} className="ui form">
                        <div className="ui centered grid">
                            <div className="ui huge icon input">
                                <input className="beta"
                                       placeholder="Exemple@email.com"
                                       type="email"
                                       id="email"
                                       name="email"
                                       value={data.email}
                                       onChange={this.onChange}
                                />
                            </div>
                            <Popup
                                trigger={
                                <button className="ui large button clear betabutt">
                                    <span className="light1">
                                        S'inscrire à la bêta
                                    </span>
                                </button>
                                } modal>
                                {close => (
                                    <div className="modal">
                                        <a className="close" onClick={close}>
                                            &times;
                                        </a>
                                        <div className="header"> Confirmation </div>
                                        <div className="content1">
                                            <br/>
                                            Nous utiliserons votre adresse e-mail pour vous envoyer occasionnellement
                                            des informations concernant le développement et le déroulement
                                            de la phase de test de Homecarers.
                                            <br/><br/>
                                            Votre code postal et votre catégorie seront utilisés uniquement à des fins statistiques par Homecarers et
                                            ne seront pas transmis à des tiers.
                                            <br /><br />
                                        </div>
                                        <div className="ui centered grid">
                                        <div className="two fields">
                                            <div className="field">
                                                <input
                                                    className="betaSelect"
                                                    type="postal_code"
                                                    id="postal_code"
                                                    name="postal_code"
                                                    placeholder="Code postal"
                                                    value={data.postal_code}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="field">
                                                <select
                                                    className="betaSelect"
                                                    type="profile"
                                                    id="profile"
                                                    name="profile"
                                                    placeholder="profile"
                                                    value={data.profile}
                                                    onChange={this.onChange}>
                                                    <option value="">------</option>
                                                    <option value="Patient">Patient</option>
                                                    <option value="Pro">Professionnel de la sante</option>
                                                </select>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="ui hidden divider"></div>
                                        <div className="actions">
                                            <button  className="positive ui button"
                                                     onClick={() => {this.onSubmit(); close()}}>Soumettre</button>
                                            <button className="ui button" onClick={() => {close() }}>
                                                Fermer
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        </div>

                        {(count_global === 1 && errors.email) && <InlineError text={errors.email}/>}
                        {(count_global === 1 && errors.global) && <InlineError
                            text="Cette adresse mail est déjà utilisée !" />}
                        {(errors.email || errors.global) && this.onLoader()}

                    </Form>
                    :
                    <Form loading={loading} className="ui centered form">
                        <div className="ui centered grid">
                            <div className="ui huge icon input">
                                <input className="ui centered beta1"
                                       placeholder=" Exemple@email.com"
                                       type="email"
                                       id="email"
                                       name="email"
                                       value={data.email}
                                       onChange={this.onChange}
                                />
                            </div>
                        </div>
                            <div className="ui centered grid">
                                <Popup
                                    trigger={
                                        <button className="ui large button clear betabutt1">
                                    <span className="light1">
                                        S'inscrire à la bêta
                                    </span>
                                        </button>
                                    } modal>
                                    {close => (
                                        <div className="modal">
                                            <a className="close" onClick={close}>
                                                &times;
                                            </a>
                                            <div className="header"> Confirmation </div>
                                            <div className="content1">
                                                <br/>
                                                Nous utiliserons votre adresse e-mail pour vous envoyer occasionnellement
                                                des informations concernant le développement et le déroulement
                                                de la phase de test de Homecarers.
                                                <br/><br/>
                                                Votre code postal et votre catégorie seront utilisés uniquement à des fins statistiques par Homecarers et
                                                ne seront pas transmis à des tiers.
                                                <br /><br />
                                            </div>
                                            <div className="ui centered grid">
                                                <div className="two fields">
                                                    <div className="field">
                                                        <input
                                                            className=""
                                                            type="text"
                                                            id="postal_code"
                                                            name="postal_code"
                                                            placeholder="Code postal"
                                                            value={data.postal_code}
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                    <div className="field">
                                                        <select
                                                            className=""
                                                            type="text"
                                                            id="profile"
                                                            name="profile"
                                                            value={data.profile}
                                                            onChange={this.onChange}>
                                                            <option value="Patient"> ------ </option>
                                                            <option value="Patient">Patient</option>
                                                            <option value="Pro">Professionnel de la sante</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button  className="positive ui button"
                                                         onClick={() => {this.onSubmit(); close()}}>Soumettre</button>
                                                <br/>
                                                <button className="ui  button" onClick={() => {close() }}>
                                                    Fermer
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </Popup>
                            </div>
                        {(count_global === 1 && errors.email) && <InlineError text={errors.email}/>}
                        {(count_global === 1 && errors.global) && <InlineError
                        text="Saisie incorrect ! Cette adresse mail est déjà utilisée !" />}
                        {(errors.email || errors.global) && this.onLoader()}

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