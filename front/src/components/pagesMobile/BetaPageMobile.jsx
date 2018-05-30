import React from 'react'
import propTypes from 'prop-types'
import { OurSystemPageMobile, OurGoalPageMobile,
         AboutUsPageMobile, ContactUsPageMobile, Features, Footer, BetaForm} from '../../actions/routeSplit'
import { beta } from '../../actions/users'
import img_hero from '@img/Hero.png'
import Alert from "react-s-alert";
import {connect} from "react-redux/dist/react-redux.min";

class BetaPageMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            message: 'C\'est fait ! Vous êtes inscrit pour participer à la version bêta de Homecarers',
            validate: false
        };
    };

    componentDidMount() {
        Alert.success('', {
            position: 'none'
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
        .then(this.setState({loader: false}));    render() {
        let active = true;
        return (
            <div>
                <div className="ui vertical inverted masthead1 center aligned  segment">
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui centered container">
                        <img className="ui tiny centered image" alt="logo blanc home carers" src={img_hero}/>
                        <h1 className="ui inverted centered header">
                            <span className="regularMobile">HOME</span><span className="light1">CARERS</span>
                        </h1>
                        <h1 className="ui inverted centered header">
                                <span className="regular1">
                                   L'outil de liaison avec les professionnels de santé
                                </span>
                        </h1>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <BetaForm submit={this.submit} active={true}/>
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
                <div>
                    <Alert stack={{limit: 2}} timeout={3000}/>
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
};

export default connect(null, { beta })(BetaPageMobile);
