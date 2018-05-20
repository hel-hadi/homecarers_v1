import React from 'react'
import img_device from '@img/device12.png'
import img_secure from '@img/secure.jpg'

const OurSystemPageMobile = () => (
    <div>
        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
                <div className="row">
                    <h4 className="ui horizontal header divider">
                        <a>Notre outil</a>
                    </h4>
                    <div className="eight wide column">
                        <div className="ui text container">
                            <h3 className="ui header">Communication et Suivi</h3>
                            <p className="ui centered textonepage"> Homecarers est un logiciel en ligne qui connecte les patients et les professionnels
                                de santé via un outil principal :
                                Le carnet de liaison.<br/>
                                Celui-ci améliore les soins et le suivi médical, quel que soit le milieu de santé concerné.
                                <br /><br/>
                                Un des autres atouts de Homecarers est de mettre en relation tous les professionnels de santé
                                qui collaborent autour d’un même patient.
                            </ p>
                        </div>
                    </div>
                    <div className="six wide right floated column">
                        <img className="ui large centered rounded image" alt="medecin together" src={img_device} />
                    </div>
                </div>
                <h4 className="ui horizontal header divider">
                </h4>
                <div className="row">
                    <div className="nine wide column">
                        <div className="ui text container">

                        <h3 className="ui header">Un outil de santé sécurisé</h3>
                            <p className="ui centered textonepage">Toutes les informations sont stockées chez un hébergeur de données de santé agréé et
                                l'outil a été conçu en conformité avec la Réglementation Générale sur la Protection des Données (RGPD).
                            </p>
                        </div>
                    </div>
                    <div className="seven wide right floated column">
                        <img className="ui medium centered rounded image" alt="mimage securite" src={img_secure} />
                    </div>
                </div>
            </div>
        </div>
    </div>

);

export default OurSystemPageMobile