import React from 'react'
import { Header } from '../components/Header';
import styled from 'styled-components'

export const HomeScreen = (props) => {

    return (
        <StyledHomeScreen>
            <Header route={props.history.location.pathname} />
        </StyledHomeScreen>
    )
}

const StyledHomeScreen = styled.div`
    background-color: rgba(211,211,211,0.2);
`