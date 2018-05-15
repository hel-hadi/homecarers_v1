import React from 'react'
import Route from 'react-router-dom/Route'
import { Sidebar } from 'react-responsive-sidebar'
import MediaQuery from 'react-responsive';
import SidebarPage from '@temp/SidebarPage'
import { BetaPage, BetaPageMobile } from './actions/routeSplit'
import Favicon from 'react-favicon/dist/react-favicon'
import img_logo from '@img/logo2018.png'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import 'react-s-alert/dist/s-alert-css-effects/scale.css'
import 'react-s-alert/dist/s-alert-css-effects/flip.css'
import 'react-s-alert/dist/s-alert-css-effects/jelly.css'
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css'
import 'react-s-alert/dist/s-alert-css-effects/genie.css'
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css'

const App = ({ location }) => (
    <div>
        <Favicon url={img_logo}/>
        <MediaQuery minWidth={768}> {/* Web Page */}
            <Route location={location} path="/" exact component={BetaPage} />
        </MediaQuery>
        <MediaQuery maxWidth={768}> {/* Mobile Responsive Page */}
            <Sidebar content={SidebarPage} background='#e6e6e6' toggleIconColor='#ffffff' hoverhighlight='rgba(255,255,255,0.15)'>
                <Route location={location}  path="/" exact component={BetaPageMobile} />
            </Sidebar>
        </MediaQuery>
    </div>
);

export default App;