import React from 'react'
import { Link } from 'react-router-dom'
import { Style } from 'radium'
import MediaQuery from 'react-responsive';
import propTypes from 'prop-types'
import Menu from '@temp/Menu.jsx'
import LoginForm from '@form/LoginForm.jsx'
import img_boy from '@img/boy.svg'
import LoginPageMobile from '@mpages/LoginPageMobile.jsx'

class LoginPage extends React.Component {
    render() {
        return (
            <div class="pusher">
                <MediaQuery minDeviceWidth={768}>
                    <MediaQuery minWidth={768}>
                <Style rules={{
                    body : {
                        backgroundColor: '#2c4f77',
                    },
                }} />
                <div class="ui vertical inverted masthead center aligned segment">
                    <Menu />
                </div>

                <div class="ui middle aligned  centered1 aligned grid">
                    <div class="six wide column">
                        <img class="ui medium rounded image" alt="medecin" src={img_boy}/>
                    </div>
                    <div class="ten wide column">
                        <div class="LoginPage-column">
                            <h2 class="ui primary LoginPage-image header">
                                <div class="content">
                                    <h2 class="ui image header">
                                                <span class="homebeige cent">
                                                     Sign in into your account
                                                </span>
                                    </h2>
                                </div>
                            </h2>
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
                    </MediaQuery>
                </MediaQuery>
                <MediaQuery maxWidth={768}>
                    <LoginPageMobile />
                </MediaQuery>
            </div>
        );
    }
}

export default LoginPage;