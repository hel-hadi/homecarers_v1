import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import Menu from '@temp/Menu.jsx'
import HomePageMobile from '@mpages/HomePageMobile.jsx'
import Footer from '@temp/Footer.jsx'
import MediaQuery from 'react-responsive';
import '@css/styles.css'
import '@css/homepage.css'
import  img_agenda from '@img/agenda.png'
import  img_book from '@img/book.png'
import  img_comm from '@img/comm.png'
import  img_fiche from '@img/fiche1.png'
import  img_nurse from '@img/nurse.jpg'
import  img_profil from '@img/photo_profil.jpg'

const HomePage = () => (
    <div>
        <div className="pusher">
            <MediaQuery minDeviceWidth={768}>
            <MediaQuery minWidth={768}>
            <div className="ui vertical inverted masthead center aligned segment">
                <Menu />
                <br/><br/> <br/><br/>
                <div className="ui middle  aligned stackable grid container">
                    <div className="eight wide column">
                        <h1 className="ui page-header">
                            <span className="homebeige">
                                Homecarers
                            </span>
                        </h1>
                        <h2>
                            <b>Communicate to have a better patient monitoring.</b>
                        </h2>
                        <h2>
                            We are developping a system capable to put in relation all home care professionals for the patient well-being.
                        </h2>
                        <br/>
                        <Link to='/login' className="ui huge blue button">
                            Join our Project<i className="right arrow icon"></i>
                        </Link>
                    </div>
                    <div className="six wide right floated column">
                    </div>
                </div>
            </div>
                <div className="column" id="content">
                    <div className="ui middle aligned stackable grid container">
                        <div className="four column center aligned row">
                            <div className="column">
                                <div className="ui hidden divider"></div>
                                <div className="ui hidden divider"></div>
                                <img className="ui centered tiny circular image" alt="chat" src={img_comm} />
                                <div className="ui hidden divider"></div>
                                <h3 className="ui large ">
                                    Home Carers Chat
                                </h3>
                            </div>
                            <div className="column">
                                <div className="ui hidden divider"></div>
                                <div className="ui hidden divider"></div>
                                <img className="ui centered tiny circular image" alt="cahier" src={img_book} />
                                <div className="ui hidden divider"></div>
                                <h3 className="ui large">
                                    Liaison Book
                                </h3>
                            </div>
                            <div className="column">
                                <div className="ui hidden divider"></div>
                                <div className="ui hidden divider"></div>
                                <img className="ui centered tiny circular image" alt="agenda" src={img_agenda} />
                                <div className="ui hidden divider"></div>
                                <h3 className="ui large ">
                                    Collaborative Agenda
                                </h3>
                            </div>
                            <div className="column">
                                <div className="ui hidden divider"></div>
                                <div className="ui hidden divider"></div>
                                <img className="ui centered tiny circular image"  alt="professional card" src={img_fiche} />
                                <div className="ui hidden divider"></div>
                                <h3 className="ui large">
                                    Professionnal Card
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>

                {/**/}
                <div className="ui vertical stripe quote homegrey">
                    <div className="ui equal width stackable internally celled grid">
                        <div className="center aligned row">
                            <div className="column">
                                <h3>
                                    "Homecarers"
                                </h3>
                                <p>
                                    People who help other tirelessly, love what the do and do everything for patient well-being
                                </p>
                            </div>
                            <div className="column">
                                <h3>
                                    "A real patient experience serving patient and homecarers."
                                </h3>
                                <p>
                                    <img className="ui avatar image" alt="CEO" src={img_profil} /><b>Hamza</b> Chief Executive Officer of Homecarers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui vertical stripe segment">
                    <div className="ui middle aligned stackable grid container">
                        <div className="row">
                            <div className="eight wide column">
                                <h3 className="ui header">
                                <span className="homebeige">
                                We Help Patients and Professionnals.
                                </span>
                                </h3>
                                <p className="homegrey">
                                    We give to professionnals a tool for communicate between all of them.
                                </p>
                                <p className="homegrey">
                                    Because patient need to have the best monitoring, our free system is here to help all of us.
                                </p>
                                <p className="homegrey">
                                    The communication for well-being of your patient.
                                </p>
                            </div>
                            <div className="six wide right floated column">
                                <img className="ui large bordered rounded image" alt="medecin together" src={img_nurse} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

            </MediaQuery>
            </MediaQuery>

            <MediaQuery maxWidth={768}> {/* Mobile Responsive */}
                <HomePageMobile />
            </MediaQuery>

            <MediaQuery maxDeviceWidth={768}>
                <HomePageMobile />
            </MediaQuery>

        </div>
    </div>
);


export default HomePage;