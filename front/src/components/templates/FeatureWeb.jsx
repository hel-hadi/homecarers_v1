import React from 'react'
import img_chat from '@img/chat1.png'
import img_book from '@img/book1.png'
import img_blason from '@img/blason2.png'
import img_patient from '@img/patient12.png'
import img_profession from '@img/profession1.png'
import img_fiche from '@img/doctor-icon.png'
import img_link from '@img/linker1.png'
import img_note from '@img/note12.png'
import img_star from '@img/star1.png'


const FeaturesWeb = () => (
    <div>

        <div className="ui vertical stripe segment">
            <div className="ui container">
        <h4 className="ui horizontal header divider">
            <a>Fonctionnalités</a>
        </h4>

        <div className="ui equal width stackable internally celled grid">
            <div className="ui one column grid">
                <div className="column center aligned row">
                    <div className="column">
                        <img className="ui centered tiny  image" alt="chat" src={img_book} />
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <p className="gras"> Service de gestion médicale
                        </p>
                        <div className="ui hidden divider"></div>
                        <p className="featurelight">Un outil de gestion et de facturation médicale</p>
                    </div>
                </div>
            </div>
        </div>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
                <div className="ui three column grid">
                    <div className="column center aligned row">
                        <div className="ui vertical divider"></div>
                        <div className="column ecart">
                            <img className="ui centered mini1 image" alt="chat" src={img_link} />
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <p className="featurelight">
                                Un outil de gestion interconnecté adapté à vos besoins.
                            </p>
                        </div>
                        <div className="column ecart2">
                            <img className="ui centered mini1 image" alt="chat" src={img_note} />
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <p className="featurelight">
                                Elaboration de bases de données médicales anonymisées partagées pour l’innovation
                            </p>
                            <div className="ui three column grid">
                            </div>
                        </div>

                        <div className="column ecart2">
                            <img className="ui centered mini1 image" alt="chat" src={img_blason} />
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <p className="featurelight">
                                Degré d’accréditation et d'accès aux informations médicales
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

);

export default FeaturesWeb