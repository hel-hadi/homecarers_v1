import React from 'react'
import img_prix from '@img/prix.jpg'
import img_invie from '@img/invie1.png'
import img_etonomy from '@img/etonomy.png'
import img_croix from '@img/collaboration.jpg'

const AboutUsPage = () => (
    <div>
        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
                <div className="row">
                    <h4 className="ui horizontal header divider">
                        <a href="">À propos de nous</a>
                    </h4>
                    <div className="eight wide column">
                        <h3 className="ui header petit">Vainqueur du hackathon E-tonomy</h3>
                        <p className="textonepage1"> Notre incroyable équipe est issue d'un événement: Etonomy. <br/> <br/>
                            Durant 52 heures, nous avons travaillé sans relache afin de trouver une idée qui améliore le suivi du patient.
                            Compétences et motivation sont les raisons de notre succès ...
                        <br /> Et c'est pourquoi nous avons gagné cet événement, que nous avons continuer cette aventure afin de vous proposer Homecarers
                    </p>
                    </div>
                    <div className="six wide right floated column">
                        <img src={img_prix} alt="vainqueur" className="ui large centered image" />
                    </div>
                </div>
                <h4 className="ui horizontal header divider">
                </h4>
                <div className="row">
                    <div className="seven wide right floated column">
                        <img className="ui medium centered  image" alt="medecin together" src={img_croix} />
                    </div>
                    <div className="nine wide column">
                      <h3 className="ui header petit">Améliorer la vie medicale</h3>
                      <p className="textonepage1"> Notre seul but est d'aider toutes sortes de soignants à domicile, c'est pourquoi nous vous invitons a nous envoyer votre suggestion. </ p>
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