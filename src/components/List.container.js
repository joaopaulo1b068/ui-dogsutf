import React from 'react'
import styled from 'styled-components'
import { Card } from './Card'
import { Link } from 'react-router-dom';

export class ListContainer extends React.Component {

   list = [
      {img: 'https://res.cloudinary.com/hqbf9dy02/image/upload/v1558016517/dogsutf/download_1_cfapth.jpg'},
      {img: 'https://res.cloudinary.com/hqbf9dy02/image/upload/v1558016517/dogsutf/download_v7zntp.jpg'},
      {img: 'https://res.cloudinary.com/hqbf9dy02/image/upload/v1558016517/dogsutf/1_ak9yto.jpg'}
   ]

   render() {
      return (
         <StyledList>
            {this.list.map( (dog, index) => (
                  <div className="card" key={index}>
                     <Link to="/" className="link"> 
                        <Card dog={dog} />
                     </Link>
                  </div>
               )
            )}
         </StyledList>
      )
   }
}

const StyledList = styled.div`
    background-color: white;
    margin: 30px 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 250px);
    text-decoration: none;
   
   .card{
      margin: 10px;
   }

   .link{
      text-decoration: none;
   }
`