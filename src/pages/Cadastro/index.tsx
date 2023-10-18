import styled from 'styled-components';
import imagem from './logo.png';
import { Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react';
import CampoDigitacao from '../../components/CampoInput';
import Botao from '../../components/Botao';
import { Navigate, useNavigate } from 'react-router-dom';
import Iclinica from '../../types/Iclinica';

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
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [complemento, setComplemento] = useState('');
    const [steppers, setSteppers] = useState([{ activeStep: 0 }]);

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        navigate('/login');
        alert('login teste')
        setSteppers(steppers.concat({ activeStep: 0 }));
        
        const clinica: Iclinica = {
            email: email,
            nome: nome,
            senha: senha,
            endeco: {
                cep: cep,
                rua: rua,
                /* numero: numero, */
                complemento: complemento

            }
        }

    };
    console.log(handleSubmit)
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
                        valor={telefone}
                        onChange={setTelefone}
                        placeholder='Digite seu nome'
                    />
                    <BotaoCustomizado type='submit'>Avançar</BotaoCustomizado>
                </Formulario>
                <Formulario>
                    <CampoDigitacao
                        tipo='text'
                        label='endereco'
                        valor='{endeco}'
                        onChange={setComplemento}
                        placeholder='digite seu endereço'
                    />
                    <CampoDigitacao
                        tipo='text'
                        label='endereco'
                        valor='{endeco}'
                        onChange={setComplemento}
                        placeholder='digite seu endereço'
                    />
                    <CampoDigitacao
                        tipo='text'
                        label='endereco'
                        valor='{endeco}'
                        onChange={setComplemento}
                        placeholder='digite seu endereço'
                    />
                    <CampoDigitacao
                        tipo='text'
                        label='cep'
                        valor='{cep}'
                        onChange={setCep}
                        placeholder='digite seu CEP:'
                    />
                    <CampoDigitacao
                        tipo='text'
                        label='rua'
                        valor='{rua}'
                        onChange={setRua}
                        placeholder='digite sua rua'
                    />
                </Formulario>
            </>
        </>
    );
}
