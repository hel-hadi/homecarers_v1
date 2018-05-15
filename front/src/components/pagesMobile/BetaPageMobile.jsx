import React from 'react'
import propTypes from 'prop-types'
import { OurSystemPageMobile, OurGoalPageMobile,
    AboutUsPageMobile, ContactUsPageMobile, Features, Footer, BetaForm} from '../../actions/routeSplit'
import { beta } from "../../actions/users";
import img_hero from '@img/Hero.png'
import img_scroll from '@img/scrollwhite.png'


class BetaPageMobile extends React.Component {
    submit = data => beta(data).then(() => this.props.history.push('/'));
    render() {
        let active = true;
        return (
            <div>
                <div className="ui vertical inverted masthead center aligned  segment">
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
                        <BetaForm active={true}/>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                    </div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
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