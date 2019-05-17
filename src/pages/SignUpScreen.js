import React, { useState } from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { LARGE, SMALL } from '../libs/grid'
import { Form, Input } from "@rocketseat/unform";
import { PURPLE } from '../styles/colors'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { asyncSignUp } from '../store/actions'

class SignUpScreenContainer extends React.Component {

    schema = Yup.object().shape({
        name: Yup.string().required('Preencha esse Campo'),
        email: Yup.string().email('Insira um Email Válido').required('Preencha esse Campo'),
        password: Yup.string().min(4, 'Use Pelo Menos 4 Caracteres').required('Preencha esse Campo'),
        passwordconfirm: Yup.string().oneOf([Yup.ref('password'), null], 'As Senhas não são Iguais'),
        curso: Yup.string(),
        campus: Yup.string(),
    })

    handleSubmit = (data) => {
        this.props.asyncSignUp(data)
    }

    state = { aluno: false }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.user !== this.props.user) {
            console.log('user cadastrado ', this.props.user)
            setTimeout( () => {
                this.props.history.push('/login')
            }, 2000)
        }
        if (prevProps.error !== this.props.error){
            console.log('error signup ', this.props.error)
        }
    }

    render() {
        return (
            <StyledSignUpScreen id="sign-up-screen" >
                <div className="titulo">Cadastro</div>
                <div className="container">
                    <Form schema={this.schema} onSubmit={this.handleSubmit} className="form" >

                        <label htmlFor="name">Nome</label>
                        <Input name="name" />

                        <label htmlFor="email">Email</label>
                        <Input name="email" />

                        <label htmlFor="isAluno" >É aluno da UTF ?</label>
                        <select value={this.state.aluno} onChange={ (event) => this.setState({aluno: event.target.value}) }>
                            <option value={true}>Sim</option>
                            <option value={false}>Não</option>
                        </select>

                        <label htmlFor="curso" >Curso</label>
                        <Input name="curso" disabled={!this.state.aluno} type="text" />

                        <label htmlFor="campus" >Campus (cidade)</label>
                        <Input name="campus" disabled={!this.state.aluno} type="text" />

                        <label htmlFor="password" >Senha</label>
                        <Input name="password" type="password" />

                        <label htmlFor="passwordconfirm" >Confirme a Senha</label>
                        <Input name="passwordconfirm" type="password" />
                        
                        <button type="submit" className="btn-sub" >Cadastrar</button>
                        {this.props.error && <span>Serviço Não Disponível</span>}
                        {this.props.error && <span>Tente Novamente mais Tarde</span>}
                        {this.props.user && <span>Cadastrado !! Redirecionando para a página de Login</span>}
                    </Form>
                    <div className="banner"></div>
                </div>
            </StyledSignUpScreen>
        )
    }
}

const mapStateToProps = store => ({
    user: store.signupState.user,
    error: store.signupState.error
})

const mapDispatchToProps = dispatch => bindActionCreators({ asyncSignUp }, dispatch)

export const SignUpScreen = connect(mapStateToProps, mapDispatchToProps)(SignUpScreenContainer)

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