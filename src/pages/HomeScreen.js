import React from 'react'
import styled from 'styled-components'
import { Selector } from '../components/Selector';
import {ListContainer} from '../components/List.container'
import {LARGE} from '../libs/grid'

export const HomeScreen = (props) => {

    return (
        <StyledHomeScreen>
            <Selector />
            <ListContainer />
        </StyledHomeScreen>
    )
}

const StyledHomeScreen = styled.div`
    background-color: white;
    max-width: ${LARGE};
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
`