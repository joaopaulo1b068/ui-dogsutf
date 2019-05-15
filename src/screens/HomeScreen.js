import React from 'react'
import styled from 'styled-components'
import { Selector } from '../components/Selector';
import {Lista} from '../components/Lista'
import {XLARGE} from '../libs/grid'

export const HomeScreen = (props) => {

    return (
        <StyledHomeScreen>
            <Selector />
            <Lista />
        </StyledHomeScreen>
    )
}

const StyledHomeScreen = styled.div`
    background-color: white;
    max-width: ${XLARGE};
    margin: 0 auto;
    height: 100%;
    width: 100%;
`