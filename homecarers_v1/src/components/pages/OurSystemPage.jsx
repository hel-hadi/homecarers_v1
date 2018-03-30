import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import MediaQuery from 'react-responsive';
import Menu from '@temp/Menu.jsx'
import Footer from '@temp/Footer.jsx'
import OurSystemPageMobile from '@mpages/OurSystemPageMobile.jsx'
import img_doctor from '@img/doctorb.png'
import img_logo_blanc from '@img/logo_blanc.png'
import img_device from '@img/devicechange.jpg'
import img_secure from '@img/secure.jpg'
import '@css/styles.css'
import '@css/homepage.css'

const OurSystemPage = () => (
    <div>
        <MediaQuery minDeviceWidth={768}>
            <MediaQuery minWidth={768}>
        <div class="ui vertical inverted masthead center aligned segment">
            <Menu />
            <br/><br/><br/> <br/><br/><br/>
            <div class="ui middle aligned stackable grid container">
                <div class="eight wide column">
                    <h1 class="ui page-header">
                            <span class="homebeige">
                               What we Do ?
                            </span>
                    </h1>
                    <h2 class="ui page-header">
                            <span class="homewhite">
                               We develop a plateform avaible on site and mobile for all kind of homecarers : <br/><br/>
                                Liberal, Public, Association, Private
                            </span>
                    </h2>
                    <br/>
                    <span class="homebeige">
                      </span>
                    <br/>

                </div>

                <div class="two wide right floated column">
                    <img class="ui medium rounded image" alt="doctor together" src={img_doctor}/>
                </div>

                <div class="six wide right floated column">
                    <img class="ui large rounded image" alt="doctor together" src={img_logo_blanc}/>
                </div>
            </div>
        </div>
        <div class="ui vertical stripe segment">
            <div class="ui middle aligned stackable grid container">
                <div class="row">
                    <div class="eight wide column">
                        <div class="ui text container">

                            <h3 class="ui header">Communication and Following</h3>
                            <p> To help you in your work and ameliorate following patient, we develop tools like liason
                                book which will optimise the following of your patient. <br/><br/>
                                Morehover, homecarers have communication, a chat system centered around patient, for each patient </p>
                        </div>
                    </div>
                    <div class="six wide right floated column">
                        <img class="ui large rounded image" alt="medecin together" src={img_device} />
                    </div>
                </div>
                <h4 class="ui horizontal header divider">
                    <a href="">Our Difference</a>
                </h4>
                <div class="row">
                    <div class="seven wide right floated column">
                        <img class="ui medium rounded image" alt="medecin together" src={img_secure} />
                    </div>

                    <div class="nine wide column">


                        <h3 class="ui header">Are we talk about security?</h3>
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
            </MediaQuery>
        </MediaQuery>

        <MediaQuery maxWidth={768}>
            <OurSystemPageMobile />
        </MediaQuery>
    </div>
);

export default OurSystemPage