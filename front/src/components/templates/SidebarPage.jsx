import React from 'react'
import { SidebarItem } from 'react-responsive-sidebar';
import Link from "react-router-dom/Link"
import img_logo from '@img/logosurblanc.png'

const SidebarPage = [
    <div className="ui centered center">

            <div className="ui hidden divider"></div>
            <div className="ui hidden divider"></div>
                <img className="ui centered medium2 circular image" alt="chat" src={img_logo} />
    </div>,
    <SidebarItem textAlign="center">
        <div className="ui hidden divider"></div>
    </SidebarItem>,
    <Link className="homeblue" to='/#home'>
        <SidebarItem textAlign="left">
            <br />
            <i className="home icon"></i>
             Accueil
        </SidebarItem>
    </Link>,
    <Link className="homeblue" to='/#oursystem'>
        <SidebarItem textAlign="left">
            <i className="clipboard icon"></i>
                Notre objectif
        </SidebarItem>

    </Link>,
    <Link className="homeblue" to='/#ourgoal'>
        <SidebarItem textAlign="">
            <i className="cogs icon"></i>
                Notre outil
        </SidebarItem>
    </Link>,
    <Link className="homeblue" to='/#aboutus'>
        <SidebarItem textAlign="">
            <i className="address card icon"></i>
              À propos de nous
        </SidebarItem>
        <div className="ui section divider"></div>

    </Link>,
    <div>
        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>
    </div>,
    <div>
        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>
    </div>,
    <SidebarItem textAlign="center">
        <a href="https://www.facebook.com/HomecarersFrance/"><i className="facebook blue big icon"></i></a>
        <a href="https://www.linkedin.com/company/28624734/"><i className="linkedin blue big icon"></i></a>
    </SidebarItem>,
    <div className="ui hidden divider"></div>,
    <div className="ui hidden divider"></div>,
    <SidebarItem textAlign="center">
        <Link className="homeblue" to='/#contactus'>Nous contacter</Link>
    </SidebarItem>
];

export default SidebarPage