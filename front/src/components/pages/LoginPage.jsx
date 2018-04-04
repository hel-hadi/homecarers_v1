import React from 'react'
import { connect } from 'react-redux'
import { Style } from 'radium'
import MediaQuery from 'react-responsive';
import propTypes from 'prop-types'
import Menu from '@temp/Menu.jsx'
import Footer from '@temp/Footer.jsx'
import LoginForm from '@form/LoginForm.jsx'
import { login } from '../../actions/auth.jsx'
import img_boy from '@img/boy.svg'
import LoginPageMobile from '@mpages/LoginPageMobile.jsx'

class LoginPage extends React.Component {
    submit = data => this.props.login(data).then(() => this.props.history.push("/dashboard"));
    render() {
        return (
            <div className="pusher">
                <MediaQuery minDeviceWidth={768}>
                    <MediaQuery minWidth={768}>
                <Style rules={{
                    body : {
                        backgroundColor: '#2c4f77',
                    },
                    'body > .grid': {
                        height: '100%'
                    },
                    image : {
                        marginTop: '-100px'
                    },
                     column : {
                            maxWidth: '450px'
                        }
                }} />
                        <div class="ui middle aligned center aligned grid">
                            <div class="column">
                                <h2 class="ui teal image header">
                                    <img src="assets/images/logo.png" class="image" />
                                        <div class="content">
                                            Log-in to your account
                                        </div>
                                </h2>

                                <LoginForm submit={this.submit} />
                                <div class="ui message">
                                    New to us? <a href="#">Sign Up</a>
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
LoginPage.propTypes = {
    history: propTypes.shape({
        push: propTypes.func.isRequired
    }).isRequired,
    login: propTypes.func.isRequired
}

export default connect(null, { login })(LoginPage);