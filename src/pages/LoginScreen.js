import React from 'react'
import styled from 'styled-components'
import { LARGE } from '../libs/grid'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

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
        <StyledLoginScreen>
            <div>Login</div>
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

    .titulo{
        font-family: 'Roboto Slab', serif;
        font-size: 30px;
        margin-top: 30px;
    }
`