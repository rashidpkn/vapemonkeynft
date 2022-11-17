import {createBrowserRouter} from 'react-router-dom'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Metaverse from './pages/metaverse'

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
    }
])

export default router