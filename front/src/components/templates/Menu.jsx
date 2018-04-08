import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import * as actions from '../../actions/auth.jsx'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { Link } from "react-router-dom";
import '@css/styles.css'
import '@css/homepage.css'

class Menu extends React.Component {
    isActive(value){
        if (value === 'loginpage' || value === 'signupage' || value === 'dashboard') {
            return 'className ' + ((value === this.props.active) ? 'ui active inverted button' : 'ui inverted button');
        }
        else
            return 'className ' + ((value === this.props.active) ? 'active item' : 'item');
        }
    render() {
        const {isAuthenticated, logout} = this.props;
        return (
            <div className="ui container">
                <div className="ui large secondary inverted bash menu">
                    <a className="toc item">
                        <i className="sidebar icon"></i>
                    </a>
                    <Link to='/' className={this.isActive("homepage")}><span className="homewhite">Home</span></Link>
                    <Link to="/oursystempage" className={this.isActive("oursystempage")}><span className="homewhite">Our System</span></Link>
                    <Link to="/ourgoalpage" className={this.isActive("ourgoalpage")}><span className="homewhite">Our Goal</span></Link>
                    <Link to="/aboutuspage" className={this.isActive("aboutpage")}><span className="homewhite">About Us</span></Link>
                    <div className="right item">
                        {isAuthenticated ? <div>
                                <Link to="/dashboard" className={this.isActive("dashboard")}> My Account</Link>
                                <button className="ui inverted button" onClick={() => logout()}>logout</button>
                            </div> :
                            <div>
                                <Link to='/login' className={this.isActive("loginpage")}>Log in</Link>
                                <Link to='/signup' className={this.isActive("signupage")}>Sign Up</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

Menu.propTypes = {
    isAuthenticated: propTypes.bool.isRequired,
    logout: propTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps, { logout: actions.logout})(Menu)