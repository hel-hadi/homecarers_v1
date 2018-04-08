import React from 'react'
import * as actions from '../../actions/auth.jsx'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { Link } from "react-router-dom";

const Menu = ({ isAuthenticated, logout }) => (
    <div className="ui container">
        <div className="ui large secondary inverted bash menu">
            <a className="toc item">
                <i className="sidebar icon"></i>
            </a>
            <Link to='/' className="active item"><span className="homewhite">Home</span></Link>
            <Link to="/oursystempage" className="item"><span className="homewhite">Our System</span></Link>
            <Link to="/ourgoalpage" className="item"><span className="homewhite">Our Goal</span></Link>
            <Link to="/aboutuspage" className="item"><span className="homewhite">About Us</span></Link>

            <div className="right item">
                {isAuthenticated ?<div>
                        <Link to="/dashboard" className="ui active inverted button"> My Account</Link>
                        <button className="ui inverted button" onClick={() => logout()}>logout </button>
                    </div> :
                    <div>
                        <Link to='/login' className="ui inverted button">Log in</Link>
                        <Link to='/signup' className="ui inverted button">Sign Up</Link>
                    </div>
                }
            </div>
        </div>
    </div>
);

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