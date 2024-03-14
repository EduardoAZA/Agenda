import { Header } from '../src/components/header';
import { HeaderSimple } from '../src/components/header-simple'
import { Login_Form } from './pages/login/login-form';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { Salas } from './pages/salas/salas';
import { Password } from './pages/password/password';
import { Login_Signup } from './pages/cadastro.jsx/login-singup-form';
import { Confirmarsenha } from './pages/confirmarsenha/confirmarsenha.jsx';
import { Reuniao } from './pages/reuniao/reuniao.jsx';
import { Agendar } from './pages/agendar/agendar.jsx';
import { Visualizar } from './pages/visualizar/visualizar.jsx';
import { Calendario } from './pages/calendario/calendario.jsx';
import { Exibir } from './pages/exibicao/exibir.jsx';
import { AppRoutes } from './routes.jsx';
export function App() {
  return ( 
    <div>
      <AppRoutes/>
    </div>
  )
}

