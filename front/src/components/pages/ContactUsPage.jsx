import React from 'react'
import { ContactUsForm } from "../../actions/routeSplit"
import img_med from '@img/boy.svg'
import Alert from 'react-s-alert'
import { contact } from '../../actions/users'
import {connect} from "react-redux/dist/react-redux.min";

class ContactUsPage extends React.Component {
    state = {
        mail: 'Votre message a été envoyé avec succès !'
    };
    componentDidMount() {
        Alert.success('', {
            position: 'none'
        });
    }

    handleTop(text)
    {
        Alert.success(text, {
            position: 'top'
        });
    };
    submit = data => this.props.contact(data).then(this.handleTop(this.state.mail));
    render() {
        return (
            <div>
                <div className="ui vertical stripe segment">
                <div className="ui middle aligned stackable grid container">
                    <h3 className="ui horizontal header divider">
                        <a href="">Nous contacter</a>
                    </h3>
                    <div className="row">
                        <div className="seven wide centered column">
                            <p className="ui centered textonepage">
                                Une question ? Une suggestion ?
                            </p>
                            <ContactUsForm submit={this.submit}/>
                        </div>
                        <div className="seven wide column">
                            <img className="ui small centered image" alt="medecin together" src={img_med} />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { contact })(ContactUsPage);
