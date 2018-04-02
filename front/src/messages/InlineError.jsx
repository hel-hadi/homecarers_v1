import React from 'react'
import propTypes from 'prop-types'

const InlineError = ({text}) => (
    <span style={{ color: "f9c500"}}> {text} </span>
);

InlineError.propTypes = {
    text: propTypes.string.isRequired
};

export default InlineError