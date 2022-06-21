import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

import BlogList from './components/blog-list';
import Contact from './components/contact';

import Views from './routes/views';
import Invoice from './routes/invoice';


  const rootElement =  document.getElementById('root');
  render(
        <BrowserRouter>
            <Routes>
                  
                  <Route path='/' element={<App />} >
                        {/* NESTED ROUTES */}
                        <Route path='/blogist' element={<BlogList />} />
                        <Route path='/contact' element={<Contact />}>
                              <Route path='views' element={<Views />} /> 
                              <Route path='contact' element={<Invoice />} />    
                              {/* <Route path=':contactId/edit' element={<Edit />} />         */}
                        </Route> 
                        <Route path='/views' element={<Views />} /> 
                  </Route>
                  <Route path='/views' element={<Views />} /> 
                  <Route path='/contact' element={<Invoice />} />      
                              
            </Routes>
      </BrowserRouter>,
        rootElement
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
