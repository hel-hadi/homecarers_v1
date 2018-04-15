import React from 'react'
import Link from "react-router-dom/Link";
import img_logo from '@img/logo_blanc.png'
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
        const {} = this.props;
        return (
            <div className="ui inverted menu">
                <div className="item">
                    <img className="ui tiny image" alt="doctor together" src={img_logo}/>
                </div>
                <div class="ui simple dropdown item">
                    Dropdown <i class="dropdown icon"></i>
                    <div class="secondary menu">
                        <Link to="/" class="item" href="#">Accueil</Link>
                        <Link to="/ourgoalpage" class="item" href="#">Notre objectif</Link>
                        <Link to="/oursystempage" class="item" href="#">Notre Outil</Link>
                        <Link to="/aboutuspage" class="item" href="#">A propos de nous</Link>
                    </div>
                </div>
                <div className="right menu">
                    <a className="item">
                        <a href="https://fr-fr.facebook.com/"><i className="facebook inverted big icon"></i></a>
                    </a>
                    <a className="item">
                        <a href="https://fr.linkedin.com/"><i className="linkedin inverted big icon"></i></a>
                    </a>
                </div>
            </div>
        );
    }
}

export default Menu