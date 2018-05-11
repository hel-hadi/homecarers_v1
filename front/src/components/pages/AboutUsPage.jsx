import React from 'react'
import img_prix from '@img/prix.jpg'
import img_invie from '@img/invie1.png'
import img_etonomy from '@img/etonomy.png'

const AboutUsPage = () => (
    <div>
        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
                <div className="row">
                    <h4 className="ui horizontal header divider">
                        <a href="">À propos de nous</a>
                    </h4>
                    <div className="eight wide column">
                        <h3 className="ui header petit">Lauréat du hackathon E-tonomy</h3>
                        <p className="textonepage1"> Notre  équipe est issue d'un événement: le Salon E-Tonomy. <br/> <br/>
                            Étudiant, Universitaire, Patient, Professionnel de Santé..
                            Notre equipe a travaillé afin de trouver une solution qui améliore le suivi du patient.
                            <br/><br/>
                            Notre implication, et nos diverses competences nous ont permit de creer la solution qui permet de mettre le patient au coeur du suivi
                        <br />
                    </p>
                    </div>
                    <div className="six wide right floated column">
                        <img src={img_prix} alt="vainqueur" className="ui large centered image" />
                    </div>
                </div>
                <h4 className="ui horizontal header divider">
                    <a href="">Nos partenaires</a>
                </h4>
                <div className="two column center aligned row">
                    <div className="column">
                        <div className="ui hidden divider"></div>
                        <a href="http://cimap78.fr/">
                            <img className="ui centered small circular image" alt="chat" src={img_invie} />
                        </a>
                    </div>
                    <div className="column">
                        <div className="ui hidden divider"></div>
                        <a href="http://e-tonomy.fr/">
                            <img className="ui centered small circular image" alt="cahier" src={img_etonomy} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

);

export default AboutUsPage