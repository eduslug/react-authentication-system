
import styled from 'styled-components';
import imagem from './logo.png'
import { Step, StepLabel, Stepper } from '@mui/material';
import { useState } from 'react';


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

interface PropsCustomized {
    cor: string,


}

const StepCustomized = styled.div<PropsCustomized>`
    background-color: ${({ cor }) => cor};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    `


export default function Cadastro() {
    const [stepper, serStepper] = useState([{ activeStep: 0 }])

    const addForm = () => {
        serStepper(stepper.concat({ activeStep: 0 }));
    };



    return (
        <>
            <Imagem src={imagem} alt='logo' />
            <Stepper>
                <Step>
                    <StepLabel StepIconComponent={(props) => (
                        <StepCustomized cor={props.active ? 'lightBlue' : 'lightGreen'} />)}>
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={(props) => (
                        <StepCustomized cor={props.active ? 'lightBlue' : 'lightGreen'} />)}>
                    </StepLabel>
                </Step>
            </Stepper>
                        
        </>
    )
}
