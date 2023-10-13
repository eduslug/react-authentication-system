import styled from 'styled-components';
import imagem from './logo.png';
import { Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react';
import CampoDigitacao from '../../components/CampoInput';
import Botao from '../../components/Botao';
import { Navigate, useNavigate } from 'react-router-dom';

const Imagem = styled.img`
  padding: 2em 0;
`;

const Titulo = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: var(--cinza);
`;

const Paragrafo = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;
  color: var(--azul-escuro);
`;

const ParagrafoCadastro = styled(Paragrafo)`
  color: var(--cinza);
`;

interface PropsCustomized {
    cor: string;
}

const StepCustomized = styled.div<PropsCustomized>`
  background-color: ${({ cor }) => cor};
  width: 16px;
  height: 16px;
  border-radius: 50%;
`;

const Formulario = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BotaoCustomizado = styled(Botao)`
  width: 50%;
  cursor: pointer;
`;

interface Sign {
    event: string
}


export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [repita, setRepita] = useState('');

    const navigate = useNavigate(); // Corrected the useNavigate usage

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // You can add form submission logic here
        // For example, redirect to another page after submission
        navigate('/login');
    };

    return (
        <>
            <Imagem src={imagem} alt='logo' />
            <Stepper>
                <Step>
                    <StepLabel
                        StepIconComponent={(props) => (
                            <StepCustomized cor={props.active ? 'lightBlue' : 'lightGreen'} />
                        )}
                    ></StepLabel>
                </Step>
                <Step>
                    <StepLabel
                        StepIconComponent={(props) => (
                            <StepCustomized cor={props.active ? 'lightBlue' : 'lightGreen'} />
                        )}
                    ></StepLabel>
                </Step>
            </Stepper>
            <>
                <Titulo>Primeiro, alguns dados básicos:</Titulo>
                <Formulario onSubmit={handleSubmit}>
                    <CampoDigitacao
                        tipo='text'
                        label='nome'
                        valor={nome}
                        onChange={setNome}
                        placeholder='Digite seu nome'
                    />
                    <CampoDigitacao
                        tipo='text'
                        label='Cnpj'
                        valor={cnpj}
                        onChange={setCnpj}
                        placeholder='Digite seu nome'
                    />
                    <CampoDigitacao
                        tipo='email'
                        label='email'
                        valor={email}
                        onChange={setEmail}
                        placeholder='Digite seu nome'
                    />
                    <CampoDigitacao
                        tipo='password'
                        label='senha'
                        valor={senha}
                        onChange={setSenha}
                        placeholder='Digite seu nome'
                    />
                    <CampoDigitacao
                        tipo='password'
                        label='Repita'
                        valor={repita}
                        onChange={setRepita}
                        placeholder='Digite seu nome'
                    />
                    <BotaoCustomizado type='submit'>Avançar</BotaoCustomizado>
                </Formulario>
            </>
        </>
    );
}
