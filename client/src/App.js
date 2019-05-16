import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeBoard from './components/HomeBoard.js'
import Login from './components/Login.js'
import Navbar from './components/Navbar.js'
import {getThreadsOnMount} from './ajax.js'

class App extends Component {

  state = {
    user: {},
    threads: []
  }

 

  componentDidMount(){
    getThreadsOnMount()
      .then(threads => {
        console.log(threads)
        this.setState({threads: threads})
      })
  }
   
    
  render(){

    const MessageBoard = () => (<HomeBoard threads={this.state.threads}/>)
    
    return (
      <Router>
        <div className="App">
          <div className="header-container">
            <Navbar />
          </div>
          <div className="user-container">
            <Login/>
          </div>
          <div className="main-container">
            <Switch>
              <Route exact path="/" render={MessageBoard} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
