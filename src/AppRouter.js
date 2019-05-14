import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {HomeScreen} from './screens/HomeScreen'

// const PublicRoute = ({component: Component, ...params}) => {
//   <Route 
//     {...params} 
//     render={props => 
//       (<Component 
//         {...props, state: {from: props.location} } />
//       ) 
//     } 
//   />
// }

export const AppRouter = () => {
  return (

    <BrowserRouter>
      <Route path="/" exact component={HomeScreen} />
    </BrowserRouter>
  )
}
