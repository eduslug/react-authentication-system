
import { useEffect, useState } from 'react';
import CampoDigitacao from '../../components/CampoInput';
import Botao from '../../components/Botao';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import ILogin from '../../types/ILogin';
import usePost from '../../usePost';
import autenticaStores from '../../stores/auth.stores';


const Imagem = styled.img`
  padding: 2em 0;
`;

const Titulo = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: var(--cinza)
`;

const Paragrafo = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;
  color: var(--azul-escuro)
`;

const ParagrafoCadastro = styled(Paragrafo)`
  color: var(--cinza);
`;

const LinkCustomizado = styled(Link)`
  color: var(--azul-claro);
  font-weight: 700;
  text-decoration: none;
`;

const Formulario = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const BotaoCustomizado = styled(Botao)`
  width: 100%;
  cursor: pointer;
`;
export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { cadastrar, sucesso, erro, resposta } = usePost();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const usuario: ILogin = {
      email: email,
      senha: senha
    }

    try {
      cadastrar({ url: "auth/login", dados: usuario })
      autenticaStores.login({ email: email, token: resposta })
    } catch (erro) {
      erro && alert('Não foi possível fazer login')
    }

  }
  return (
    <div>
      <Imagem src={logo} alt='logo' />
      <Titulo>Faça login em sua conta</Titulo>
      <Formulario onSubmit={handleFormSubmit}>
        <CampoDigitacao tipo="email" label="Email" valor={email} placeholder="Insira seu endereço de email" onChange={setEmail} />
        <CampoDigitacao tipo='password' valor={senha} label='Senha' placeholder='Insira sua senha' onChange={setSenha} />
        <BotaoCustomizado type="submit">Entrar</BotaoCustomizado>
      </Formulario>
      <ParagrafoCadastro>Esqueceu sua senha?</ParagrafoCadastro>
      <ParagrafoCadastro>Ainda não tem conta? <LinkCustomizado to="/cadastro">Faça seu cadastro!</LinkCustomizado></ParagrafoCadastro>
    </div>
  )
}