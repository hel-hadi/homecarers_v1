import React from 'react'
import { ContactUsForm } from "../../actions/routeSplit"
import img_med from '@img/devicechange.jpg'

class ContactUsPage extends React.Component {
    // submit = data => this.props.contact(data).then(() => this.props.history.push("/"));
    render() {
        return (
            <div>
                {/*<div className="ui inverted masthead segment">*/}
                    {/*<div className="ui container">*/}
                        {/*<div className="row">*/}
                            {/*<div className="eight wide column">*/}
                                {/*<h1 className="ui header1">Homecarers <sup className="homefont2">Beta</sup></h1>*/}
                                {/*<h2 className="ui homeblue header1">L’organe de liaison des intervenants à domicile</h2>*/}
                                {/*<div className="ui hidden divider"></div>*/}
                                {/*<h3 className="ui homeblue header1"> Aidez-nous à*/}
                                    {/*ameliorer l'avenir des soins à domicile<br/><br/> Contactez Nous</h3><br/>*/}
                                {/*<div className="ui hidden divider"></div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="ui hidden divider"></div>*/}
                {/*<div className="ui hidden divider"></div>*/}
                {/*<div className="ui hidden divider"></div>*/}
                <div className="ui middle aligned stackable grid container">
                    <h3 className="ui horizontal header divider">
                        <a href="">Contactez Nous</a>
                    </h3>

                    <div className="row">
                        <div className="seven wide centered column">
                            <ContactUsForm submit={this.submit}/>
                        </div>
                        <div className="seven wide column">
                            <img className="ui large rounded image" alt="medecin together" src={img_med} />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUsPage