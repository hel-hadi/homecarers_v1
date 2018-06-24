import React from 'react'
import img_device from '@img/device12.png'
import img_secure from '@img/cyber.png'

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
                            <h3 className="ui header">Un véritable outil de coopération interprofessionnelle</h3>
                            <p className="textonepage"> Notre plateforme met en avant la collaboration entre
                                praticiens en permettant l’échange de données anonymisées.
                                Celui-ci améliore les soins et le suivi médical, quel que soit le milieu de santé concerné.
                                <br /><br/>
                                Ces informations seront le tremplin de la recherche en santé publique de demain,
                                dès le temps de la consultation.
                            </p>
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
                        <img className="ui large1 rounded image" alt="medecin together" src={img_secure} />
                    </div>

                    <div className="nine wide column">
                        <h3 className="ui header petit">Un outil de santé sécurisé </h3>
                        <p className="textonepage1">Toutes les informations sont stockées chez un hébergeur de données de santé agréé et
                            l'outil a été conçu en conformité avec la Réglementation Générale sur la Protection des Données (RGPD).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default OurSystemPage