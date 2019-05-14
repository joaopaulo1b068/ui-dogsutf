import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PURPLE } from '../styles/colors'
import {SMALL} from '../libs/grid'
import { LOGO_HEADER, BAR_ICON_HEADER } from '../libs/urls'

export const Header = (props) => {

   //    let link = () => {
   //       let url = window.location.href
   //       return url
   //    }

   const routes = [
      { path: '/', name: 'Início' },
      { path: '/cadastro', name: 'Cadastro' },
      { path: '/login', name: 'Login' }
   ]

   const [expand, setExpand] = useState(false)

   return (
      <StyledHeader>
         <Link to="/" ><img src={LOGO_HEADER} alt="Logo Cachorro" /></Link>
         <div className="links">
            {routes.map(route => {
               return (
                  <Link
                     to={route.path}
                     key={route.path}
                     className={`${props.route === route.path ? 'ativo' : ''} `}
                  > {route.name}
                  </Link>
               )
            })}
         </div>
      </StyledHeader>
   )
}

const StyledHeader = styled.div`
   background-color: ${PURPLE};
   height: 80px;
   border-radius: 4px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   .links{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
   }

   @media( min-width: ${SMALL} ){
      .botao-expand{
         display:none;
      }
   }

   @media( max-width: ${SMALL} ){
      .links{
         display: none;
      }
      display: flex;
      flex-direction: row;
      justify-content: center;
   }

   img{
      width: 80px;
   }

   .links > a{
      padding: 5px;
      text-decoration: none;
      color: white;
      font-size: 14px;
   }

   .ativo {
      font-weight: bold;
   }

`