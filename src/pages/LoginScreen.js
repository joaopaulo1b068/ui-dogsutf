import React from 'react'
import styled from 'styled-components'
import { LARGE } from '../libs/grid'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'
import {PURPLE} from '../styles/colors'

export const LoginScreen = () => {

    const schema = Yup.object().shape({
        email: Yup
            .string()
            .required('Preencha esse Campo'),
        password: Yup
            .string()
            .required('Preencha esse Campo')
    })

    let handleSubmit = (data) => {
        console.log(data)
    }

    return (
        <StyledLoginScreen id="login-screen">
            <div className="titulo" >Login</div>
            <Form schema={schema} onSubmit={handleSubmit} className="form" >
                <label htmlFor="email">Email</label>
                <Input name="email" />
                <label htmlFor="password" >Senha</label>
                <Input name="password" type="password" />
                <button type="submit" className="btn-sub" >Entrar</button>
            </Form>

        </StyledLoginScreen>
    )
}

const StyledLoginScreen = styled.div`
    width: 100%;
    max-width: ${LARGE};
    background-color: white;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .titulo{
        font-family: 'Roboto Slab', serif;
        font-size: 30px;
        margin-top: 30px;
        margin-bottom: 60px;
    }

    .form{
        display: flex;
        flex-direction: column;
    }

    .form > label{
        margin-top: 15px;
    }

    .form > .btn-sub{
        margin-top: 15px;
        max-width: 300px;
        border-radius: 4px;
        background: ${PURPLE};
        height: 40px;
        font-size: 20px;
        color: white;

        :hover {
            font-size: 24px;
        }
    }

    .form > span{
        color: red;
    }
`