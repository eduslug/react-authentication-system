import styled from 'styled-components'
import imagemDeFundo from './imagem-fundo-admin.png'

const ContainerPrincipal = styled.div`
background-image:url(${imagemDeFundo});
background-size: cover;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

export default function PaginaFormulario() {
    return (
        <ContainerPrincipal>

        </ContainerPrincipal>
    )
}
