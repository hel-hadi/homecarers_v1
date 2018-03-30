import React from 'react'
import Footer from '@temp/Footer.jsx'
import img_logo_blanc from '@img/logo_blanc.png'
import img_prix from '@img/prix.jpg'
import img_invie from '@img/invie1.png'
import img_etonomy from '@img/etonomy.png'
import '@css/styles.css'
import '@css/homepage.css'

const AboutUsPageMobile = () => (
    <div>
        <div class="pusher">
                    <div class="ui vertical inverted masthead center aligned segment">
                        <br/><br/><br/>
                        <div class="ui middle aligned stackable grid container">
                            <div class="wide column">
                                <h1 class="ui page-header">
                                    <span class="homebeige">
                                       Who we Are ?
                                    </span>
                                </h1>
                                <h2 class="ui page-header">
                                    <span class="homewhite">
                                       Student, Universitary, Patient .. <br/><br/>
                                        A team with multiples skills and real home care experiences !
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <div class="ui middle aligned stackable grid container">

                        <div class="wide column">
                            <img class="ui large centered rounded image" alt="doctor together" src={img_logo_blanc}/>
                        </div>
                        </div>
                    </div>

                    <div class="ui vertical stripe segment">
                        <div class="ui middle aligned stackable grid container">
                            <div class="row">
                                <div class="eight wide column">
                                    <h3 class="ui header centered">Our team : Born in Etonomy Hackathon</h3>
                                    <p>Our amazing team came from an event : Etonomy.<br/><br/>
                                        During 52 hours without sleeping, we worked hard to find a solution for home care situation.
                                        Skills and motivations is the reasons of our success... </p>
                                    <p> And that is why we won this event, and why our product is usefull ! </p>
                                </div>
                                <div class="six wide right floated column">
                                    <img src={img_prix} alt="vainqueur" class="ui large centered rounded image" />
                                </div>
                            </div>
                            <h4 class="ui horizontal header divider">
                                <a href="">Our Partners</a>
                            </h4>
                            <div className="column">
                                <div className="ui two column grid">
                                    <div className="column center aligned row">
                                        <div className="column">
                                            <a href="http://cimap78.fr/">
                                                <img className="ui centered small circular image" alt="chat" src={img_invie} />
                                            </a>
                                        </div>
                                        <div className="wide column">
                                            <a href="http://e-tonomy.fr/">
                                                <img className="ui centered small circular image" alt="cahier" src={img_etonomy} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
    </div>

);

export default AboutUsPageMobile