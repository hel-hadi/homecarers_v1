import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from "react-router-dom";
import '@css/styles.css'
import '@css/homepage.css'

const Menu = (isAuthenticated) => (
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
                        <Link to='/loginpage' className="ui inverted button">Log in</Link>
                        <Link to='/signup' className="ui inverted button">Sign Up</Link>
                    </div>
                }
            </div>
        </div>
    </div>
);

export default Menu