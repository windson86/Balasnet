import {SUBMIT_POST,FETCH_USER_POSTS,FETCH_ALL_POSTS,LIKE_POST,UNLIKE_POST} from './action-types'
import {submitPost,fetchUserPosts,fetchAllPosts,likePost,unLikePost} from '../api/remote'
import {beginAjax, endAjax} from './ajax-status'



function submitPostSuccess (post) {
    return {
      type: SUBMIT_POST,
      post
    }
  }

  function submitPostAction (data) {
    return (dispatch) => {
      return submitPost(data)
        .then(json => {
          if (json.success) {
            dispatch(submitPostSuccess(json.data))
          }
        })
    }
  }

  function fetchUserPostsSuccess (posts) {
    return {
      type: FETCH_USER_POSTS,
      posts
    }
  }

  function fetchUserPostsAction () {
    return async (dispatch) => {
      dispatch(beginAjax())
      const data = await fetchUserPosts()
      dispatch(fetchUserPostsSuccess(data))
      dispatch(endAjax())
    }
  }
  function fetchAllPostsSuccess (posts) {
    return {
      type: FETCH_ALL_POSTS,
      posts
    }
  }
  function fetchAllPostsAction () {
    return async (dispatch) => {
      dispatch(beginAjax())
      const data = await fetchAllPosts()
      dispatch(fetchAllPostsSuccess(data))
      dispatch(endAjax())
    }
  }

  function likePostSuccess (data) {
    return {
      type: LIKE_POST,
      data
    }
  }
  
  function unlikePostSuccess (data) {
    return {
      type: UNLIKE_POST,
      data
    }
  }

  function likePostAction (id) {
    return (dispatch) => {
      return likePost(id)
        .then(json => {
          if (json.success) {
            dispatch(likePostSuccess(json.data))
          }
        })
    }
  }
  
  function unLikePostAction (id) {
    return (dispatch) => {
      return unLikePost(id)
        .then(json => {
          if (json.success) {
            dispatch(unlikePostSuccess(json.data))
          }
        })
    }
  }

  export {
      submitPostAction,
      fetchUserPostsAction,
      fetchAllPostsAction,
      unLikePostAction,
      likePostAction
  }