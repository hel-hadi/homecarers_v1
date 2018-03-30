import React from 'react'
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import 'semantic-ui-css/semantic.min.css'
import { Link } from "react-router-dom";
import img_logo from '@img/logo.png'
import '@css/styles.css'
import '@css/homepage.css'

let MenuMobile = [
    <div className="center ui grid">
        <div className="center ui grid">
            <div className="ui hidden divider"></div>
            <div className="ui hidden divider"></div>
            <div className="ui hidden divider"></div>
            <h1 className="ui page-header">
                            <span className="">
                                HomeCarers
                            </span>
            </h1>
        </div>
    </div>,
    <SidebarItem textAlign="center">
        <div className="ui hidden divider"></div>
        <img className="ui centered small circular image" alt="chat" src={img_logo} />
    </SidebarItem>,
    <Link className="homewhite" to='/'>
        <SidebarItem textAlign="left">
            <br />
            <i className="home icon"></i>
            Home
        </SidebarItem>
        <div className="ui section divider"></div>

    </Link>,
    <Link className="homewhite" to='/oursystempage'>
        <SidebarItem textAlign="left">
            <i className="cogs icon"></i>
            Our System
        </SidebarItem>
        <div className="ui section divider"></div>

    </Link>,
    <Link className="homewhite" to='/ourgoalpage'>
        <SidebarItem textAlign="">
            <i className="clipboard icon"></i>
            Our Goal
        </SidebarItem>
        <div className="ui section divider"></div>

    </Link>,
    <Link className="homewhite" to='/aboutuspage'>
        <SidebarItem textAlign="">
            <i className="address card icon"></i>
            About Us
        </SidebarItem>
        <div className="ui section divider"></div>

    </Link>,
    <div>
        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>
    </div>,
    <SidebarItem textAlign="center">
        <Link className="ui active inverted  button" to="/loginpage">Sign In</Link>
        <Link className="ui active inverted button"  to="/signup">Sign up</Link>
    </SidebarItem>,
    <div>
        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>
    </div>,
    <SidebarItem textAlign="center">
        <a href="https://fr-fr.facebook.com/"><i className="facebook inverted big icon"></i></a>
        <a href="https://fr.linkedin.com/"><i className="linkedin inverted big icon"></i></a>
    </SidebarItem>
];

function changeSidebar (MenuMobile) {
    let isAuthenticated = 0;
    if (isAuthenticated) {
        console.log("je rentre");
        MenuMobile = [
            <div className="center ui grid">
                <div className="center ui grid">
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <h1 className="ui page-header">
                            <span className="">
                                HomeCarers
                            </span>
                    </h1>
                    <div className="ui hidden divider"></div>
                </div>
            </div>,
            <SidebarItem textAlign="center">
                <img className="ui centered small circular image" alt="chat" src={img_logo} />
                <div className="ui section divider"></div>
            </SidebarItem>,
            <Link className="homewhite" to='/'>
                <SidebarItem textAlign="left">
                <br />
                <i className="home icon"></i>
                    Home
                </SidebarItem>
            </Link>,
            <Link className="homewhite" to='/oursystempage'>
                <SidebarItem textAlign="left">
                    <i className="cogs icon"></i>
                    Our System
                </SidebarItem>
            </Link>,
            <Link className="homewhite" to='/ourgoalpage'>
                <SidebarItem textAlign="">
                <i className="clipboard icon"></i>
                Our Goal
                </SidebarItem>
            </Link>,
            <Link className="homewhite" to='/aboutuspage'>
                <SidebarItem textAlign="">
                <i className="address card icon"></i>
                About Us
                </SidebarItem>
            </Link>,
            <div>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
            </div>,
            <SidebarItem textAlign="center">
                <Link className="ui active inverted  button" to="/dashboard">Account</Link>
                <button className="ui active inverted button" onClick={() => logout()}>Logout</button>
            </SidebarItem>,
            <div>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
            </div>,
            <SidebarItem textAlign="center">
                <a href="https://fr-fr.facebook.com/"><i className="facebook inverted big icon"></i></a>
                <a href="https://fr.linkedin.com/"><i className="linkedin inverted big icon"></i></a>
            </SidebarItem>
        ];
    }
    return MenuMobile
}

export default changeSidebar(MenuMobile)