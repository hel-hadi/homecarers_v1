import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from "react-router-dom";
import '@css/styles.css'
import '@css/homepage.css'

const Footer = () => (
    <div className="ui inverted vertical footer1 segment">
        <div className="ui center aligned container">
            <div className="ui horizontal inverted small divided link list">
                <a className="item" ><h5 className="homewhite">Site Map</h5></a>
                <a className="item" ><h5 className="homewhite">Contact Us</h5></a>
                <a className="item" ><h5 className="homewhite">Terms and Conditions</h5></a>
                <a className="item" ><h5 className="homewhite">Privacy Policy</h5></a>
            </div>
        </div>
    </div>


);

export default Footer