import React from 'react'
import styled from 'styled-components'
import { Card } from './Card'
import { Link } from 'react-router-dom';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {clickButton, asyncAct} from '../store/actions'

class ListClass extends React.Component {

   // constructor(props){
   //    super(props)
   //    this.newValue = props.newValue
   // }
   list = [
      {img: 'https://res.cloudinary.com/hqbf9dy02/image/upload/v1558016517/dogsutf/download_1_cfapth.jpg'},
      {img: 'https://res.cloudinary.com/hqbf9dy02/image/upload/v1558016517/dogsutf/download_v7zntp.jpg'},
      {img: 'https://res.cloudinary.com/hqbf9dy02/image/upload/v1558016517/dogsutf/1_ak9yto.jpg'}
   ]

   render() {
      const {newValue, thunk, asyncAct } = this.props 
      return (
         <StyledList>
            <span>{thunk}</span>
            <span>{newValue}</span>
            <button onClick={asyncAct}>Thunk</button>
            {/* {this.list.map( (dog, index) => (
                  <div className="card" key={index}>
                     <Link to="/" className="link"> 
                        <Card dog={dog} />
                     </Link>
                  </div>
               )
            )} */}
         </StyledList>
      )
   }
}

const mapStateToProps = store => ({
   newValue: store.clickState.newValue,
   thunk: store.clickState.thunk
 })

 const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton, asyncAct }, dispatch);

 export const ListContainer = connect(mapStateToProps, mapDispatchToProps) (ListClass)

//    display: grid;
// grid-template-columns: repeat(auto-fit, 250px);

const StyledList = styled.div`
    background-color: white;
    margin: 30px 10px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
   
   .card{
      margin: 10px;
      width: 250px;
      text-align: center;
   }

   .link{
      text-decoration: none;
   }
`