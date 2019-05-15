import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Navbar from './components/Navbar.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/login" component={Login}/>
          {/* <Login /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
