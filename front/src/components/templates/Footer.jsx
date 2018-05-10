import React from 'react'
import img_logo from '@img/logo_fond_bleu.png'

const Footer = () => (
    <div className="ui inverted vertical footer segment">
        <div className="ui center aligned container">
            <div className="ui horizontal inverted tim divided link list">
                <img className="ui medium2 image" alt="logo home carers" src={img_logo}/>
            </div>
        </div>
    </div>
);

export default Footer