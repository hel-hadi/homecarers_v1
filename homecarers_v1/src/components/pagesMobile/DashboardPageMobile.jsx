import React from 'react'
import Footer from '@temp/Footer.jsx'
import Features from '@temp/Features.jsx'
import img_logo_blanc from '@img/logo_blanc.png'
import '@css/styles.css'
import '@css/homepage.css'

const DashboardPageMobile = () => (
    <div>
        <div class="ui vertical inverted masthead center aligned segment">
            <br/><br/>
            <div class="ui middle aligned stackable grid container">
                <div class="eight wide column">
                    <div className="ui hidden divider"></div>
                    <h1 class="ui page-header">
                            <span class="homebeige">
                               Welcome to you new Homecarers !
                            </span>
                    </h1>
                    <br/>
                    <h2 class="ui page-header">
                            <span class="homewhite">
                                Thank you for your registration ! <br/>
                            </span>
                    </h2>
                    <h2 class="ui page-header">
                            <span class="homewhite">
                      Web site and Application are still in development, and we will contact you when we are going to start our project !
                            </span>
                    </h2>
                    <span class="homebeige">
                      </span>
                </div>
                <div class="six wide right floated column">
                    <img class="ui medium centered rounded image" alt="doctor" src={img_logo_blanc}/>
                </div>
            </div>
        </div>
        <Features />
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

export default DashboardPageMobile