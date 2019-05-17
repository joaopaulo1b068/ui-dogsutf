import { combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createStore } from 'redux'

import { CLICK_UPDATE_VALUE, SIGNUP_SUCCESS, SIGNUP_ERROR } from './action_types';

const initialState = {
   newValue: 'nenhm',
   thunk: 'fds',
}

const clickReducer = (state = initialState, action) => {
   switch (action.type) {
      case CLICK_UPDATE_VALUE:
         return { ...state, newValue: action.newValue }
      case 'THUNK':
         console.log(action.payload)
         return { ...state, thunk: JSON.stringify(action.payload) }
      default:
         return state;
   }
}

const signupReducer = (state = { user: false, error: false }, action) => {

   let {type, payload} = action

   switch (type){
      case SIGNUP_SUCCESS:
         return { ...state, user: payload }
      case SIGNUP_ERROR:
         return {...state, error: payload}
      default: return state
   }
}

const Reducers = combineReducers({
   signupState: signupReducer,
   clickState: clickReducer
})

export const Store = createStore(Reducers, applyMiddleware(thunk));