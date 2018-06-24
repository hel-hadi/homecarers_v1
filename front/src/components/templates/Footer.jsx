import React from 'react'
import img_logo from '@img/logo3.png'

const Footer = () => (
    <div className="ui inverted vertical footer segment">
        <div className="ui center aligned container">
            <div className="ui horizontal inverted tim divided link list">
                <img className="ui mini image" alt="logo home carers" src={img_logo}/>
            </div>
        </div>
    </div>
);

export default Footer