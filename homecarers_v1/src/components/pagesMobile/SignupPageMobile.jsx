import React from 'react'
import Features from '@temp/Features.jsx'
import Footer from '@temp/Footer.jsx'
import SignupForm from '@form/SignupForm.jsx'
import img_logo_blanc from '@img/logo_blanc.png'

class SignupPageMobile extends React.Component {
    render() {
        return  <div>
                <div class="pusher">
                    <div class="ui vertical inverted masthead1 center aligned segment">
                        <br/><br/><br/>
                        <div class="ui middle aligned center aligned grid">
                            <div class="wide column">
                                <h2 class="ui header"> <span class="homebeige">Because monitoring is important for all of us</span> </h2>
                            </div>
                        </div>
                        <div class="ui middle center aligned grid">
                            <div class="nine wide column">
                                <div class="LoginPage-column">
                                    <h2 class="ui primary LoginPage-image header">
                                        <div class="content">
                                            <h2 class="ui image header">
                                                    <span class="homewhite">
                                                    Sign up and join us
                                                    </span>
                                            </h2>
                                            <img class="ui header medium image" alt="logo" src={img_logo_blanc} />
                                        </div>
                                    </h2>
                                    <SignupForm submit={this.submit} />
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                    </div>
                </div><br/>

                <div class="column" id="content">
                    <Features />
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
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
        </div>;
    }
}

export default SignupPageMobile