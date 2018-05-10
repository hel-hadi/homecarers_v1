import React from 'react'
import { ContactUsForm } from "../../actions/routeSplit"
import img_med from '@img/boy.svg'


class ContactUsPage extends React.Component {
    // submit = data => this.props.contact(data).then(() => this.props.history.push("/"));
    render() {
        return (
            <div>
                <div className="ui vertical stripe segment">

                <div className="ui middle aligned stackable grid container">
                    <h3 className="ui horizontal header divider">
                        <a href="">Contactez nous</a>
                    </h3>
                    <div className="row">
                        <div className="seven wide centered column">
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

export default ContactUsPage