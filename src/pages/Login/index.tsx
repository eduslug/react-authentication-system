
import { useState } from 'react';
import CampoDigitacao from '../../components/CampoInput';

export default function Login() {
  const [email, setEmail] = useState('');

  return (
    <CampoDigitacao tipo="email" label="Email" valor={email} placeholder="Insira seu endereço de email" trocar={setEmail} />
  )
  
}