import React from 'react'
import img_screen from '@img/Accueil.png'
import img_lab from '@img/lab.png'

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
                            <h3 className="ui header">Comme votre logiciel actuel. En mieux.
                            </h3>
                            <p className="textonepage"> Helpid est un logiciel de gestion de cabinet médical répondant aux attentes des praticiens.
                                <br/><br/>
                                Son ergonomie est conçue tout particulièrement pour fluidifier les consultations et le suivi des patients,
                                grâce à des outils visuels pertinents et pratiques. Et c’est gratuit.
                            </p>
                        </div>
                    </div>
                    <div className="six wide right floated column">
                        <img className="ui large centered rounded image" alt="medecin together" src={img_screen} />
                    </div>
                </div>
                <h4 className="ui horizontal header divider">
                </h4>
                <div className="row">
                    <div className="nine wide column">
                        <div className="ui text container">
                        <h3 className="ui header">Un outil centré sur la recherche</h3>
                            <p className="ui centered textonepage">
                                Helpid est la plateforme qui permet de valoriser l’expérience des médecins généralistes en favorisant la recherche en santé publique.
                                <br/><br/>
                                Les données issues des soins primaires sont anonymisées et partagées entre praticiens afin de permettre un accès facile aux données épidémiologiques.
                                {/*Helpid permet un suivi optimal du patient.*/}
                            </p>
                        </div>
                    </div>
                    <div className="seven wide right floated column">
                        <img className="ui medium centered rounded image" alt="medecin together" src={img_lab} />
                    </div>
                </div>
            </div>
        </div>
    </div>

    );

export default OurGoalPageMobile