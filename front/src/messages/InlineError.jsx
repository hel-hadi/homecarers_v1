import React from 'react'
import propTypes from 'prop-types'
import Alert from 'react-s-alert'

class InlineError extends React.Component {
    componentDidMount() {
        this.handleTop(this.props.text)
    }
    handleTop(text)
    {
        Alert.error(text, {
            position: 'top'
        });
    };
    render() {
        return (
                <Alert stack={{limit: 4}}/>
        )
    }
}

InlineError.propTypes = {
    text: propTypes.string.isRequired
};

export default InlineError