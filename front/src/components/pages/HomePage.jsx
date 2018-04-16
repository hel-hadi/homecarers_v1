import React from 'react'
import propTypes from 'prop-types'
import { Sidebar, SidebarItem } from 'react-responsive-sidebar'
import { Link } from "react-router-dom";
import { Dropdown } from 'semantic-ui-react'
import BetaForm from '@form/BetaForm'
import img_agenda from '@img/agenda.png'
import img_book from '@img/book.png'
import img_comm from '@img/comm.png'
import img_logo from '@img/logo_blanc.png'
import  { beta } from "../../actions/users";

class HomePage extends React.Component {
    submit = data => beta(data).then(() => this.props.history.push('/'));
    render() {
        return (
            <div>
                <div className="ui inverted secondary menu">
                    <div className="item">
                        <img className="ui tiny image" alt="doctor together" src={img_logo}/>
                    </div>
                    <Dropdown className="ui dropdown item" text="Qui sommes-nous ?" >
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to='/ourgoalpage' className="ui teal"> Our Goal </Dropdown.Item>
                            <Dropdown.Item as={Link} to='/oursystempage'> Our System </Dropdown.Item>
                            <Dropdown.Item as={Link} to='/aboutuspage'> About Us </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="right menu">
                        <a className="item">
                            <i className="facebook inverted big icon"></i>
                            <i className="linkedin inverted big icon"></i>
                        </a>
                    </div>
                </div>
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
                <div className="ui centered">Fonctionnalités</div>
                <div className="ui middle aligned stackable grid container">
                    <div className="three column center aligned row">
                        <div className="column">
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <img className="ui centered tiny circular image" alt="chat" src={img_comm}/>
                            <div className="ui hidden divider"></div>
                            <h3 className="ui homefont homeblue large ">
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

HomePage.propTypes = {
    history: propTypes.shape({
        push: propTypes.func.isRequired
    }).isRequired,
    beta: propTypes.func.isRequired
}

export default HomePage