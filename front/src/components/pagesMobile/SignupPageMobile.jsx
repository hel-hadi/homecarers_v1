import React from 'react'
import Features from '@temp/Features.jsx'
import { SignupForm } from "../../actions/routeSplit.jsx"
import img_logo_blanc from '@img/logo_blanc.png'
import {connect} from "react-redux";
import {signup} from "../../actions/users";
import propTypes from 'prop-types'

class SignupPageMobile extends React.Component {
    submit = (data) =>
        this.props.signup(data).then(() => this.props.history.push('/'), console.log(data));
    render() {
        return  <div>
            <div className="ui vertical inverted masthead1 center aligned segment">
                <br/><br/>
                <div className="ui middle aligned stackable grid container">
                    <div className="wide column">
                        <h2 className="ui header"> <span className="homebeige">Because monitoring is important for all of us</span> </h2>
                    </div>
                </div>
                <div className="ui middle aligned centered grid container">
                    <div className="nine wide column">
                        <div className="LoginPage-column">
                            <h2 className="ui primary LoginPage-image header">
                                <div className="content">
                                    <h2 className="ui centered header">
                                                    <span className="homewhite">
                                                    Sign up and join us
                                                    </span>
                                    </h2>
                                    <img className="ui header medium image" alt="logo" src={img_logo_blanc} />
                                </div>
                            </h2>
                            <SignupForm submit={this.submit} />
                        </div>
                    </div>
                </div>
                <br/><br/>
                <br/>
            </div>

            <Features />

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
                            </div>
                        </div>
                    </div>
            <div className="ui inverted vertical footer1 segment">
                <div className="ui center aligned container">
                    <div className="ui horizontal inverted small divided link list">
                        <a className="item"><h5 className="homeblue">Contact Us</h5></a>
                    </div>
                </div>
            </div>
        </div>;
    }
}

SignupPageMobile.propTypes = {
    history: propTypes.shape({
        push: propTypes.func.isRequired
    }).isRequired,
    signup: propTypes.func.isRequired
};

export default connect(null, { signup })(SignupPageMobile);