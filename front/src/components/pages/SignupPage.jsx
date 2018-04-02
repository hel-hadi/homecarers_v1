import React from 'react'
import MediaQuery from 'react-responsive'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { signup } from '../../actions/users.jsx'
import Menu from '@temp/Menu.jsx'
import Footer from '@temp/Footer.jsx'
import SignupForm from '@form/SignupForm.jsx'
import SignupPageMobile from '@mpages/SignupPageMobile.jsx'
import img_logo_blanc from '@img/logo_blanc.png'
import  img_boy from '@img/doctor2000.svg'
import  img_agenda from '@img/agenda.png'
import  img_book from '@img/book.png'
import  img_comm from '@img/comm.png'
import  img_fiche from '@img/fiche1.png'

class SignupPage extends React.Component {
    submit = (data) =>
        this.props.signup(data).then(() => this.props.history.push('/'));
    render() {
        return  <div>
            <MediaQuery minDeviceWidth={768}>
            <MediaQuery minWidth={768}>
                 <div className="pusher">
                <div className="ui vertical inverted masthead1 center aligned segment">
                    <Menu />
                    <br/><br/>
                    <div className="ui middle aligned center aligned grid">
                        <div className="six wide column">
                            <h2 className="ui header"> <span className="homewhite">Because monitoring is important for all of us</span> </h2>
                            <h2 className="ui header"> <span className="homebeige"> Don't let your patient without it !</span> </h2>
                            <br/>
                            <img className="ui medium centered rounded image" alt="doctor" src={img_logo_blanc}/>
                        </div>
                        <div className="two wide column">
                            <img className="ui small image" alt="doctor" src={img_boy}/>
                        </div>
                        <div className="five wide column">
                            <div className="LoginPage-column">
                                <h2 className="ui primary LoginPage-image header">
                                    <div className="content">
                                        <h2 className="ui image header">
                                                <span className="homewhite">
                                                Sign up and join us
                                                </span>
                                        </h2>
                                    </div>
                                </h2>
                                <SignupForm submit={this.submit}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br/>

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

                <br/><br/><br/><br/>

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
                                    <img className="ui avatar image" alt="CEO" src="../../static/images/avatar/photo_profil.jpg" /><b>Hamza</b> Chief Executive Officer of Homecarers
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

SignupPage.propTypes = {
    history: propTypes.shape({
        push: propTypes.func.isRequired
    }).isRequired,
    signup: propTypes.func.isRequired
};

export default connect(null, { signup })(SignupPage);