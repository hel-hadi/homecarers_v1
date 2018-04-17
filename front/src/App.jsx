import React from 'react'
import Route from 'react-router-dom/Route'
import { Sidebar } from 'react-responsive-sidebar'
import Menu from '@temp/Menu'
import MediaQuery from 'react-responsive'
import SidebarPage from '@temp/SidebarPage'
import * as split from './actions/routeSplit'
import Favicon from 'react-favicon/dist/react-favicon'
import img_logo from '@img/logohome.png'


const App = ({ location }) => (
    <div>
        <Favicon url={img_logo}/>
        <MediaQuery minWidth={768}> {/* Web Page */}
            <Menu />
                <Route location={location}  path="/" exact component={split.BetaPage} />
                <Route location={location}  path="/aboutuspage" exact component={split.AboutUsPage} />
                <Route location={location}  path="/ourgoalpage" exact component={split.OurGoalPage} />
                <Route location={location}  path="/oursystempage" exact component={split.OurSystemPage} />
        </MediaQuery>
        <MediaQuery maxWidth={768}> {/* Mobile Responsive Page */}
            <Sidebar content={SidebarPage} background='#2b4e77' toggleIconColor='#dcaf8a' hoverhighlight='rgba(255,255,255,0.15)'>
              <Route location={location}  path="/" exact component={split.BetaPageMobile} />
              <Route location={location}  path="/aboutuspage" exact component={split.AboutUsPageMobile} />
              <Route location={location}  path="/ourgoalpage" exact component={split.OurGoalPageMobile} />
              <Route location={location}  path="/oursystempage" exact component={split.OurSystemPageMobile} />
            </Sidebar>
        </MediaQuery>
    </div>
);

export default App;