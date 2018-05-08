import React from 'react'
import Link from 'react-router-dom/Link'
import img_prix from '@img/prix.jpg'
import img_invie from '@img/invie1.png'
import img_etonomy from '@img/etonomy.png'

const AboutUsPage = () => (
    <div>
        {/*<div className="ui inverted masthead1 segment">*/}
            {/*<div className="ui container grid">*/}
                {/*<div className="row">*/}
                    {/*<div className="nine wide column">*/}
                        {/*<h1 className="ui header2">A propos de nous</h1>*/}
                        {/*<h2 className="ui header2">*/}
                            {/*Étudiant, Universitaire, Patient, Professionnel de Santé.. <br/> <br/>*/}
                            {/*Une équipe complète avec de multiples compétences réunit*/}
                            {/*pour améliorer la vie medical des patients et des professionnels                                         </h2><br />*/}
                        {/*<div className="ui hidden divider"></div>*/}
                        {/*<Link to='/' class="ui huge teal button">*/}
                            {/*Inscrivez-vous à la bêta<i class="right arrow icon"></i>*/}
                        {/*</Link>*/}
                        {/*<div className="ui hidden divider"></div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
        {/*</div>*/}

        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
                <div className="row">
                    <h4 className="ui horizontal header divider">
                        <a href="">A propos de nous</a>
                    </h4>
                    <div className="eight wide column">
                        <h3 className="ui header">Notre équipe : Née pendant le Hackathon Etonomy</h3>
                        <p> Notre incroyable équipe est issue d'un événement: Etonomy. <br/> <br/>
                            Durant 52 heures, nous avons travaillé sans relache afin de trouver une idée qui améliore le suivi du patient.
                            Compétences et motivation sont les raisons de notre succès ... </ p>
                        <p> Et c'est pourquoi nous avons gagné cet événement, que nous avons continuer cette aventure afin de vous proposer Homecarers </ p>
                        <h3 className="ui header">Améliorer la vie medicale</h3>
                        <p> Notre seul but est d'aider toutes sortes de soignants à domicile, c'est pourquoi nous vous invitons a nous envoyer votre suggestion. </ p>
                        <Link to='/contact' className="ui large button">Contactez Nous</Link>
                    </div>
                    <div className="six wide right floated column">
                        <img src={img_prix} alt="vainqueur" className="ui large rounded image" />
                    </div>
                </div>
                <h4 className="ui horizontal header divider">
                    <a href="">Nos Partenaires</a>
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