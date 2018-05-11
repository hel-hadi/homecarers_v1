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

                            <p className="textonepage"> Pour aider le professionnel de sante dans son travail et améliorer le suivi du patient, le carnet de
                                liaison améliore les soins, quelques soient les différents milieux de soins concernes <br/>
                                <br/><br/>L'autre atout d'Homecarers .. un Chat centré sur le patient et unique a chaque patient
                                Homecarers fournit un suivi plus intelligente des patients ,continue et distant, en
                                temps réel, pour améliorer le rétablissement des patients.
                                <br />
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
                        <h3 className="ui header petit">Un systeme de soins et de sante sécurise ?</h3>
                        <p className="textonepage1"> Les questions sur sécurité des données sont primordiales et nous en faisons un point d'honneur. <br/>
                            Toutes les données precieusement stocker et enregistrer sont protéger afin de respecter la vie du patient<br/>
                            Homecarers fournit un système sécurisé et assure ainsi un meilleur suivi de chaque personne.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default OurSystemPage