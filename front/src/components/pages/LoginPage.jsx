import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { Style } from 'radium'
import propTypes from 'prop-types'
import { login } from '../../actions/auth.jsx'
import { LoginForm } from "../../actions/routeSplit.jsx"
import Menu from '@temp/Menu.jsx'
import img_boy from '@img/boy.svg'

class LoginPage extends React.Component {
    submit = data => this.props.login(data).then(console.log(data),() => this.props.history.push("/dashboard"));
    render() {
        return (
            <div className="pusher">
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
                <div className="Loading loader">
                <div className="ui middle aligned centered aligned grid">
                    <div className="five wide column">
                        <img className="ui large centered rounded image" alt="doctor" src={img_boy}/>
                    </div>
                    <div className="ten wide column">
                        <div className="LoginPage-column">
                            <h2 className="ui primary LoginPage-image header">
                                <div className="content">
                                    <h2 className="ui centered header">
                                                <span className="ui centered homewhite ">
                                                     Sign in into your account
                                                </span>
                                    </h2>
                                </div>
                            </h2>
                            <LoginForm submit={this.submit} />
                            <div className="ui message">
                                New to us? <Link to="/signup" >Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="ui inverted vertical footer2 segment">
                    <div className="ui center aligned container">
                        <div className="ui horizontal inverted small divided link list">
                            <a className="item"><h5 className="homewhite">Contact Us</h5></a>
                        </div>
                    </div>
                </div>
                <br />
                <Menu active="loginpage" />
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