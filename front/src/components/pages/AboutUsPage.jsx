import React from 'react'
import Menu from '@temp/Menu.jsx'
import Footer from '@temp/Footer.jsx'
import MediaQuery from 'react-responsive';
import AboutUsPageMobile from '@mpages/AboutUsPageMobile.jsx'
import img_women from '@img/women.png'
import img_logo_blanc from '@img/logo_blanc.png'
import img_prix from '@img/prix.jpg'
import img_invie from '@img/invie1.png'
import img_etonomy from '@img/etonomy.png'
import '@css/styles.css'
import '@css/homepage.css'

const AboutUsPage = () => (
    <div>
        <MediaQuery minDeviceWidth={768}>
            <MediaQuery minWidth={768}>
                <div class="pusher">
                    <div class="ui vertical inverted masthead center aligned segment">
                        <Menu />
                        <br/><br/><br/><br/><br/><br/>

                        <div class="ui middle aligned stackable grid container">
                            <div class="eight wide column">
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
                                <br/>
                                <span class="homebeige">
                              </span>
                                <br/>

                            </div>

                            <div class="three wide right floated column">
                                <img class="ui large rounded image" alt="doctor together" src={img_women}/>
                            </div>

                            <div class="five wide right floated column">
                                <img class="ui large rounded image" alt="doctor together" src={img_logo_blanc}/>
                            </div>
                        </div>
                    </div>

                    <div class="ui vertical stripe segment">
                        <div class="ui middle aligned stackable grid container">
                            <div class="row">
                                <div class="eight wide column">
                                    <h3 class="ui header">Our team : Born in Etonomy Hackathon</h3>
                                    <p>Our amazing team came from an event : Etonomy.<br/><br/>
                                        During 52 hours without sleeping, we worked hard to find a solution for home care situation.
                                        Skills and motivations is the reasons of our success... </p>
                                    <p> And that is why we won this event, and why our product is usefull ! </p>
                                    <h3 class="ui header">Here to improve things</h3>
                                    <p>Yes that's right,our only goal is to help all kind of home carers, that is why you can send us your recommandation.</p>
                                    <a class="ui large button">Advise Us</a>

                                </div>
                                <div class="six wide right floated column">
                                    <img src={img_prix} alt="vainqueur" class="ui large rounded image" />
                                </div>
                            </div>
                            <h4 class="ui horizontal header divider">
                                <a href="">Our Partners</a>
                            </h4>
                            <div class="two column center aligned row">
                                <div class="column">
                                    <div class="ui hidden divider"></div>
                                    <a href="http://cimap78.fr/">
                                        <img class="ui centered small circular image" alt="chat" src={img_invie} />
                                    </a>
                                </div>
                                <div class="column">
                                    <div class="ui hidden divider"></div>
                                    <a href="http://e-tonomy.fr/">
                                        <img class="ui centered small circular image" alt="cahier" src={img_etonomy} />
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
        <Footer />
            </MediaQuery>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
            <AboutUsPageMobile />
        </MediaQuery>
    </div>

);

export default AboutUsPage