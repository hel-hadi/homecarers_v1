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
                <div className="ui vertical inverted masthead center aligned segment">
                    <br/><br/>
                    <div className="ui middle aligned stackable grid container">
                        <div className="wide column">
                            <h1 className="ui page-header">
                                <h3 className="ui header1">Homecarers <sup className="homefont2">Beta</sup></h3>
                            </h1>
                            <div className="ui hidden divider"></div>
                            <h2 className="ui homeblue header1">L’organe de liaison des intervenants à domicile</h2>
                            <h3 className="ui homeblue header1"> Rejoignez notre bêta</h3><br/>
                         </div>
                    </div>
                    <BetaForm submit={this.submit}/>
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