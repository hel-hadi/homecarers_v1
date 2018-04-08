import React from 'react'
import { Route } from 'react-router-dom'
import { Sidebar } from 'react-responsive-sidebar'
import SidebarPage from '@temp/SidebarPage.jsx'
import MediaQuery from 'react-responsive'
import propTypes from 'prop-types'
import * as split from "./actions/routeSplit.jsx"
import UserRoute from './components/routes/UserRoute.jsx'
import GuestRoute from './components/routes/GuestRoute.jsx'
import Favicon from 'react-favicon'
import img_logo from '@img/logo.png'
import '@css/styles.css'
import '@css/homepage.css'

const App = ({ location }) => (
    <div>
        <MediaQuery minWidth={768}> {/* Web Page */}
                <Favicon url={img_logo}/>
                <Route location={location}  path="/" exact component={split.HomePage} />
                <Route location={location}  path="/ourgoalpage" exact component={split.OurGoalPage} />
                <Route location={location}  path="/oursystempage" exact component={split.OurSystemPage} />
                <Route location={location}  path="/aboutuspage" exact component={split.AboutUsPage} />
            <Route location={location}  path="/confirmation/:token" exact component={split.ConfirmationPage} />
            <GuestRoute location={location} path="/signup" exact component={split.SignupPage} />
                <GuestRoute location={location} path="/login" exact component={split.LoginPage} />
                <UserRoute location={location} path="/dashboard" exact component={split.DashboardPage} />
        </MediaQuery>
        <MediaQuery maxWidth={768}> {/* Mobile Responsive Page */}
            <Sidebar content={SidebarPage} background='#2b4e77' toggleIconColor='#cbcbcb'>
              <Favicon url={img_logo}/>
              <Route location={location}  path="/" exact component={split.HomePageMobile} />
              <Route location={location}  path="/ourgoalpage" exact component={split.OurGoalPageMobile} />
              <Route location={location}  path="/oursystempage" exact component={split.OurSystemPageMobile} />
              <Route location={location}  path="/aboutuspage" exact component={split.AboutUsPageMobile} />
              <Route path="/signup" exact component={split.SignupPageMobile} />
              <Route path="/login" exact component={split.LoginPageMobile} />
              <Route path="/dashboard" exact component={split.DashboardPageMobile} />
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