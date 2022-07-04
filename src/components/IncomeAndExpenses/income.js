import React from "react";
import styled from "styled-components";
import { useState } from "react";
import {Link} from "react-router-dom";
import api from "../../services/api";

export default function Income(){

    const [formData, setFormData] = useState({
        valor: "",
        description: "",
    });

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
            const {data} = await api.login(formData)
        }catch(error){
            alert("Erro, tente novamente");
        }
    }

    return (
        <Container>
            <h1>Nova Entrada</h1>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="Valor" type="email" onChange={(e)=>handleChange(e)} name = "valor" value = {formData.valor} required/>
                <Input placeholder="Descrição" type="text" onChange={(e)=>handleChange(e)} name = "description" value = {formData.description} required/>
                <Button type="submit">Salvar entrada</Button>
            </Form>
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
    font-family: 'Relaway', sans-serif;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    color: #FFFFFF;
    margin-bottom: 40px;
    align-self: flex-start;
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
