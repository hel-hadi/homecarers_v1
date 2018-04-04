import React from 'react'
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import propTypes from 'prop-types'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import '@css/styles.css'
import '@css/homepage.css'
import * as actions from "../../actions/auth.jsx";

const MenuMobile = ({ isAuthenticated, logout }  ) => (
    <SidebarItem textAlign="center">
        { !isAuthenticated ?
            <div>
                <Link className="ui active inverted button" to="/loginpage">Sign In</Link>
                <Link className="ui active inverted button" to="/signup">Sign up</Link>
            </div>
            :
            <div>
            <Link className="ui active inverted button" to="/dashboard">Account</Link>
            <button className="ui active inverted button" onClick={() => logout()}>Logout</button>
            </div>
        }

    </SidebarItem>
)

//
// function changeSidebar (MenuMobile) {
//     let isAuthenticated = 1;
//     if (isAuthenticated) {
//         MenuMobile = [
//             <div className="center ui grid">
//                 <div className="center ui grid">
//                     <div className="ui hidden divider"></div>
//                     <div className="ui hidden divider"></div>
//                     <div className="ui hidden divider"></div>
//                     <h1 className="ui page-header">
//                             <span className="">
//                                 HomeCarers
//                             </span>
//                     </h1>
//                     <div className="ui hidden divider"></div>
//                 </div>
//             </div>,
//             <SidebarItem textAlign="center">
//                 <img className="ui centered small circular image" alt="chat" src={img_logo} />
//                 <div className="ui section divider"></div>
//             </SidebarItem>,
//             <Link className="homewhite" to='/'>
//                 <SidebarItem textAlign="left">
//                 <br />
//                 <i className="home icon"></i>
//                     Home
//                 </SidebarItem>
//             </Link>,
//             <Link className="homewhite" to='/oursystempage'>
//                 <SidebarItem textAlign="left">
//                     <i className="cogs icon"></i>
//                     Our System
//                 </SidebarItem>
//             </Link>,
//             <Link className="homewhite" to='/ourgoalpage'>
//                 <SidebarItem textAlign="">
//                 <i className="clipboard icon"></i>
//                 Our Goal
//                 </SidebarItem>
//             </Link>,
//             <Link className="homewhite" to='/aboutuspage'>
//                 <SidebarItem textAlign="">
//                 <i className="address card icon"></i>
//                 About Us
//                 </SidebarItem>
//             </Link>,
//             <div>
//                 <div className="ui hidden divider"></div>
//                 <div className="ui hidden divider"></div>
//             </div>,
//             <SidebarItem textAlign="center">
//                 <Link className="ui active inverted  button" to="/dashboard">Account</Link>
//                 <button className="ui active inverted button" onClick={() => logout()}>Logout</button>
//             </SidebarItem>,
//             <div>
//                 <div className="ui hidden divider"></div>
//                 <div className="ui hidden divider"></div>
//                 <div className="ui hidden divider"></div>
//             </div>,
//             <SidebarItem textAlign="center">
//                 <a href="https://fr-fr.facebook.com/"><i className="facebook inverted big icon"></i></a>
//                 <a href="https://fr.linkedin.com/"><i className="linkedin inverted big icon"></i></a>
//             </SidebarItem>
//         ];
//     }
//     return MenuMobile
// }


MenuMobile.propTypes = {
    isAuthenticated: propTypes.bool.isRequired,
    logout: propTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps, { logout: actions.logout})(MenuMobile)
