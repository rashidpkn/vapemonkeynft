import {createBrowserRouter} from 'react-router-dom'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Metaverse from './pages/metaverse'
import Press from './pages/press'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'about',
        element:<About />
    },
    {
        path:'contact',
        element:<Contact />
    },
    {
        path:'meta',
        element:<Metaverse />
    },
    {
        path:'press',
        element:<Press />
    }
])

export default router