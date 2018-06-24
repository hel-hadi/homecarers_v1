import React from 'react'
import propTypes from 'prop-types'
import Footer from '@temp/Footer.jsx'
import { connect } from 'react-redux/dist/react-redux.min'
import { HashLink as Link } from 'react-router-hash-link';
import Headroom from 'react-headroom';
import { PatientPro,
         OurSystemPage,
         OurGoalPage,
         ContactUsPage,
         FeatureWeb,
         BetaForm } from '../../actions/routeSplit'
import { beta } from '../../actions/users'
import img_logo from '@img/logo_fond_bleu.png'
import img_logo1 from '@img/logo3.png'
import img_logo2 from '@img/logo.png'
import img_logo_blanc from '@img/logosurblanc.png'
import img_hero from '@img/Hero.png'
import img_scroll from '@img/scrollwhite.png'
import Alert from 'react-s-alert'

class BetaPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            loader: false,
            message: 'C\'est fait ! Vous êtes inscrit pour participer à la version bêta de Helpid Software',
            validate: false
        };
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const height = window.scrollY;
            this.setState({ height});
        });
    }

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
            <div className="pusher">
                <div className="ui inverted vertical masthead center aligned segment" id="home">
                    {this.state.height < 950 ?
                        <div className="ui container diff2">
                            <div className="ui large secondary inverted menu">
                                <div className="left item">
                                    <img className="ui size_logo1 image" alt="logo home carers" src={img_logo1}/>
                                </div>
                                <div className="right item">
                                    <Link smooth to='/#home' className="ui regular1 item">Accueil</Link>
                                    <Link smooth to='#ourgoal' className="regular1 item">Notre objectif</Link>
                                    <Link smooth to='#oursystem' className="regular1 item">Notre outil</Link>
                                    <Link smooth to='#contactus' className="regular1 item">Nous contacter</Link>
                                </div>
                            </div>
                        </div>
                        :
                        <Headroom pinStart={950} downTolerance={50}>
                        <div className="ui container diff2">
                            <div className="ui large secondary inverted menu bool">
                                <div className="left item">
                                    <img className="ui size_logo1 image" alt="logo home carers" src={img_logo2}/>
                                </div>
                                <div className="right item">
                                    <Link smooth to='/#home' className="ui regular1 item">Accueil</Link>
                                    <Link smooth to='#ourgoal' className="regular1 item">Notre objectif</Link>
                                    <Link smooth to='#oursystem' className="regular1 item">Notre outil</Link>
                                    <Link smooth to='#contactus' className="regular1 item">Nous contacter</Link>
                                </div>
                            </div>
                        </div>
                        </Headroom>
                    }
                    <div className="ui hidden divider"></div>
                    <div className="ui text">
                        <div className="ui hidden divider"></div>
                        <h1 className="ui inverted header">
                            <img className="ui smally centered image" alt="logo blanc home carers" src={img_hero}/>
                        </h1>
                        <h2 className="ui inverted centered header diff">
                           <span className="regular1">Helpid </span><span className="light1">Software</span>
                        </h2>
                        <h2>
                            <span className="regular1">
                                Un service de gestion médicale au service de la recherche
                            </span>
                        </h2>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <div className="">
                            <BetaForm submit={this.submit} loader={this.state.loader}/>
                        </div>
                        <div className="ui hidden divider"></div>
                        <h3 className="ui centered">
                        <span className="light1">
                        Scroller pour en savoir plus
                        </span>
                        </h3>
                        <img className="ui tiny centered image" alt="scroll icon" src={img_scroll}/>
                    </div>
                </div>
                <FeatureWeb />
                <div className="back">
                    <div id="ourgoal">
                        <OurGoalPage />
                    </div>
                    <div id="oursystem">
                        <OurSystemPage />
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
