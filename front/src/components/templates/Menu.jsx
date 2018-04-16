import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from "react-router-dom";
import { Dropdown } from 'semantic-ui-react'
import img_logo from '@img/logo_blanc.png'
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
        const {} = this.props;
        return (
            <div className="ui inverted secondary menu">
                <div className="item">
                    <img className="ui tiny image" alt="doctor together" src={img_logo}/>
                </div>
                <Dropdown className="ui dropdown homefont item" text="Qui sommes-nous ?" >
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/' className="ui teal"> Accueil </Dropdown.Item>
                        <Dropdown.Item as={Link} to='/ourgoalpage' className="ui teal"> Nos Objectifs </Dropdown.Item>
                        <Dropdown.Item as={Link} to='/oursystempage'> Notre système </Dropdown.Item>
                        <Dropdown.Item as={Link} to='/aboutuspage'> A propos de nous </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="right menu">
                    <a className="item">
                        <i className="facebook inverted big icon"></i>
                        <i className="linkedin inverted big icon"></i>
                    </a>
                </div>
            </div>
        );
    }
}


export default Menu