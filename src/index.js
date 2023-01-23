import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider } from 'react-router-dom'
import router from './router';
import './index.css'
import './textanimation.css'
import './textrainbow.css'
import { Provider } from 'react-redux';
import store from './redux/store';
// import './index.scss'


const App = ()=>{
  
  return(
    <div className='App'>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </div >
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);







