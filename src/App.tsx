import './App.css';
import Avaliacao from './components/Avaliacao';
import Botao from './components/Botao';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Grafico from './components/Grafico';
import Rodape from './components/Rodape';
import Subtitulo from './components/Subtitulo';
import Tabela from './components/Tabela';
import Titulo from './components/Titulo';
import Dashbord from './pages/Dashboard';
import AppRoutes from './routes/AppRoutes';
import useDadosConsulta from './useDadosConsulta';
import useDadosProfissional from './useDadosProfissional';

function App() {


  return (
    <AppRoutes />
  );
}

export default App;
