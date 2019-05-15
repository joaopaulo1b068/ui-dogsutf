import React from 'react'
import styled from 'styled-components'
import { IMG_BANNER } from '../libs/urls';

export const Banner = () => {
    
    return (
        <StyledBanner>
            <img src={IMG_BANNER} alt="foto grande cachorro"/>
            <div className="text">
                <span>Ganhe um amigo hoje</span>
            </div>
        </StyledBanner>
    )
}

const StyledBanner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    img{
        height: 400px;
        width: 800px;
        opacity: 0.2;
        filter: blur(4px);
    }
    background: gray;

    .text {
        color: white;
        font-weight: bold;
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        text-align: center;
        span{
            font-size: 50px;
        }
    }
`