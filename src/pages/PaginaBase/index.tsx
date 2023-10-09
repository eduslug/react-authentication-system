
import styled from "styled-components"
import Cabecalho from "../../components/Cabecalho"
import { Outlet } from "react-router-dom"

const Container = styled.section`
width: 50%;
`

const Titulo = styled.h2`
font-weight: 700;
font-size: 24px;
line-height: 28px;
text-align: center;
color: var(--azul-escuro);
`

const Texto = styled.p`
line-height: 19px;
color: var(--cinza);
`

const Subtitulo = styled.h3`
line-height: 19px;
font-weight: 700;
color: var(--cinza-escuro);
text-align: center;
`

const Linha = styled.hr`
color: var(--cinza)
`

export default function PaginaBase() {
    return (<>
        <Cabecalho />
        <main>
            <Outlet />
        </main>
    </>
    )
}