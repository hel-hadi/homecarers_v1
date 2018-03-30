import React from 'react'
import { Link } from 'react-router-dom'
import { Style } from 'radium'
import propTypes from 'prop-types'
import LoginForm from '@form/LoginForm.jsx'
import img_logo from '@img/logo.png'

class LoginPageMobile extends React.Component {
    render() {
        return (
            <div class="pusher">
                <Style rules={{
                    body : {
                        backgroundColor: '#2c4f77',
                    },
                }} />
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>

                <div class="ui middle aligned stackable grid container">
                    <div class="wide column">
                        <h1 class="ui primary LoginPage-image header centered">
                            <div class="content">
                                <h1 class="ui image header centered">
                                        <span class="homewhite centered">
                                            HomeCarers
                                        </span>
                                </h1>
                            </div>
                        </h1>
                        <img class="ui medium centered rounded image" alt="doctor together" src={img_logo}/>
                    </div>
                </div>

                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>

                <div class="ui middle centered aligned grid">
                    <div class="ten wide column">
                        <div class="LoginPage-column">
                            <h2 class="ui primary LoginPage-image header centered">
                                <div class="content">
                                    <h2 class="ui image header centered">
                                        <span class="homebeige centered">
                                            Sign in into your account
                                        </span>
                                    </h2>
                                </div>
                            </h2>
                            <div className="ui hidden divider"></div>
                            <LoginForm submit={this.submit} />
                            <div class="ui message ">
                                New to us? <Link to="/signup" >Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ui inverted vertical footer2 segment">
                    <div class="ui center aligned container">
                        <div class="ui horizontal inverted small divided link list">
                            <a class="item"><h5 class="homewhite">Site Map</h5></a>
                            <a class="item"><h5 class="homewhite">Contact Us</h5></a>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPageMobile