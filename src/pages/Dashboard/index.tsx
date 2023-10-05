import React from 'react'
import Cabecalho from '../../components/Cabecalho/index';
import Container from '../../components/Container/index';
import Titulo from '../../components/Titulo/index';
import Botao from '../../components/Botao/index';
import Tabela from '../../components/Tabela';
import Subtitulo from '../../components/Subtitulo';
import Grafico from '../../components/Grafico';
import Avaliacao from '../../components/Avaliacao';
import Rodape from '../../components/Rodape';
import useDadosProfissional from '../../useDadosProfissional';
import useDadosConsulta from '../../useDadosConsulta';

export default function Dashbord() {
    const { dados: consultas, erro: consultasErro } = useDadosConsulta();
    const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

    if (consultasErro || profissionaisErro) {
        console.log("Ocorreu um erro na requisição")
    }
    return (


        <Container>
            <Titulo>Área Administrativa</Titulo>
            <Botao>Cadastrar especialista</Botao>
            <Titulo imagem="consulta">Consultas do Dia</Titulo>
            <Tabela consultas={consultas} />
            <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
            <Subtitulo>Dezembro/22</Subtitulo>
            <Grafico consultas={consultas} profissionais={profissionais} />
            <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
            <Avaliacao profissionais={profissionais} />
        </Container>

    )
}

