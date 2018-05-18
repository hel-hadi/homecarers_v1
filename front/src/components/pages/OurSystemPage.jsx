import React from 'react'
import img_device from '@img/device12.png'
import img_secure from '@img/secure.jpg'

const OurSystemPage = () => (
    <div>
        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">

                <div className="row">
                    <h4 className="ui horizontal header divider">
                        <a> Notre outil</a>
                    </h4>
                    <div className="eight wide column">
                        <div className="ui text container">

                            <h3 className="ui header">Communication et Suivi</h3>

                            <p className="textonepage"> Homecarers est un logiciel en ligne qui connecte les patients et les professionnels
                                de santé via un outil principale :
                                <br/><br/>
                                Le carnet de liaison.
                                qui améliore les soins et le suivi médical, quelque soit le milieux de santé concerné.
                                <br /><br/>
                                L‘autre atout de Homecarers est de mettre en relation tous les professionnels
                                de santé qui collabore autour d’un même patient.
                            </ p>
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
                        <h3 className="ui header petit">Un outil de santé sécurisé </h3>
                        <p className="textonepage1">Toutes les informations sont stockées chez un hébergeur de données de santé
                            agréé et a été conçu en conformité avec la Réglementation Générale sur la Protection des Données (RGPD).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default OurSystemPage