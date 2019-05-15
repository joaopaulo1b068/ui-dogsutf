import React from 'react'
import styled from 'styled-components'
import {Card} from './Card'

export const Lista = () => {
    return (
        <StyledList>
            <Card />
        </StyledList>
    )
}

const StyledList = styled.div`
    background-color: white;
    margin-left: 10px;
    margin-right: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
`