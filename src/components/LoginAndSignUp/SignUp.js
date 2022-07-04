import React from "react";
import styled from "styled-components";
import { useState } from "react";
import api from "../../services/api";

export default function SignUp(){

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (formData.password!==formData.confirmPassword) {
            alert("As senhas não conferem");
            return;
        }
        const user = {...formData};
        delete user.confirmPassword;
        try {
            await api.createUser(formData)
            alert("Usuário criado com sucesso");
        }catch(error){
            alert("Erro ao criar usuário,tente novamente");
        }
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="Nome" type="text" onChange={(e)=>handleChange(e)} name = "name" value = {formData.name} required/>
                <Input placeholder="E-mail" type="email" onChange={(e)=>handleChange(e)} name = "email" value = {formData.email} required/>
                <Input placeholder="Senha" type="password" onChange={(e)=>handleChange(e)} name = "password" value = {formData.password} required/>
                <Input placeholder="Confirme a senha" type="password" onChange={(e)=>handleChange(e)} name = "confirmPassword" value = {formData.confirmPassword} required/>
                <Button type="submit">Cadastrar</Button>
            </Form>
        <StyledLink>Já tem uma conta? Entre agora!</StyledLink>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 25px;

    h1{
    font-family: 'Saira Stencil One', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 50px;
    color: #FFFFFF;
    margin-bottom: 28px;
    }
    
`;

const Form = styled.form`
    width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 32px;
    @media (max-width: 500px) {
        width: 100%;
    }
`;

const Input = styled.input`
    all: unset;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    width: 100%;
    background-color: #FFF;
    border-radius: 5px;
    padding: 15px 16px;
    color: #000000;
    
    ::placeholder {
        font-family: 'Raleway', sans-serif;
        color: #000000;
    }

`;

const Button = styled.button`
    all: unset;
    box-sizing: border-box;
    cursor: pointer;
    width: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    padding: 12px;
    background: #A328D6;
    border-radius: 5px;
`;

const StyledLink = styled.a`
    font-style: normal;
    font-weight: bold;
    font-size: 15;
    line-height: 18px;
`;