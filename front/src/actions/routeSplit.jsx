import Loadable from 'react-loadable'
import Loading from '@temp/Loading'

export const HomePage = Loadable({
    loader: () => import('@pages/HomePage.jsx'),
    loading: Loading,
})

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

export const LoginPage = Loadable({
    loader: () => import('@pages/LoginPage.jsx'),
    loading: Loading,
})

export const ConfirmationPage = Loadable({
    loader: () => import('@pages/ConfirmationPage.jsx'),
    loading: Loading,
})

export const SignupPage = Loadable({
    loader: () => import('@pages/SignupPage.jsx'),
    loading: Loading,
})

export const DashboardPage = Loadable({
    loader: () => import('@pages/DashboardPage.jsx'),
    loading: Loading,
})

export const HomePageMobile = Loadable({
    loader: () => import('@mpages/HomePageMobile.jsx'),
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

export const LoginPageMobile = Loadable({
    loader: () => import('@mpages/LoginPageMobile.jsx'),
    loading: Loading,
})

export const SignupPageMobile = Loadable({
    loader: () => import('@mpages/SignupPageMobile.jsx'),
    loading: Loading,
})

export const DashboardPageMobile = Loadable({
    loader: () => import('@mpages/DashboardPageMobile.jsx'),
    loading: Loading,
})

export const LoginForm = Loadable({
    loader: () => import('@form/LoginForm.jsx'),
    loading: Loading,
})

export const SignupForm = Loadable({
    loader: () => import('@form/SignupForm.jsx'),
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