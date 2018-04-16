import React from 'react'
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import * as actions from "../../actions/auth.jsx";

const MenuMobile = ({ isAuthenticated, logout }  ) => (
    <div>
        { !isAuthenticated ?
            <div>
                <Link className="ui active inverted button" to="/login">Sign In</Link>
                <Link className="ui active inverted button" to="/signup">Sign up</Link>
            </div>
            :
            <div>
            <Link className="ui active inverted button" to="/dashboard">Account</Link>
            <button className="ui active inverted button" onClick={() => logout()}>Logout</button>
            </div>
        }
    </div>
);

export default MenuMobile
