import React from 'react'
import Form  from 'semantic-ui-react/dist/commonjs/collections/Form/Form'
import validator from 'validator'
import { InlineError } from '../../actions/routeSplit'
import Popup from "reactjs-popup"

class ContactUsForm extends React.Component {
    state = {
        count1: 0,
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
        this.setState({ count1: 1 });
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props
                .submit(this.state.data).then(this.setState({loading: this.props.loader})).then( this.setState({
                data: {...this.state.data, email: '', message: ''}}))
        }
    };

    validate = (data) => {
        const errors = {};
        if (!validator.isEmail(data.email)) errors.email = "Vous devez renseigner votre adresse mail";
        if (!data.message) errors.message = "Votre message est vide !";
        return errors;
    };

    render() {
        const {data, errors, loading, count1} = this.state;
        if (count1 === 1) {
            this.state.count1 = 0;
        }
        return (
            <Form loading={loading} className="ui form">
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
                <Popup
                    trigger={
                        <button className="ui colorbutton button">
                                    <span className="regular1">
                                        Envoyer
                                    </span>
                        </button>
                    } modal>
                    {close => (
                        <div className="modal">
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                            <div className="header"> Confirmation </div>
                                <br/>
                            <span className="light2" >Mail : </span> <span className="regular2"> {this.state.data.email} </span>
                            <br/><br/>
                            <span className="light2">Message : </span> <span className="regular2">{this.state.data.message} </span>
                                <br /><br />
                            <div className="actions">
                                <button className="ui colorbutton button" type="submit"
                                         onClick={() => {this.onSubmit(); close()}}>Envoyer</button>
                                <button className="ui button" onClick={() => {close() }}>
                                    Fermer
                                </button>
                            </div>
                        </div>
                    )}
                </Popup>
                {(count1 === 1 && errors.email) && <InlineError text={errors.email} />}
                {(count1 === 1 && errors.message) && <InlineError text={errors.message} />}
            </Form>
        );
    }
}

export default ContactUsForm