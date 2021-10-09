/* eslint-disable import/no-anonymous-default-export */
import ajaxStatusReducer from './ajax-reducer'

import {registerReducer, loginReducer, registerErrorReducer, loginErrorReducer} from './auth-reducer'

import {userPostReducer} from './posts-reducer'

export default {
register: registerReducer,
login: loginReducer,
registerError: registerErrorReducer,
loginError: loginErrorReducer,
ajaxCalls: ajaxStatusReducer,
userPosts: userPostReducer,

}