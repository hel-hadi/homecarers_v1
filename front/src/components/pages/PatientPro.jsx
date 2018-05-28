import React from 'react'
import img_patient from '@img/patient.png'


const PatientPro = () => (
    <div>
        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
                <div className="row">
                    <h4 className="ui horizontal header divider">
                        <a> Pour les patients, pour les professionnels </a>
                    </h4>
                    <div className="eight wide column">
                        <div className="ui text container">
                            <h3 className="ui header">Patient
                            </h3>
                            <p className="textonepage"> Homecarers est fait pour tout type de patient.
                                Patient soigne occasionnellement par un medecin, malade chronique, ou ayant ete hospitalise,
                                tout le monde peut s'y inscrire et avoir un suivi medical constant
                                <br/>
                                Homecarers donne la possibilite au patient d'autoriser, a ses professionnels de sante,
                                l'acces a son suivi medical.
                                Il permet au patient de notifier ses symptomes, afin que les soignants aient acces au plus
                                d'information possible dans le cadre de l'elaboration d'un diagnostique.
                            </p>
                        </div>
                    </div>
                    <div className="six wide right floated column">
                        <img className="ui large rounded image" alt="medecin together" src={img_patient} />
                    </div>
                </div>
                <h4 className="ui horizontal header divider">
                </h4>
                <div className="row">
                    <div className="seven wide right floated column">
                        {/*<img className="ui medium rounded image" alt="medecin together" src={img_tablette} />*/}
                    </div>

                    <div className="nine wide column">
                        <h3 className="ui header petit">Professionnel</h3>
                        <p className="textonepage1">
                            Homecarers donne la possibilite d'ameliorer le suivi du patient en ayant acces aux notes fournit
                            par les autres professionnels de sante qui suivent le patient
                            <br/>
                            Homecarers permet un de creer la communication entre tous les acteurs de la vie d'un patient,
                            et tous cela dans le but de mieux
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

);

export default PatientPro