import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  withRouter } from 'react-router-dom'
import Auth from '../utils/auth'
import {fetchAllPostsAction} from '../actions/posts-actions'
import PostShow from './common/PostShow'





class Đotovi extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
          loggedIn: false,
          siteLevel:2,
        
         username:''
        }
        this.onChange = this.onChange.bind(this)
        this.submitStih=this.submitStih.bind(this)
      }

    componentDidMount () {
        if (Auth.isUserAuthenticated()) {
          this.setState({ 
              loggedIn: true,
              username : Auth.getUsername()
            })
          this.props.fetchAllPosts()
        }
       
        
        
      }
    
      componentDidUpdate (nextProps) {
        if (nextProps.loginSuccess) {
          this.setState({ loggedIn: true })
        }
      }
      onChange (e) {
        this.setState({[e.target.name]: e.target.value})
      }
submitStih(){
  this.props.submitPost(this.state.postText)
}

    render() {
        const {username}=this.state
       
       

        const posts = this.props.allPosts
        return (
            <div>
             welcome {username}
            
                <br/>
               
                <PostShow
                posts={posts}/>
                
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
      loginSuccess: state.login.success,
      allPosts: state.userPosts,
    }
  }
  
  function mapDispatchToProps (dispatch) {
    return {
       
        fetchAllPosts: () => dispatch(fetchAllPostsAction()),
    }
  }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Đotovi))
