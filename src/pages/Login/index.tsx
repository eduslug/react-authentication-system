
import { useState } from 'react';
import CampoDigitacao from '../../components/CampoInput';
import Botao from '../../components/Botao';
import styled from 'styled-components';

const Formulario = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
/* const Imagem = styled.img`
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
  font-size: 16px;
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


const BotaoCustomizado = styled(Botao)`
  width: 50%;
`;
 */



export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  console.log(senha, email)
  return (<>

    <h1>Faça seu login</h1>

    <Formulario>
      <CampoDigitacao tipo="email" label="Email" valor={email} placeholder="Insira seu endereço de email" onChange={setEmail} />
      <CampoDigitacao tipo='password' valor={senha} label='Senha' placeholder='Insira sua senha' onChange={setSenha} />
      <Botao type="submit" value='Submit'>Entrar</Botao>
    </Formulario>
    <p>Esqueceu sua senha?</p>
    <p>Ainda Não tem cadastro</p>
  </>
  )
}