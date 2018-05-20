import React from 'react'
import Link from "react-router-dom/Link";
import img_logo from '@img/logo_blanc.png'

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
                <div className="ui simple dropdown item">
                    Dropdown <i className="dropdown icon"></i>
                    <div className="secondary menu">
                        <Link to="/" className="item" href="#">Accueil</Link>
                        <Link to="/ourgoalpage" className="item" href="#">Notre objectif</Link>
                        <Link to="/oursystempage" className="item" href="#">Notre Outil</Link>
                        <Link to="/aboutuspage" className="item" href="#">A propos de nous</Link>
                    </div>
                </div>
                <div className="right menu">
                    <a className="item" href="https://fr-fr.facebook.com/"><i className="facebook inverted big icon"></i></a>
                    <a className="item" href="https://fr.linkedin.com/"><i className="linkedin inverted big icon"></i></a>
                </div>
            </div>
        );
    }
}

export default Menu