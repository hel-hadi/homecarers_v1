import React from 'react'
import { Route } from 'react-router-dom'
import { Sidebar } from 'react-responsive-sidebar'
import SidebarPage from '@temp/SidebarPage.jsx'
import MediaQuery from 'react-responsive'
import propTypes from 'prop-types'
import * as split from "./actions/routeSplit.jsx"
import Favicon from 'react-favicon'
import img_logo from '@img/logohome.png'
import '@css/styles.css'
import '@css/homepage.css'

const App = ({ location }) => (
    <div>
        <MediaQuery minWidth={768}> {/* Web Page */}
                <Favicon url={img_logo}/>
                <Route location={location}  path="/" exact component={split.BetaPage} />
                <Route location={location}  path="/home" exact component={split.HomePage} />
                <Route location={location}  path="/ourgoalpage" exact component={split.OurGoalPage} />
                <Route location={location}  path="/oursystempage" exact component={split.OurSystemPage} />
                <Route location={location}  path="/aboutuspage" exact component={split.AboutUsPage} />
                <Route location={location} path="/dashboard" exact component={split.DashboardPage} />
        </MediaQuery>
        <MediaQuery maxWidth={768}> {/* Mobile Responsive Page */}
            <Sidebar content={SidebarPage} background='#2b4e77' toggleIconColor='#2b4e77'>
              <Favicon url={img_logo}/>

              <Route location={location}  path="/" exact component={split.BetaPageMobile} />
              <Route location={location}  path="/home" exact component={split.HomePageMobile} />
                <Route location={location}  path="/ourgoalpage" exact component={split.OurGoalPageMobile} />
              <Route location={location}  path="/oursystempage" exact component={split.OurSystemPageMobile} />
              <Route location={location}  path="/aboutuspage" exact component={split.AboutUsPageMobile} />
              <Route location={location} path="/dashboard" exact component={split.DashboardPageMobile} />
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