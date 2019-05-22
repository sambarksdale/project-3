import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {getThreads,createNewUser,userSignInDetails,createThread,editUser,deleteUser,editThread,deleteThread} from './ajax.js'
import './App.css';
import HomeBoard from './components/HomeBoard.js'
import Login from './components/Login.js'
import Navbar from './components/Navbar.js'
import Thread from './components/Thread.js'
import UserModule from './components/UserModule.js'
import UserProfile from './components/UserProfile.js'

class App extends Component {

  state = {
    user: {
      _id: "",
      userName: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      image: "https://imgur.com/SQwNGsa"
    },
    userUpdates: {},
    threads: [],
    loggedIn: false,
    newThread: false,
  }

  componentDidMount(){
    getThreads()
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
        if(user === null){
          alert("enter valid username and password")
        } else {
          this.setState({loggedIn: true, user: user, userUpdates: user}, function(){
          })
        }
        
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
    editUser(this.state.userUpdates)
      .then(updatedUser => {
        this.setState({user: updatedUser})
      })
  }

  handleDeleteUser = () => {
    deleteUser(this.state.user._id)
      .then(() => {
        this.handleLogOut()
      })
  }

  showNewThreadContainer = () => {
    this.setState({newThread: true})
  }

  hideNewThreadContainer = () => {
    this.setState({newThread: false})
  }

  handleNewThread = (thread) => {
    createThread(thread)
      .then(() => {
        getThreads()
          .then(threads => {
            this.setState({threads: threads,newThread: false})
          })
      })
  }

  handleEditThread = (threadData) => {
    editThread(threadData)
      .then(() => {
        getThreads()
          .then(threads => {
            this.setState({threads: threads})
          })
      })
  }

  handleDeleteThread = (id) => {
    deleteThread(id)
      .then(threads => {
        this.setState({threads: threads})
      })
  }
    
  render(){

    const MessageBoard = () => (<HomeBoard 
      threads={this.state.threads}
      loggedIn={this.state.loggedIn}
      user={this.state.user}
      show={this.showNewThreadContainer}
      hide={this.hideNewThreadContainer}
      newThread={this.state.newThread}
      handleNewThread={this.handleNewThread}
    />)

    const SignInUp = () => (<Login 
      handleInput={this.handleInput}
      handleNewUser={this.handleNewUser}
      authenticateUser={this.authenticateUser}
    />)

    const Profile = () => (<UserProfile
      user={this.state.userUpdates}
      handleUserUpdate={this.handleUserUpdate}
      handleInput={this.handleInput}
      handleDeleteUser={this.handleDeleteUser}
    />)

    const SingleThread = (props) =>(<Thread 
      threads={this.state.threads}
      user={this.state.user}
      thread={props}
      handleEditThread={this.handleEditThread}
      handleDeleteThread={this.handleDeleteThread}
      loggedIn={this.state.loggedIn}
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
              <Route path="/:id" render={SingleThread} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
