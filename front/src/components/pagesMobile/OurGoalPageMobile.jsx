import React from 'react'
import img_nurse from '@img/nurse1.png'
import img_tablette from '@img/tablette.png'

const OurGoalPageMobile= () => (
    <div>
        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
                <div className="row">
                    <h4 className="ui horizontal header divider">
                        <a>Notre objectif</a>
                    </h4>
                    <div className="eight wide column">
                        <div className="ui text container">
                            <h3 className="ui header">Faciliter le travail des professionnels
                            </h3>
                            <p className="ui centered textonepage">
                                Homecarers est la plate-forme qui centralise les informations du patient
                                et favorise leurs transmissions auprès des professionnels de santé.
                                <br/>
                                Professionnels du privé, du public ou libéraux ont accès au suivi de leurs
                                patients, dans le but d’assurer une continuité dans les soins de chaque personne.
                            </p>
                        </div>
                    </div>
                    <div className="six wide right floated column">
                        <img className="ui large centered rounded image" alt="medecin together" src={img_nurse} />
                    </div>
                </div>
                <h4 className="ui horizontal header divider">
                </h4>
                <div className="row">
                    <div className="nine wide column">
                        <div className="ui text container">
                        <h3 className="ui header">Améliorer la qualité du suivi médical et de soin</h3>
                            <p className="ui centered textonepage">
                                Homecarers permet d’améliorer le suivi du patient grâce à l’accès aux informations pertinentes,
                                ce qui donne aux professionnels de santé un atout majeur dans la construction de leurs diagnostics.
                                <br/>
                                Homecarers permet un suivi optimal du patient.
                            </p>
                        </div>
                    </div>
                    <div className="seven wide right floated column">
                        <img className="ui medium centered rounded image" alt="medecin together" src={img_tablette} />
                    </div>
                </div>
            </div>
        </div>
    </div>

    );

export default OurGoalPageMobile