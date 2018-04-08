import React from 'react'
import Menu from '@temp/Menu.jsx'
import MediaQuery from 'react-responsive';
import DashboardPageMobile from '@mpages/DashboardPageMobile.jsx'
import img_us from '@img/us.png'
import  img_agenda from '@img/agenda.png'
import  img_book from '@img/book.png'
import  img_comm from '@img/comm.png'
import  img_fiche from '@img/fiche1.png'


const DashboardPage = () => (
    <div>
        <div className="pusher">
            <MediaQuery minDeviceWidth={768}>
                <MediaQuery minWidth={768}>
                    <div className="pusher">
                        <div className="ui vertical inverted masthead center aligned segment">
                            <Menu />
                            <br/><br/>
                            <div className="ui middle aligned stackable grid container">
                                <div className="eight wide column">
                                    <h1 className="ui page-header">
                            <span className="homebeige">
                               Welcome to you new Homecarers !
                            </span>
                                    </h1>
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

                                    <br/>
                                    <span className="homebeige">
                            </span>
                                    <br/>

                                </div>
                                <div className="six wide right floated column">
                                    <img className="ui medium centered rounded image" alt="doctor" src={img_us}/>
                                </div>
                            </div>
                        </div>
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
                        </div>
                    </div>

                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui inverted vertical footer2 segment">
                        <div className="ui center aligned container">
                            <div className="ui horizontal inverted small divided link list">
                                <a className="item"><h5 className="homewhite">Site Map</h5></a>
                                <a className="item"><h5 className="homewhite">Contact Us</h5></a>

                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </MediaQuery>

            <MediaQuery maxWidth={768}> {/* Mobile Responsive */}
                <DashboardPageMobile />
            </MediaQuery>
        </div>
    </div>
);

export default DashboardPage;