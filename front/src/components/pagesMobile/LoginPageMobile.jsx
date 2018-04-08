import React from 'react'
import { Link } from 'react-router-dom'
import { Style } from 'radium'
import { LoginForm } from "../../actions/routeSplit.jsx"
import img_logo from '@img/logo.png'
import {login} from "../../actions/auth"
import {connect} from "react-redux"
import propTypes from 'prop-types'

class LoginPageMobile extends React.Component {
    submit = data => this.props.login(data).then(() => this.props.history.push("/dashboard"));
    render() {
        return (
            <div className="pusher">
                <Style rules={{
                    body : {
                        backgroundColor: '#2c4f77',
                    },
                }} />
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>

                <div className="ui middle aligned stackable grid container">
                    <div className="wide column">
                        <h1 className="ui primary LoginPage-image header centered">
                            <div className="content">
                                <h1 className="ui image header centered">
                                        <span className="homewhite centered">
                                            HomeCarers
                                        </span>
                                </h1>
                            </div>
                        </h1>
                        <img className="ui medium centered rounded image" alt="doctor together" src={img_logo}/>
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

                <div className="ui middle aligned centered grid container">
                    <div className="ten wide column">
                        <div className="LoginPage-column">
                            <h2 className="ui primary LoginPage-image header centered">
                                <div className="content">
                                    <h2 className="ui image header centered">
                                        <span className="homebeige centered">
                                            Sign in into your account
                                        </span>
                                    </h2>
                                </div>
                            </h2>
                            <div className="ui hidden divider"></div>
                            <LoginForm submit={this.submit} />
                            <div className="ui message ">
                                New to us? <Link to="/signup" >Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ui inverted vertical footer2 segment">
                    <div className="ui center aligned container">
                        <div className="ui horizontal inverted small divided link list">
                            <a className="item"><h5 className="homewhite">Site Map</h5></a>
                            <a className="item"><h5 className="homewhite">Contact Us</h5></a>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

LoginPageMobile.propTypes = {
    history: propTypes.shape({
        push: propTypes.func.isRequired
    }).isRequired,
    login: propTypes.func.isRequired
}

export default connect(null, { login })(LoginPageMobile);