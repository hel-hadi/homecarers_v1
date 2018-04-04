import React from 'react'
import { Route } from 'react-router-dom'
import propTypes from 'prop-types'
import SidebarPage from '@temp/SidebarPage.jsx'
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
import UserRoute from './components/routes/UserRoute.jsx'
import GuestRoute from './components/routes/GuestRoute.jsx'
import Favicon from 'react-favicon'
import img_logo from '@img/logo.png'

const App = ({ location }) => (
    <div>
        <MediaQuery minWidth={768}> {/* Web Page */}
                <Favicon url={img_logo}/>
                <Route location={location}  path="/" exact component={HomePage} />
                <Route location={location}  path="/ourgoalpage" exact component={OurGoalPage} />
                <Route location={location}  path="/oursystempage" exact component={OurSystemPage} />
                <Route location={location}  path="/aboutuspage" exact component={AboutUsPage} />
                <GuestRoute location={location} path="/signup" exact component={SignupPage} />
                <GuestRoute location={location} path="/login" exact component={LoginPage} />
                <UserRoute location={location} path="/dashboard" exact component={DashboardPage} />
        </MediaQuery>
        <MediaQuery maxWidth={768}> {/* Mobile Responsive Page */}
            <Sidebar content={SidebarPage} background='#2b4e77' toggleIconColor='#cbcbcb' hoverhighlight='rgba(255,255,255,0.15)'>
              <Favicon url={img_logo}/>
              <Route location={location}  path="/confirmation/:token" exact component={ConfirmationPage} />
              <Route location={location}  path="/" exact component={HomePage} />
              <Route location={location}  path="/ourgoalpage" exact component={OurGoalPage} />
              <Route location={location}  path="/oursystempage" exact component={OurSystemPage} />
              <Route location={location}  path="/aboutuspage" exact component={AboutUsPage} />
              <Route path="/signup" exact component={SignupPage} />
              <Route path="/login" exact component={LoginPage} />
              <Route path="/dashboard" exact component={DashboardPage} />
            </Sidebar>
        </MediaQuery>
    </div>
);

App.propTypes = {
    location: propTypes.shape({
        pathname: propTypes.string.isRequired
    }).isRequired
};

export default App;