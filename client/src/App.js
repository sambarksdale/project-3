import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeBoard from './components/HomeBoard.js'
import Login from './components/Login.js'
import Navbar from './components/Navbar.js'
import {getThreadsOnMount,createNewUser,userSignInDetails} from './ajax.js'

class App extends Component {

  state = {
    user: {
      userName: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      image: ""
    },
    threads: [],
    loggedIn: false
  }

  componentDidMount(){
    getThreadsOnMount()
      .then(threads => {
        console.log(threads)
        this.setState({threads: threads})
      })
  }

  handleInput = (event) => {
    const attributeName = event.target.name
    const attributeValue = event.target.value

    const newUser = { ...this.state.user }
    newUser[attributeName] = attributeValue

    this.setState({ user: newUser }, function(){
      console.log(this.state.user)
    })
  }

  authenticateUser = (event) => {
    event.preventDefault();
    userSignInDetails(this.state.user)
      .then(user => {
        console.log(user)
        this.setState({loggedIn: true})
      })
  }

  
  handleNewUser = (event) => {
    event.preventDefault();
    createNewUser(this.state.user)
      .then(user => {
        console.log(user)
        this.setState({loggedIn: true})
      })
  }
    
  render(){

    const MessageBoard = () => (<HomeBoard threads={this.state.threads}/>)

    const SignInUp = () => (<Login 
      handleInput={this.handleInput}
      handleNewUser={this.handleNewUser}
      authenticateUser={this.authenticateUser}
    />)
    
    return (
      <Router>
        <div className="App">
          <div className="header-container">
            <Navbar />
          </div>
          <div className="user-container">
            {
              this.state.loggedIn ? null : <Route render={SignInUp}/>
            }
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
