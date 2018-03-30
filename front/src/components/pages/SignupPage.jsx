import React from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive';
import Footer from '@temp/Footer.jsx'
import SignupForm from '@form/SignupForm.jsx'
import SignupPageMobile from '@mpages/SignupPageMobile.jsx'
import img_logo from '@img/logo.png'
import img_logo_blanc from '@img/logo_blanc.png'
import  img_boy from '@img/doctor2000.svg'
import  img_agenda from '@img/agenda.png'
import  img_book from '@img/book.png'
import  img_comm from '@img/comm.png'
import  img_fiche from '@img/fiche1.png'

class SignupPage extends React.Component {
    render() {
        return  <div>
            <MediaQuery minDeviceWidth={768}>
            <MediaQuery minWidth={768}>
                 <div class="pusher">
                <div class="ui vertical inverted masthead1 center aligned segment">
                    <div class="ui container">
                        <div class="ui large secondary inverted menu">
                            <div class="left item">
                                <h2 class="ui header">
                                    <img class="ui large rounded image" alt="logo" src={img_logo}/>
                                    <span class="homewhite"> Homecarers </span>

                                </h2>
                            </div>
                            <div class="right item">
                                <Link to='/' class="item"><span class="homewhite">Home</span></Link>
                                <Link to="/oursystem" class="item"><span class="homewhite">Our System</span></Link>
                                <Link to="/ourgoal" class="item"><span class="homewhite">Our Goal</span></Link>
                                <Link to='/login' class="ui inverted button">Log in</Link>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <div class="ui middle aligned center aligned grid">
                        <div class="six wide column">
                            <h2 class="ui header"> <span class="homewhite">Because monitoring is important for all of us</span> </h2>
                            <h2 class="ui header"> <span class="homebeige"> Don't let your patient without it !</span> </h2>
                            <br/>
                            <img class="ui medium centered rounded image" alt="doctor" src={img_logo_blanc}/>
                        </div>
                        <div class="two wide column">
                            <img class="ui small image" alt="doctor" src={img_boy}/>
                        </div>
                        <div class="five wide column">
                            <div class="LoginPage-column">
                                <h2 class="ui primary LoginPage-image header">
                                    <div class="content">
                                        <h2 class="ui image header">
                                                <span class="homewhite">
                                                Sign up and join us
                                                </span>
                                        </h2>
                                    </div>
                                </h2>
                                <SignupForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div><br/>

            <div class="column" id="content">
                <div class="ui middle aligned stackable grid container">
                    <div class="four column center aligned row">
                        <div class="column">
                            <div class="ui hidden divider"></div>
                            <div class="ui hidden divider"></div>
                            <img class="ui centered tiny circular image" alt="chat" src={img_comm} />
                            <div class="ui hidden divider"></div>
                            <h3 class="ui large ">
                                Home Carers Chat
                            </h3>
                        </div>
                        <div class="column">
                            <div class="ui hidden divider"></div>
                            <div class="ui hidden divider"></div>
                            <img class="ui centered tiny circular image" alt="cahier" src={img_book} />
                            <div class="ui hidden divider"></div>
                            <h3 class="ui large">
                                Liaison Book
                            </h3>
                        </div>
                        <div class="column">
                            <div class="ui hidden divider"></div>
                            <div class="ui hidden divider"></div>
                            <img class="ui centered tiny circular image" alt="agenda" src={img_agenda} />
                            <div class="ui hidden divider"></div>
                            <h3 class="ui large ">
                                Collaborative Agenda
                            </h3>
                        </div>
                        <div class="column">
                            <div class="ui hidden divider"></div>
                            <div class="ui hidden divider"></div>
                            <img class="ui centered tiny circular image"  alt="professional card" src={img_fiche} />
                            <div class="ui hidden divider"></div>
                            <h3 class="ui large">
                                Professionnal Card
                            </h3>
                        </div>
                    </div>
                </div>

                <br/><br/><br/><br/>

                <div class="ui vertical stripe quote homegrey">
                    <div class="ui equal width stackable internally celled grid">
                        <div class="center aligned row">
                            <div class="column">
                                <h3>
                                    "Homecarers"
                                </h3>
                                <p>
                                    People who help other tirelessly, love what the do and do everything for patient well-being
                                </p>
                            </div>
                            <div class="column">
                                <h3>
                                    "A real patient experience serving patient and homecarers."
                                </h3>
                                <p>
                                    <img class="ui avatar image" alt="CEO" src="../../static/images/avatar/photo_profil.jpg" /><b>Hamza</b> Chief Executive Officer of Homecarers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
             <Footer />
            </div>
            </MediaQuery>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
                <SignupPageMobile />
            </MediaQuery>

            <MediaQuery maxDeviceWidth={768}>
                <SignupPageMobile />
            </MediaQuery>
        </div>;
    }
}

export default SignupPage;