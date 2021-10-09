import React, { Component } from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import Auth from './utils/auth'
import Predvorje from './components/Predvorje'

//import toastr from 'toastr'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutAction } from './actions/auth-actions'
import {getUserLevel} from './api/remote'


class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loggedIn: false,
      level:5
    }

    this.logout = this.logout.bind(this)
  }

 
  

  componentDidMount () {
    if (Auth.isUserAuthenticated()) {
      
        getUserLevel().then(data=>{
          this.setState({ 
            level: data.level,
           
           })
        })
     
      this.setState({ 
        loggedIn: true,
       
       })
    }

    
  }

  componentDidUpdate (nextProps) {
    if (nextProps.loginSuccess !==this.props.loginSuccess) {
      this.setState({ loggedIn: true })
    }
  }

  logout () {
    this.setState({ loggedIn: false })
    this.props.logout()
    //toastr.success('Logout successful')
    this.props.history.push('/login')
  }

  render () {
     
   const {level}=this.state
    return (
      <div className='App'>
       
     <Navbar
     level={level}
     logout={this.logout}
     loggedIn={this.state.loggedIn}
    
     />
             <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/predvorje' component={Predvorje} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            
          </Switch>
         
        </main>
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loginSuccess: state.login.success,
    
  }
}

function mapDispatchToProps (dispatch) {
  return {
    logout: () => dispatch(logoutAction()),
   
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))