import React from 'react'
import Menu from '@temp/Menu.jsx'
import Footer from '@temp/Footer.jsx'
import img_doctor from '@img/doctorbarbu.png'
import img_logo_blanc from '@img/logo_blanc.png'
import img_nurse from '@img/nurse1.jpg'
import img_tablette from '@img/tablette.png'

const OurGoalPage = () => (
    <div>
        <div className="ui vertical inverted masthead center aligned segment">
            <Menu />
            <br/><br/><br/><br/><br/><br/>
            <div className="ui middle aligned stackable grid container">
                <div className="eight wide column">
                    <h1 className="ui page-header">
                            <span className="homebeige">
                               What we want ?
                            </span>
                    </h1>
                    <h2 className="ui page-header">
                            <span className="homewhite">
                              We want to create tools for professional to improve patient following ! <br/><br/>
                                Having a better monitoring, even at home
                            </span>
                    </h2>
                    <br/>
                    <span className="homebeige">
                      </span>
                    <br/>

                </div>

                <div className="two wide right floated column">
                    <img className="ui medium rounded image" alt="doctor together" src={img_doctor}/>
                </div>

                <div className="six wide right floated column">
                    <img className="ui large rounded image" alt="doctor together" src={img_logo_blanc}/>
                </div>
            </div>
        </div>


        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
                <div className="row">
                    <div className="eight wide column">
                        <div className="ui text container">

                            <h3 className="ui header">Ease your work</h3>
                            <p> We want to make easier your task by facilited communication professional of home care !
                                How a carers can have all the information about a patient ?<br/><br/>
                                Having the information is not easier part, and that is service that we provide
                            </p>
                        </div>
                    </div>
                    <div className="six wide right floated column">
                        <img className="ui large rounded image" alt="medecin together" src={img_nurse} />
                    </div>
                </div>
                <h4 className="ui horizontal header divider">
                    <a href="">The big plus</a>
                </h4>
                <div className="row">
                    <div className="seven wide right floated column">
                        <img className="ui medium rounded image" alt="medecin together" src={img_tablette} />
                    </div>

                    <div className="nine wide column">


                        <h3 className="ui header">Improve the monitoring</h3>
                        <p>Having the same following like in a hospital. It.s not because we are treat at home that we can't have a better care.<br/><br/>
                            Homecarers will provide a patient monitoring, don't matter who take care of you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default OurGoalPage