import Auth from '../utils/auth'
const host = 'http://localhost:5000/'

async function register (username, email, password) {
    const res = await window.fetch(host + 'auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    })
  
    return res.json()
  }

  async function login (email, password) {
    const res = await window.fetch(host + 'auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
  
    return res.json()
  }

  async function submitPost(postText){
    
    const res= await window.fetch(host+'posts/submit',{
      method:'POST',
      headers:{'Content-Type': 'application/json',
      'Authorization': 'bearer ' + Auth.getToken()},
      body:JSON.stringify({postText})
    })
    return res.json()
  }

  async function fetchUserPosts () {
    const res = await window.fetch(host + 'posts/userposts', {
      headers: {
        'Authorization': 'bearer ' + Auth.getToken()
      }
    })
    return res.json()
  }
  async function fetchAllPosts () {
    const res = await window.fetch(host + 'posts/allposts', {
      headers: {
        'Authorization': 'bearer ' + Auth.getToken()
      }
    })
    return res.json()
  }

  async function getUserLevel () {
    const res = await window.fetch(host + 'posts/userlevel', {
      headers: {
        'Authorization': 'bearer ' + Auth.getToken()
      }
    })
    return res.json()
  }

  async function likePost (id) {
    const res = await window.fetch(host + `posts/like/${id}`, {
      method: 'POST',
      headers: {
        'Authorization': 'bearer ' + Auth.getToken()
      }
    })
  
    return res.json()
  }

  async function unLikePost (id) {
    const res = await window.fetch(host + `posts/unlike/${id}`, {
      method: 'POST',
      headers: {
        'Authorization': 'bearer ' + Auth.getToken()
      }
    })
  
    return res.json()
  }


  export {
      register,
      login,
      submitPost,
      fetchUserPosts,
      fetchAllPosts,
      getUserLevel,
      likePost,
      unLikePost
    }