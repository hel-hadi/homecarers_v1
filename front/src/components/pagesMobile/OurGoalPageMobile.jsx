import React from 'react'
import img_nurse from '@img/nurse1.jpg'
import img_tablette from '@img/tablette.png'

const OurGoalPageMobile= () => (
    <div>
        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
                <div className="row">
                    <h4 className="ui horizontal header divider">
                        <a href="">Notre objectif</a>
                    </h4>
                    <div className="eight wide column">
                        <div className="ui text container">
                            <h3 className="ui header">Faciliter le travail des professionels
                            </h3>
                            <p className="textonepage"> Homecarers est la plate-forme qui centralise les informations des patients et
                                favorise leur transmission auprès des professionnels de la santé.
                                <div className="ui hidden divider"></div>
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
                        <h3 className="ui header">Assurer la securite du patient</h3>
                        <p className="ui centered textonepage">
                            La sécurité des patients est primordiale, et Homecarers permet d'éviter les imprévus qui peuvent
                            nuire aux personnes pendant la prestation des services de santé ou de soins, et ainsi, réduire les dommages évitables aux patients
                            <div className="ui hidden divider"></div>
                            Homecarers fournit un suivi du patients optimal, peu importe qui prend soin de vous.
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