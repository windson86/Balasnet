class Auth {
    static isUserAuthenticated () {
      return window.localStorage.getItem('authToken') !== null
    }
  
    static getToken () {
      return window.localStorage.getItem('authToken')
    }
  
    static getUsername () {
      return window.localStorage.getItem('username')
    }
  
   
  }
  
  export default Auth