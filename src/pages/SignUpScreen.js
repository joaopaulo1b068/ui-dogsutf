import React, { useState } from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import { LARGE, SMALL } from '../libs/grid'
import { Form, Input } from "@rocketseat/unform";
import { PURPLE } from '../styles/colors'

export const SignUpScreen = () => {

    const schema = Yup.object().shape({
        name: Yup
            .string()
            .required('Preencha esse Campo'),
        email: Yup
            .string()
            .email('Insira um Email Válido')
            .required('Preencha esse Campo'),
        password: Yup
            .string()
            .min(4, 'Use Pelo Menos 4 Caracteres')
            .required('Preencha esse Campo'),
        passwordconfirm: Yup
            .string()
            .oneOf([Yup.ref('password'), null], 'As Senhas não são Iguais'),
        curso: Yup
            .string(),
        campus: Yup
            .string()
    })

    const handleSubmit = (data) => {
        console.log({...data, aluno});
    }

    const [aluno, setAluno] = useState(false)

    return (
        <StyledSignUpScreen id="sign-up-screen" >
            <div className="titulo">Cadastro</div>
            <div className="container">
                <Form schema={schema} onSubmit={handleSubmit} className="form" >

                    <label htmlFor="name">Nome</label>
                    <Input name="name" />

                    <label htmlFor="email">Email</label>
                    <Input name="email" />

                    <label htmlFor="isAluno" >É aluno da UTF ?</label>
                    <select value={aluno} onChange={(event) => setAluno(event.target.value)}>
                        <option value={true}>Sim</option>
                        <option value={false}>Não</option>
                    </select>

                    <label htmlFor="curso" >Curso</label>
                    <Input name="curso" disabled={!aluno} type="text" />

                    <label htmlFor="campus" >Campus (cidade)</label>
                    <Input name="campus" disabled={!aluno} type="text" />

                    <label htmlFor="password" >Senha</label>
                    <Input name="password" type="password" />

                    <label htmlFor="passwordconfirm" >Confirme a Senha</label>
                    <Input name="passwordconfirm" type="password" />

                    <button type="submit" className="btn-sub" >Cadastrar</button>
                </Form>
                <div className="banner"></div>
            </div>
        </StyledSignUpScreen>
    )
}

const StyledSignUpScreen = styled.div`
    background-color: white;
    max-width: ${LARGE};
    margin: 0 auto;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;

    .container{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .container > .banner {
        width: 70%;
        margin-top: 30px;
    }

    .titulo{
        font-family: 'Roboto Slab', serif;
        font-size: 30px;
        margin-top: 30px;
    }

    .form{
        background: rgba(255,255,0, 0.2);
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        width: 30%;
        padding: 10px;
    }

    .form > label {
        margin: 20px 0 0 0;
    }

    .form > input, select{
        max-width: 300px;
        padding: 5px;
        border-radius: 4px;
        font-size: 14px;
    }

    .container > .form > .btn-sub {
        margin-top: 30px;
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

    .container > .form > span {
        color: red;
        text-align: center;
        margin-bottom: 10px;
    }

    @media (max-width: ${SMALL}){
        .container > .banner{
            display: none;
        }
        .container > .form {
            width: 100%;
        }
    }

`