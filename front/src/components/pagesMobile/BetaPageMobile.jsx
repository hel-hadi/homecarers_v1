import React from 'react'
import propTypes from 'prop-types'
import Features from '@temp/Features.jsx'
import { BetaForm } from '../../actions/routeSplit'
import { beta } from "../../actions/users";

class BetaPageMobile extends React.Component {
    submit = data => beta(data).then(() => this.props.history.push('/'));
    render() {
        return (
            <div>
                <div className="ui inverted masthead segment">
                    <div className="ui container">
                        <div className="row">
                            <div className="eight wide column">
                                <h2 className="ui header1">Homecarers <sup className="homefont2">Beta</sup></h2>
                                <h2 className="ui homeblue header1">L’organe de liaison des intervenants à domicile</h2>
                                <h3 className="ui homeblue header1"> Rejoignez notre bêta ouverte et aidez-nous à
                                    ameliorer <br/>l'avenir des soins à domicile</h3><br/>
                                <div className="ui hidden divider"></div>
                                <BetaForm submit={this.submit}/>

                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="ui centered header3">Fonctionnalités</h2>
                <Features/>
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