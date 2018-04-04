import React from 'react'
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import propTypes from 'prop-types'
import 'semantic-ui-css/semantic.min.css'
import MenuMobile from '@temp/MenuMobile.jsx'
import { Link } from "react-router-dom";
import img_logo from '@img/logo.png'
import '@css/styles.css'
import '@css/homepage.css'

const SidebarPage = [
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
    <MenuMobile />,
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

export default SidebarPage