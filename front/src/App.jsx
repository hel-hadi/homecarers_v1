import React from 'react'
import Route from 'react-router-dom/Route'
import { Sidebar } from 'react-responsive-sidebar'
import MediaQuery from 'react-responsive';
import SidebarPage from '@temp/SidebarPage'
import { BetaPage, BetaPageMobile } from './actions/routeSplit'
import Favicon from 'react-favicon/dist/react-favicon'
import img_logo from '@img/logo2018.png'

const App = ({ location }) => (
    <div>
        <Favicon url={img_logo}/>
        <MediaQuery minWidth={768}> {/* Web Page */}
            <Route location={location} path="/" exact component={BetaPage} />
        </MediaQuery>
        <MediaQuery maxWidth={768}> {/* Mobile Responsive Page */}
            <Sidebar content={SidebarPage} background='#2b4e77' toggleIconColor='#dcaf8a' hoverhighlight='rgba(255,255,255,0.15)'>
                <Route location={location}  path="/" exact component={BetaPageMobile} />
            </Sidebar>
        </MediaQuery>
    </div>
);

export default App;