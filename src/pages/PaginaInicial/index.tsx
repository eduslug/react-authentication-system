import styled from "styled-components";
import Atividades from "../PaginaInicial/Atividades";
import Banner from "../PaginaBase/Banner";
import Depoimentos from "../PaginaBase/Depoimentos";
import Pesquisa from "../PaginaInicial/pesquisa";

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

export default function PaginaInicial() {
    return (
        <>
            <Banner />
            <Container>
                <Pesquisa />
                <Atividades />
                <Depoimentos />
            </Container >
        </>
    )
}