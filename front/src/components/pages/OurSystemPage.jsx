import React from 'react'
import img_device from '@img/devicechange.jpg'
import img_secure from '@img/secure.jpg'

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

            </div>
        </div>
    </div>
);

export default OurSystemPage