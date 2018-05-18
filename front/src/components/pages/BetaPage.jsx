import React from 'react'
import propTypes from 'prop-types'
import Footer from '@temp/Footer.jsx'
import { connect } from 'react-redux/dist/react-redux.min'
import { HashLink as Link } from 'react-router-hash-link';
import Headroom from 'react-headroom';
import { OurSystemPage,
         OurGoalPage,
         AboutUsPage,
         ContactUsPage,
         FeatureWeb,
         BetaForm } from '../../actions/routeSplit'
import { beta } from '../../actions/users'
import img_logo from '@img/logo_fond_bleu.png'
import img_logo_blanc from '@img/logosurblanc.png'
import img_hero from '@img/Hero.png'
import img_scroll from '@img/scrollwhite.png'
import Alert from 'react-s-alert'

class BetaPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            message: 'C\'est fait ! vous etes inscrit pour participer a notre version Beta',
            validate: false
        };
    };

    handleTop(text)
    {
            Alert.success(text, {
                position: 'top'
            });
    };
    submit = data => this.props.beta(data)
        .then(() => (this.handleTop(this.state.message)))
        .then(this.setState({loader: false}));
    render() {
        return (
            <div>
                <div className="ui inverted masthead segment" id="home">
                    <div className="ui large secondary inverted menu">
                        <img className="i image" alt="logo home carers" src={img_logo}/>
                        <div className="right item">
                            <Link smooth to='/#home' className="ui regular1 item">
                                Accueil
                            </Link>
                            <Link smooth to='#ourgoal'   className="regular1 item">Notre objectif</Link>
                            <Link smooth to='#oursystem' className="regular1 item">Notre outil</Link>
                            <Link smooth to='#aboutus'   className="regular1 item">À propos de nous</Link>
                            <Link smooth to='#contactus' className="regular1 item">Nous contacter</Link>
                        </div>
                    </div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui centered container">
                        <img className="ui smally centered image" alt="logo blanc home carers" src={img_hero}/>
                        <h1 className="ui inverted centered header">
                            <span className="regular1">HOME</span><span className="light1">CARERS</span>
                        </h1>
                        <h2 className="ui inverted centered header">
                                <span className="regular1">
                                    L’outil de liaison, avec les professionnels de santé !
                                </span>
                        </h2>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <BetaForm submit={this.submit} loader={this.state.loader}/>
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
                <Headroom pinStart={950} downTolerance={50}>
                <div className="ui large secondary inverted menu bool">
                    <img className="ui image" alt="logo home carers" src={img_logo_blanc}/>
                    <div className="right item">
                        <Link smooth to='/#home' className="ui regular1 item">
                            Accueil
                        </Link>
                        <Link smooth to='#ourgoal'   className="regular1 item">Notre objectif</Link>
                        <Link smooth to='#oursystem' className="regular1 item">Notre outil</Link>
                        <Link smooth to='#aboutus'   className="regular1 item">À propos de nous</Link>
                        <Link smooth to='#contactus' className="regular1 item">Nous contacter</Link>
                    </div>
                </div>
                </Headroom>
                <FeatureWeb />
                <div className="back">
                    <div id="ourgoal">
                        <OurGoalPage />
                    </div>
                    <div id="oursystem">
                        <OurSystemPage  />
                    </div>
                    <div id="aboutus">
                        <AboutUsPage />
                    </div>
                    <div id="contactus">
                         <ContactUsPage />
                    </div>
                    <Footer/>
                </div>
                <div>
                    <Alert stack={{limit: 4}} timeout={3000}/>
                </div>
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
