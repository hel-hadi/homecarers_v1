import React from 'react'
import img_device from '@img/devicechange.jpg'
import img_secure from '@img/secure.jpg'
import img_chat from '@img/chat1.png'
import img_book from '@img/book1.png'
import img_agenda from '@img/agenda1.png'
import img_fiche from '@img/doctor-icon.png'

const OurSystemPage = () => (
    <div>
        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
                <div className="row">
                    <h4 className="ui horizontal header divider">
                        <a href="">Notre outil</a>
                    </h4>
                    <div className="eight wide column">
                        <div className="ui text container">

                            <h3 className="ui header">Communication et Suivi</h3>

                            <p className="textonepage"> Pour vous aider dans votre travail et améliorer le suivi du patient, nous développons des outils tels que le carnet de
                                liaison qui optimisera la vie medical du patient. <br/> <br/>
                                Plus que ca, Homecarers fournit une communication instantané , un Chat centré sur le patient, unique a chaque patient </ p>
                        </div>
                    </div>
                    <div className="six wide right floated column">
                        <img className="ui large rounded image" alt="medecin together" src={img_device} />
                    </div>
                </div>
                <h4 className="ui horizontal header divider">
                </h4>
                <div className="row">
                    <div className="seven wide right floated column">
                        <img className="ui medium rounded image" alt="medecin together" src={img_secure} />
                    </div>

                    <div className="nine wide column">
                        <h3 className="ui header petit">Et la sécurité, on en parle ?</h3>
                        <p className="textonepage1"> Les questions sur sécurité des données sont primordiales et Homecarers en fait un point d'honneur. <br/>
                            Toutes les données que nous allons stocker et enregistrer sont protéger  <br/>
                            Homecarers fournit un système sécurisé et assure ainsi un meilleur suivi, sécurisé, du patient.
                        </p>
                    </div>
                </div>
                <h4 className="ui horizontal header divider">
                    <a href="">Fonctionnalitées</a>
                </h4>
                <div className="ui equal width stackable internally celled grid">
                    <div className="ui four column grid">
                        <div className="column center aligned row">
                            <div className="column">
                                <img className="ui centered tiny  image" alt="chat" src={img_chat} />
                                <div className="ui hidden divider"></div>
                                <div className="ui hidden divider"></div>
                                <p className="gras"> Chat</p>
                                <div className="ui hidden divider"></div>

                                <p className="featurelight"> Un chat pour les profesionnels d'un même patient</p>
                            </div>
                            <div className="column">
                                <img className="ui centered tiny  image" alt="chat" src={img_book} />
                                <div className="ui hidden divider"></div>
                                <div className="ui hidden divider"></div>
                                <p className="gras"> Suivi medical et de soin</p>
                                <div className="ui hidden divider"></div>
                                <p className="featurelight"> Le cahier de liaison pour chaque patient </p>
                            </div>
                            <div className="column">
                                <img className="ui centered tiny  image" alt="chat" src={img_agenda} />
                                <div className="ui hidden divider"></div>
                                <div className="ui hidden divider"></div>
                                <p className="gras"> Agenda </p>
                                <div className="ui hidden divider"></div>
                                <p className="featurelight"> Gérer vos rendez-vous patient</p>
                            </div>
                            <div className="column">
                                <img className="ui centered tiny  image" alt="chat" src={img_fiche} />
                                <div className="ui hidden divider"></div>
                                <div className="ui hidden divider"></div>
                                <p className="gras"> Fiche pro </p>
                                <div className="ui hidden divider"></div>
                                <p className="featurelight"> Information sur les professionnels</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default OurSystemPage