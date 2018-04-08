import React from 'react'
import Footer from '@temp/Footer.jsx'
import img_logo_blanc from '@img/logo_blanc.png'
import img_device from '@img/devicechange.jpg'
import img_secure from '@img/secure.jpg'

const OurSystemPageMobile = () => (
    <div>
        <div className="ui vertical inverted masthead center aligned segment">
            <br/><br/>
            <div className="ui middle aligned stackable grid container">
                <div className="wide column">
                    <h1 className="ui page-header">
                            <span className="homebeige">
                               What we Do ?
                            </span>
                    </h1>
                    <br/>
                    <h2 className="ui page-header">
                            <span className="homewhite">
                               We develop a plateform avaible on site and mobile for all kind of homecarers : <br/><br/>
                                Liberal, Public, Association, Private
                            </span>
                    </h2>
                </div>
            </div>
            <div className="ui middle aligned stackable grid container">
                <div className="wide column">
                    <img className="ui large centered rounded image" alt="doctor together" src={img_logo_blanc}/>
                </div>
            </div>
        </div>
        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
                <div className="row">
                    <div className="eight wide column">
                        <div className="ui text container">

                            <h3 className="ui header centered ">Communication and Following</h3>
                            <p> To help you in your work and ameliorate following patient, we develop tools like liason
                                book which will optimise the following of your patient. <br/><br/>
                                Morehover, homecarers have communication, a chat system centered around patient, for each patient </p>
                        </div>
                    </div>
                    <div className="six wide right floated column">
                        <img className="ui large centered rounded image" alt="medecin together" src={img_device} />
                    </div>
                </div>
                <h4 className="ui horizontal header divider">
                    <a href="">Our Difference</a>
                </h4>
                <div className="row">
                    <div className="seven wide right floated column">
                        <img className="ui medium centered rounded image" alt="medecin together" src={img_secure} />
                    </div>

                    <div className="nine wide column">


                        <h3 className="ui header centered">Are we talk about security?</h3>
                        <p>Yes I know you probably have question about security, and you right. <br/>
                            For information, all data we'll be stock and record in a secure server and none of
                            this will stay in the device. <br/><br/>
                            Homecarers will provide a secure system to have the best monitoring patient.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default OurSystemPageMobile