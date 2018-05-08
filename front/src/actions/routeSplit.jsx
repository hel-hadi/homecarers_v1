import Loadable from 'react-loadable'
import Loading from '@temp/Loading'

export const OurGoalPage = Loadable({
    loader: () => import('@pages/OurGoalPage.jsx'),
    loading: Loading,
})

export const AboutUsPage = Loadable({
    loader: () => import('@pages/AboutUsPage.jsx'),
    loading: Loading,
})

export const OurSystemPage = Loadable({
    loader: () => import('@pages/OurSystemPage.jsx'),
    loading: Loading,
})


export const OurGoalPageMobile = Loadable({
    loader: () => import('@mpages/OurGoalPageMobile.jsx'),
    loading: Loading,
})

export const AboutUsPageMobile = Loadable({
    loader: () => import('@mpages/AboutUsPageMobile.jsx'),
    loading: Loading,
})

export const OurSystemPageMobile = Loadable({
    loader: () => import('@mpages/OurSystemPageMobile.jsx'),
    loading: Loading,
})

export const BetaPage = Loadable({
    loader: () => import('@pages/BetaPage.jsx'),
    loading: Loading,
})

export const BetaPageMobile = Loadable({
    loader: () => import('@mpages/BetaPageMobile.jsx'),
    loading: Loading,
})

export const BetaForm = Loadable({
    loader: () => import('@form/BetaForm.jsx'),
    loading: Loading,
})

export const Menu = Loadable({
    loader: () => import('@temp/Menu.jsx'),
    loading: Loading,
})

export const App = Loadable({
    loader: () => import('../App.jsx'),
    loading: Loading,
})

export const ContactUsPage = Loadable({
    loader: () => import('@pages/ContactUsPage.jsx'),
    loading: Loading,
})

export const ContactUsForm = Loadable({
    loader: () => import('@form/ContactUsForm.jsx'),
    loading: Loading,
})

