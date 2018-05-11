import React from 'react'
import img_chat from '@img/chat1.png'
import img_book from '@img/book1.png'
import img_agenda from '@img/agenda1.png'
import img_fiche from '@img/doctor-icon.png'


const FeaturesWeb = () => (
    <div>
        <div className="ui vertical stripe segment">
            <div className="ui container">
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

export default FeaturesWeb