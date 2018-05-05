import React from 'react'
import propTypes from 'prop-types'

const InlineError = ({text}) => (
    <div className="ui grid">
        <div className="three column row">
            <div className="column">
                <div className="ui form error">
                    <div className="ui error message">
                        <div className="header">Saisie Incorrect</div>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
            <div className="column"></div>
            <div className="column"></div>
        </div>
    </div>
);

InlineError.propTypes = {
    text: propTypes.string.isRequired
};

export default InlineError