import React from 'react'
import propTypes from 'prop-types'
import { OurSystemPageMobile, OurGoalPageMobile, AboutUsPageMobile, ContactUsPageMobile, Features, Footer} from '../../actions/routeSplit'
import { BetaForm } from '../../actions/routeSplit'
import { beta } from "../../actions/users";
import img_hero from '@img/Hero.png'
import img_scroll from '@img/scrollwhite.png'


class BetaPageMobile extends React.Component {
    submit = data => beta(data).then(() => this.props.history.push('/'));
    render() {
        return (
            <div>
                <div className="ui vertical inverted masthead center aligned segment">
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui centered container">
                        <img className="ui tiny centered image" alt="logo blanc home carers" src={img_hero}/>
                        <h1 class="ui inverted centered header">
                            <span className="regularMobile">HOME</span><span className="light1">CARERS</span>
                        </h1>
                        <h1 className="ui inverted centered header">
                                <span className="regular1">
                                    L'organe de Liaison des professionnels de Santé.
                                </span>
                        </h1>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <div className="ui centered container">
                            <div className="ui huge icon input">
                                <input className="beta" type="text" placeholder=" Example@email.com" />
                            </div>
                            <button className="ui large button betabutt">
                                    <span className="light1">
                                        S'inscrire à la beta
                                    </span>
                            </button>
                        </div>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <h2 className="ui centered grid">
                                <span className="light1">
                                    Scroller pour en savoir plus
                                </span>
                        </h2>
                        <img className="ui tiny centered image" alt="scroll icon" src={img_scroll}/>
                    </div>
                    {/*<BetaForm submit={this.submit}/>*/}
                </div>
                <Features/>
                <div className="ui centered back">
                    <div id="ourgoal">
                        <OurGoalPageMobile />
                    </div>
                    <div id="oursystem">
                        <OurSystemPageMobile  />
                    </div>
                    <div id="aboutus">
                        <AboutUsPageMobile />
                    </div>
                    <div id="contactus">
                        <ContactUsPageMobile />
                    </div>
                    <Footer/>
                </div>

            </div>
        );
    }
}

BetaPageMobile.propTypes = {
    history: propTypes.shape({
        push: propTypes.func.isRequired
    }).isRequired,
    beta: propTypes.func.isRequired
}

export default BetaPageMobile