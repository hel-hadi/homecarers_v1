import React from 'react'
import { Route } from 'react-router-dom'
import propTypes from 'prop-types'
import MenuMobile from '@temp/MenuMobile.jsx'
import { Sidebar, SidebarItem } from 'react-responsive-sidebar'
import MediaQuery from 'react-responsive';
import 'semantic-ui-css/semantic.min.css'
import HomePage from '@pages/HomePage.jsx'
import SignupPage from '@pages/SignupPage.jsx'
import LoginPage from '@pages/LoginPage.jsx'
import ConfirmationPage from '@pages/ConfirmationPage.jsx'
import OurGoalPage from '@pages/OurGoalPage.jsx'
import OurSystemPage from '@pages/OurSystemPage.jsx'
import DashboardPage from '@pages/DashboardPage.jsx'
import AboutUsPage from '@pages/AboutUsPage.jsx'
import Favicon from 'react-favicon'
import img_logo from '@img/logo.png'

const App = ({}) => (
    <div>
        <MediaQuery minWidth={768}> {/* Mobile Responsive */}
                <Favicon url={img_logo}/>
                <Route location={location}  path="/" exact component={HomePage} />
                <Route location={location}  path="/ourgoalpage" exact component={OurGoalPage} />
                <Route location={location}  path="/oursystempage" exact component={OurSystemPage} />
                <Route location={location}  path="/aboutuspage" exact component={AboutUsPage} />
                <Route path="/signup" exact component={SignupPage} />
                <Route path="/loginpage" exact component={LoginPage} />
                <Route path="/confirmation/:token" exact component={ConfirmationPage} />
                <Route path="/dashboard" exact component={DashboardPage} />
        </MediaQuery>
        <MediaQuery maxWidth={768}> {/* Mobile Responsive */}
            <Sidebar content={MenuMobile} background='#2b4e77' toggleIconColor='#cbcbcb' hoverhighlight='rgba(255,255,255,0.15)'>
              <Favicon url={img_logo}/>
              <Route location={location}  path="/" exact component={HomePage} />
              <Route location={location}  path="/ourgoalpage" exact component={OurGoalPage} />
              <Route location={location}  path="/oursystempage" exact component={OurSystemPage} />
              <Route location={location}  path="/aboutuspage" exact component={AboutUsPage} />
                <Route path="/signup" exact component={SignupPage} />
              <Route path="/loginpage" exact component={LoginPage} />
              <Route path="/confirmation/:token" exact component={ConfirmationPage} />
              <Route path="/dashboard" exact component={DashboardPage} />
            </Sidebar>
        </MediaQuery>
    </div>
);

export default App;