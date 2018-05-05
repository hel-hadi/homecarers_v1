import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { BetaForm, FeaturesWeb} from '../../actions/routeSplit'
import { beta } from '../../actions/users'
import img_logo from '@img/logo_fond_bleu.png'
import img_hero from '@img/Hero.png'
import img_scroll from '@img/scrollwhite.png'

class BetaPage extends React.Component {
    submit = data => this.props.beta(data).then(() => this.props.history.push("/ourgoalpage"));
    render() {
        return (
            <div>
                <div className="ui inverted masthead segment">
                    <div class="ui large secondary inverted menu">
                        <img className="ui image" alt="logo home carers" src={img_logo}/>
                        <div class="right item">
                            <a class="ui regular1 item">Accueil</a>
                            <a class="regular1 item">Notre outil</a>
                            <a class="regular1 item">Notre objectif</a>
                            <a class="regular1 item">À propos</a>
                            <a class="regular1 item">Nous contacter</a>
                        </div>
                    </div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui centered container">
                        <img className="ui smally centered image" alt="logo blanc home carers" src={img_hero}/>
                        <h1 class="ui inverted centered header">
                            <span className="regular1">HOME</span><span className="light1">CARERS</span>
                        </h1>
                        <h2 class="ui inverted centered header">
                                <span className="regular1">
                                La solution digital des intervenants a domicile
                                </span>
                        </h2>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <div className="ui centered grid">
                            <div class="ui huge icon input">
                                <input className="beta" type="text" placeholder=" Example@email.com" />
                            </div>
                            <button class="ui large button betabutt">
                                    <span className="light1">
                                        Tester la beta
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
                </div>
                <h2 className="ui centered header3">Fonctionnalités</h2>
            </div>
        );
    }
}

BetaPage.propTypes = {
    history: propTypes.shape({
        push: propTypes.func.isRequired
    }).isRequired,
    beta: propTypes.func.isRequired
};

export default connect(null, { beta })(BetaPage);
