import React from 'react'
import Features from '@temp/Features.jsx'
import img_logo_blanc from '@img/logo_blanc.png'

const DashboardPageMobile = () => (
    <div>
        <div className="ui vertical inverted masthead center aligned segment">
            <br/><br/>
            <div className="ui middle aligned stackable grid container">
                <div className="eight wide column">
                    <div className="ui hidden divider"></div>
                    <h1 className="ui page-header">
                            <span className="homebeige">
                               Welcome to you new Homecarers !
                            </span>
                    </h1>
                    <br/>
                    <h2 className="ui page-header">
                            <span className="homewhite">
                                Thank you for your registration ! <br/>
                            </span>
                    </h2>
                    <h2 className="ui page-header">
                            <span className="homewhite">
                      Web site and Application are still in development, and we will contact you when we are going to start our project !
                            </span>
                    </h2>
                    <span className="homebeige">
                      </span>
                </div>
                <div className="six wide right floated column">
                    <img className="ui medium centered rounded image" alt="doctor" src={img_logo_blanc}/>
                </div>
            </div>
        </div>
        <Features />
    </div>
);

export default DashboardPageMobile