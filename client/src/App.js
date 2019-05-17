import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeBoard from './components/HomeBoard.js'
import Login from './components/Login.js'
import Navbar from './components/Navbar.js'
import UserModule from './components/UserModule.js'
import UserProfile from './components/UserProfile.js'
import {getThreadsOnMount,createNewUser,userSignInDetails} from './ajax.js'

class App extends Component {

  state = {
    user: {
      _id: "",
      userName: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      image: "https://imgur.com/fz9es8e.jpg"
    },
    userUpdates: {},
    threads: [],
    loggedIn: true
  }

  componentDidMount(){
    getThreadsOnMount()
      .then(threads => {
        this.setState({threads: threads})
      })
  }

  handleInput = (event) => {
    const attributeName = event.target.name
    const attributeValue = event.target.value

    const newUser = { ...this.state.userUpdates }
    newUser[attributeName] = attributeValue

    
    this.setState({ userUpdates: newUser }, function(){
    })
  }

  authenticateUser = (data) => {
    userSignInDetails(data)
      .then(user => {
        this.setState({loggedIn: true, user: user, userUpdates: user}, function(){
          console.log(this.state.userUpdates)
        })
      })
  }

  
  handleNewUser = (data) => {
    createNewUser(data)
      .then(user => {
        this.setState({loggedIn: true, user: user, userUpdates: user})
      })
  }

  handleLogOut = () => {
    let userReset = {
      userName: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      image: ""
    }

    this.setState({user: userReset, loggedIn: false}, function(){
    })
  }

  handleUserUpdate = (event) => { 
    event.preventDefault();
    console.log(this.state.userUpdates)
  }
    
  render(){

    const MessageBoard = () => (<HomeBoard threads={this.state.threads}/>)

    const SignInUp = () => (<Login 
      handleInput={this.handleInput}
      handleNewUser={this.handleNewUser}
      authenticateUser={this.authenticateUser}
    />)

    const Profile = () => (<UserProfile
      user={this.state.userUpdates}
      handleUserUpdate={this.handleUserUpdate}
      handleInput={this.handleInput}
    />)
    
    return (
      <Router>
        <div className="App">
          <div className="header-container">
            <Navbar />
          </div>
          <div className="user-container">
            {
              this.state.loggedIn ? <UserModule user={this.state.user} handleLogOut={this.handleLogOut}/> : <Route render={SignInUp}/>
            }
          </div>
          <div className="main-container">
            <Switch>
              <Route exact path="/" render={MessageBoard} />
              <Route exact path="/user-profile" render={Profile} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
