import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux'


import store from '../store'
import Route from './Route'
import history from '../services/history';

import Header from '../components/Header'
import Footer from '../components/Footer';

import Login from '../pages/Login';
import Home from '../pages/Home';
import About from '../pages/About';
import Clients from '../pages/Clients';
import Contact from '../pages/Contact';

export default function Routes() {
    
  return (
    <>
    <Provider store={store}>
      <ConnectedRouter history={history}>   
          
          <Route path='/*' component={Header} />

          {/* Public pages */}
          <Route path="/" exact component={Home} />  
          <Route path="/login" exact component={Login} />
          <Route path="/about" exact component={About} />  
          <Route path="/clients" exact component={Clients} />  
          <Route path="/contact" exact component={Contact} />  
          
          <Route path='/*' component={Footer} />
      </ConnectedRouter>
    </Provider>
    </>
  );
}