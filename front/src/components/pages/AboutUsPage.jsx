import React from 'react'
import Menu from '@temp/Menu.jsx'
import Footer from '@temp/Footer.jsx'
import img_women from '@img/women.png'
import img_logo_blanc from '@img/logo_blanc.png'
import img_prix from '@img/prix.jpg'
import img_invie from '@img/invie1.png'
import img_etonomy from '@img/etonomy.png'

const AboutUsPage = () => (
    <div>
                <div className="pusher">
                    <div className="ui vertical inverted masthead center aligned segment">
                        <Menu />
                        <br/><br/><br/><br/><br/><br/>

                        <div className="ui middle aligned stackable grid container">
                            <div className="eight wide column">
                                <h1 className="ui page-header">
                                    <span className="homebeige">
                                       Who we Are ?
                                    </span>
                                </h1>
                                <h2 className="ui page-header">
                                    <span className="homewhite">
                                       Student, Universitary, Patient .. <br/><br/>
                                        A team with multiples skills and real home care experiences !
                                    </span>
                                </h2>
                                <br/>
                                <span className="homebeige">
                              </span>
                                <br/>

                            </div>

                            <div className="three wide right floated column">
                                <img className="ui large rounded image" alt="doctor together" src={img_women}/>
                            </div>

                            <div className="five wide right floated column">
                                <img className="ui large rounded image" alt="doctor together" src={img_logo_blanc}/>
                            </div>
                        </div>
                    </div>

                    <div className="ui vertical stripe segment">
                        <div className="ui middle aligned stackable grid container">
                            <div className="row">
                                <div className="eight wide column">
                                    <h3 className="ui header">Our team : Born in Etonomy Hackathon</h3>
                                    <p>Our amazing team came from an event : Etonomy.<br/><br/>
                                        During 52 hours without sleeping, we worked hard to find a solution for home care situation.
                                        Skills and motivations is the reasons of our success... </p>
                                    <p> And that is why we won this event, and why our product is usefull ! </p>
                                    <h3 className="ui header">Here to improve things</h3>
                                    <p>Yes that's right,our only goal is to help all kind of home carers, that is why you can send us your recommandation.</p>
                                    <a className="ui large button">Advise Us</a>

                                </div>
                                <div className="six wide right floated column">
                                    <img src={img_prix} alt="vainqueur" className="ui large rounded image" />
                                </div>
                            </div>
                            <h4 className="ui horizontal header divider">
                                <a href="">Our Partners</a>
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
        <Footer />
    </div>

);

export default AboutUsPage