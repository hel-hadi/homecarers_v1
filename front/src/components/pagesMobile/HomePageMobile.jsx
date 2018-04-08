import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import Footer from '@temp/Footer.jsx'
import Features from '@temp/Features.jsx'
import  img_nurse from '@img/nurse.jpg'
import  img_logo from '@img/logo.png'

const HomePageMobile = () => (
    <div>
        <div className="ui vertical inverted masthead center aligned segment">
            <br/><br/>
            <div className="ui middle aligned stackable grid container">
                <div className="wide column">
                    <h1 className="ui page-header">
                            <span className="homebeige">
                                HomeCarers
                            </span>
                    </h1>
                    <h2>
                        <b>Communicate to have a better patient monitoring.</b>
                    </h2>
                    <h2>
                        We are developping a system capable to put in relation all home care professionals for the patient well-being.
                    </h2>
                    <br/>
                    <img className="ui centered medium circular image" alt="chat" src={img_logo} />
                    <div className="ui hidden divider"></div>

                    <Link to='/loginpage' className="ui huge blue button">
                        Join our Project<i className="right arrow icon"></i>
                    </Link>
                </div>
            </div>
            <br/>
        </div>
        <Features />

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
                </div>
            </div>
        </div>
        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
                <div className="row">
                    <div className="wide column">
                        <h3 className="ui header centered">
                                <span className="homebeige">
                                We Help Patients and Professionnals.
                                </span>
                        </h3>
                        <p className="ui center aligned segment homegrey">
                            We give to professionnals a tool for communicate between all of them. <br/>
                            Because patient need to have the best monitoring, our free system is here to help all of us. <br/>
                            The communication for well-being of your patient.
                        </p>
                    </div>
                    <div className="column">
                        <img className="ui large centered bordered rounded image" alt="nurse" src={img_nurse} />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);
export default HomePageMobile
