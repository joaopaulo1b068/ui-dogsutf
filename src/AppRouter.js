import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {HomeScreen} from './pages/HomeScreen'
import styled from 'styled-components'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {GRAY} from './styles/colors'
import { SignUpScreen } from './pages/SignUpScreen';
import { LoginScreen } from './pages/LoginScreen';

const PublicRoute = ({component: Component, ...params}) => (
  <Route {...params} render={props =>  (
      <StyledScreen id="router-comp">
        <Header {...props} />
        <Component {...props}  />
        <Footer  />
      </StyledScreen>) 
  }/>
)
/**
 *   display: flex;
  flex-direction: column;
  justify-content: space-between;
 */
const StyledScreen = styled.div`
  background-color: ${GRAY};
  display: grid;
  grid-template-rows: 80px auto 120px;
`

export const AppRouter = () => {
  return (

    <BrowserRouter>
      <PublicRoute path="/" exact component={HomeScreen} />
      <PublicRoute path="/cadastro" exact component={SignUpScreen} />
      <PublicRoute path="/login" exact component={LoginScreen} />
    </BrowserRouter>
  )
}
