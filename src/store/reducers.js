import { combineReducers } from 'redux';
import { createStore } from 'redux'

import { CLICK_UPDATE_VALUE } from './action_types';

const initialState = {
  newValue: 'nenhm'
}

const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};

const Reducers = combineReducers({
  clickState: clickReducer
})

export const Store = createStore(Reducers);