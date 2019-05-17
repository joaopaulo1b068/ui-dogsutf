import { CLICK_UPDATE_VALUE } from './action_types'
import axios from 'axios'

export const clickButton = (value) => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
})

const ajax = async () => {
  return await axios.get('https://jsonplaceholder.typicode.com/todos/1')
}

const makeASandwich = (data) => {
  return {
    type: 'THUNK',
    payload: data
  }
}

export const asyncAct = (value) => {

  return (dispatch) => {
    return ajax().then(
      sauce => dispatch(makeASandwich(sauce.data)),
      //error => dispatch(apologize('The Sandwich Shop', forPerson, error))
    )
  }
}