import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Contact from './Components/Contact';
import Foot from "./Components/Foot";
import Head from './Components/Head';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProductDetail from './Components/ProductDetail';
import ColorState from './Components/ColorState';
import EffectHookCheck from './Components/EffectHookCheck';
import AllPosts from './Components/AllPosts';
import Login from './Components/Login';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Head/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/product/:id">
          <ProductDetail/>
        </Route>
        <Route exact path="/color">
          <ColorState/>
        </Route>
        <Route exact path="/effect">
          <EffectHookCheck/>
        </Route>
        <Route exact path="/posts">
          <AllPosts/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        

      </Switch>
      <Foot/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
