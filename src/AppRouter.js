import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {HomeScreen} from './pages/HomeScreen'
import styled from 'styled-components'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {GRAY} from './styles/colors'
import {XLARGE} from './libs/grid'

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

const PublicRoute = ({component: Component, ...params}) => (
  <Route {...params} render={props =>  (
      <StyledScreen>
        <Header {...props} />
        <Component {...props}  />
        <Footer  />
      </StyledScreen>) 
  }/>
)

const StyledScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: ${GRAY};
`

export const AppRouter = () => {
  return (

    <BrowserRouter>
      <PublicRoute path="/" exact component={HomeScreen} />
    </BrowserRouter>
  )
}
