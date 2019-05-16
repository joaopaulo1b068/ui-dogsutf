import React from 'react'
import styled from 'styled-components'
import {PURPLE} from '../styles/colors'

export const Card = (props) => {
    return (
        <StyledCard>
            <img src={props.dog.img} alt="doguinho"></img>
            <span>{props.dog.sexo || 'sexo'}</span>
            <span>{props.dog.tamanho || 'tamanho'}</span>
            <span>{props.dog.cidade || 'cidade'} / {props.dog.uf || 'uf'}</span>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    background: rgba(255,255,0, 0.4);
    border-radius: 4px;
    padding: 10px;
    display: flex;
    flex-direction: column;

    img{
        height: 150px;
        width: 100%;
        display: block;
        border-radius: 4px;
    }

    span{
        color: black;
        text-align: center;
        margin-top: 10px;
    }

`