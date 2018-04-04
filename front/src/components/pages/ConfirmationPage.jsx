import React from 'react';
import { Message, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { confirm } from '../../actions/auth.jsx'
import '@css/styles.css'
import '@css/homepage.css'

class ConfirmationPage extends React.Component {
    state = {
        loading: true,
        success: false
    };

    componentDidMount() {
        this.props.confirm(this.props.match.params.token)
            .then(() => this.setState({ loading: false, success: true}))
            .catch(() => this.setState({ loading: false, success: false}));
    }

    render() {
        const { loading, success } = this.state;
        return (
            <div>
                {loading && (
                    <Message icon>
                        <Icon name="circle notched" loading />
                        <Message.Header> Validating your Email !</Message.Header>
                    </Message>
                )}

                {!loading && success && (
                    <Message success icon>
                        <Icon name="checkmark" />
                        <Message.Content>
                            <Message.Header> Thank You. Your account has been verified !</Message.Header>
                            <Link to="/dashboard"> Go to your dashboard </Link>
                        </Message.Content>
                    </Message>
                )}
                {!loading && !success && (
                    <Message negative icon>
                        <Icon name="warning sign" />
                        <Message.Content>
                            <Message.Header> Ooops Invalid Token !</Message.Header>
                        </Message.Content>
                    </Message>
                )}
            </div>
        );
    }
}

ConfirmationPage.propTypes = {
    confirm: propTypes.func.isRequired,
    match: propTypes.shape({
        params: propTypes.shape ({
            token: propTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default connect (null, { confirm })(ConfirmationPage)
