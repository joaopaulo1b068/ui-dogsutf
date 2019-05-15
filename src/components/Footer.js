import React from 'react'
import styled from 'styled-components'
import { GRAY } from '../styles/colors'
import {XLARGE} from '../libs/grid'

export const Footer = () => {
    return (
        <StyledFooter>
            <span>UTFPR Ponta Grossa</span>
            <span>DEMO de Propósitos Educacionais</span>
            <span>Trabalho de Conclusão de Curso</span>
            <span>Disponível em: http://repositorio.roca.utfpr.edu.br/jspui/handle/1/10425</span>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    background-color: ${GRAY};
    width: 100%;
    max-width: ${XLARGE};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto Slab', serif;

    span{
        margin: 2px 0;
    }
`