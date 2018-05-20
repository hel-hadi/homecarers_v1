import React from 'react'
import propTypes from 'prop-types'
import Alert from 'react-s-alert'

class InlineError extends React.Component {
    componentDidMount() {
        Alert.error('', {
            position: 'none'
        });
    }

    handleTop(text) {
            Alert.error(text, {
                position: 'top'
            });
    };
    render() {
        this.handleTop(this.props.text);
        return (
            <div>
                <Alert stack={{limit: 2}}/>
            </div>
        )
    }
}

InlineError.propTypes = {
    text: propTypes.string.isRequired
};

export default InlineError