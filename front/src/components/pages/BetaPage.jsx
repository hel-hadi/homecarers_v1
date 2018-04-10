import React from 'react'
import propTypes from 'prop-types'
import Menu from '@temp/Menu.jsx'
import BetaForm from '@form/BetaForm'
import img_agenda from '@img/agenda.png'
import img_book from '@img/book.png'
import img_comm from '@img/comm.png'
import { beta } from "../../actions/users";

class BetaPage extends React.Component {
    submit = data => beta(data).then(() => this.props.history.push('/'));
    render() {
        return (
            <div>
                <Menu />
                <div className="ui inverted masthead segment">
                    <div className="ui container">
                        <div className="row">
                            <div className="eight wide column">
                                <h1 className="ui header1">Homecarers <sup className="homefont2">Beta</sup></h1>
                                <h2 className="ui homeblue header1">L’organe de liaison des intervenants à domicile</h2>
                                <h3 className="ui homeblue header1"> Rejoignez notre bêta ouverte et aidez-nous à
                                    ameliorer <br/>l'avenir des soins à domicile</h3><br/>
                                <div className="ui hidden divider"></div>
                                <BetaForm submit={this.submit}/>

                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="ui centered header3">Fonctionnalités</h2>
                <div className="ui middle aligned stackable grid container">
                    <div className="three column center aligned row">
                        <div className="column">
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <img className="ui centered tiny circular image" alt="chat" src={img_comm}/>
                            <div className="ui hidden divider"></div>
                            <h3 className="ui homefont homeblue large">
                                Chat Homecarers
                            </h3>
                        </div>
                        <div className="column">
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <img className="ui centered tiny circular image" alt="cahier" src={img_book}/>
                            <div className="ui hidden divider"></div>
                            <h3 className="ui homefont homeblue large">
                                Cahier de liaison
                            </h3>
                        </div>
                        <div className="column">
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <img className="ui centered tiny circular image" alt="agenda" src={img_agenda}/>
                            <div className="ui hidden divider"></div>
                            <h3 className="ui homefont homeblue large ">
                                Agenda collaboratif
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

BetaPage.propTypes = {
    history: propTypes.shape({
        push: propTypes.func.isRequired
    }).isRequired,
    beta: propTypes.func.isRequired
}

export default BetaPage