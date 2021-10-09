import { SUBMIT_POST,FETCH_USER_POSTS,FETCH_ALL_POSTS,LIKE_POST,UNLIKE_POST } from "../actions/action-types";


function userPostReducer (state = [], action) {
    switch (action.type) {
      
      case SUBMIT_POST:
        return reconcile(state, [action.post])
        case FETCH_USER_POSTS:
      return reconcile(state, action.posts)
      case FETCH_ALL_POSTS:
      return reconcile(state, action.posts)
      case LIKE_POST:
        return reconcile(state, [action.data])
      case UNLIKE_POST:
        return reconcile(state, [action.data])
      default:
        return state
    }
  }




  function reconcile (oldData, newData) {
    const newDataById = {}
    for (const entry of newData) {
      newDataById[entry._id] = entry
    }
  
    const result = []
    for (const entry of oldData) {
      if (newDataById[entry._id]) {
        result.push(newDataById[entry._id])
        delete newDataById[entry._id]
      } else {
        result.push(entry)
      }
    }
  
    for (const entryId in newDataById) {
      result.push(newDataById[entryId])
    }
  
    return result
  }

  export {
    userPostReducer
  }