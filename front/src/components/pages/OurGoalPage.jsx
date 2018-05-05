import React from 'react'
import Footer from '@temp/Footer.jsx'
import Link from 'react-router-dom/Link'
import img_nurse from '@img/nurse1.jpg'
import img_tablette from '@img/tablette.png'

const OurGoalPage = () => (
    <div>
        <div className="ui inverted masthead1 segment">
            <div className="ui container grid">
                <div className="row">
                    <div className="nine wide column">
                        <h1 className="ui header2">Notre but</h1>
                        <h2 className="ui header2">
                            Nous développons des outils pour les<br/>  professionnels
                            afin d'améliorer le suivi des patients!
                        </h2><br />

                        <h3 className="ui header2"> L’organe de liaison des intervenants à domicile</h3><br/>
                        <Link to='/' class="ui huge teal button">
                            Inscrivez-vous à la bêta<i class="right arrow icon"></i>
                        </Link>
                        <div className="ui hidden divider"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
                <div className="row">
                    <div className="eight wide column">
                        <div className="ui text container">
                            <h3 className="ui header">Faciliter le travail des soignants
                            </h3>
                            <p> Comment un soignant peut-il avoir toutes les informations sur un patient?
                                Notre objectif est de d'aemliorer la vie medicale des patients, en facilitant la communication
                                des intervenants a domicile !
                                <div className="ui hidden divider"></div>
                                Bien que primordiale, avoir acces a l'information n'est pas facile pour l'intervenant,
                                et c'est a ce moment la que nous agissons.
                            </p>
                        </div>
                    </div>
                    <div className="six wide right floated column">
                        <img className="ui large rounded image" alt="medecin together" src={img_nurse} />
                    </div>
                </div>
                <h4 className="ui horizontal header divider">
                    <a href="">The big plus</a>
                </h4>
                <div className="row">
                    <div className="seven wide right floated column">
                        <img className="ui medium rounded image" alt="medecin together" src={img_tablette} />
                    </div>

                    <div className="nine wide column">
                        <h2 className="ui header">Améliorer le suivi du patient</h2>
                        <p>Parce qu'etre soigne à la maison ne veut pas dire qu'il n'est ne pouvons pas avoir de meilleurs soins
                            Etre suivi comme dans un hôpital.
                            <div className="ui hidden divider"></div>
                            Homecarers fournit un suivi des patients optimal, peu importe qui prend soin de vous.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default OurGoalPage