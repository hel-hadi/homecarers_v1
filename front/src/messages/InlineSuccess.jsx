import React from 'react'
import propTypes from 'prop-types'
import Alert from 'react-s-alert'

class InlineSuccess extends React.Component {
    componentDidMount() {
        Alert.success({position: 'top'});
    }
    handleTop(text)
    {
        Alert.success(text, {
            position: 'top'
        });
    };
    render() {
        return (
            <div>
                <span>{this.props.children}</span>
                <Alert stack={{limit: 3}}/>
                <div onLoad={this.handleTop(this.props.text)}></div>
            </div>
        )
    }
}

InlineSuccess.propTypes = {
    text: propTypes.string.isRequired
};

export default InlineSuccess