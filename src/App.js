import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route ,browserHistory } from "react-router-dom";
import './App.css';
import DashBoard from './pages/dashBoard/index.js';
import Search from './pages/search/index.js';
import Setting from './pages/settings/index.js';
import HomePage from './pages/homePage/index.js';
import Login from './pages/loginPage/index.js';


function App() {
  return (
    <div>
    <Router>
      <switch>
        <Route path="/dash" component={DashBoard}/>
        <Route path="/setting" component={Setting}/>
        <Route path="/search" component={Search}/>
        <Route path="/home" component={HomePage}/>
        <Route path="/login" component={Login}/>
      </switch>
    </Router>

    </div>
  );
}

export default App;
