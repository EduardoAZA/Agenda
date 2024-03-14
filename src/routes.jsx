import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Calendario } from "./pages/calendario/calendario";
import { Confirmarsenha } from "./pages/confirmarsenha/confirmarsenha";
import { Exibir } from "./pages/exibicao/exibir";
import { Login_Form } from "./pages/login/login-form";
import { Login_Signup } from "./pages/cadastro.jsx/login-singup-form";
import { Password } from "./pages/password/password";
import { Reuniao } from "./pages/reuniao/reuniao";
import { Salas } from "./pages/salas/salas";
import { Painel } from "./pages/sucesso/painel";
import { Visualizar } from "./pages/visualizar/visualizar";
import { Agendar } from "./pages/agendar/agendar";
import { Profile } from "./pages/profile/profile";
export function AppRoutes(){
    return(
        < BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/calendario" element={<Calendario/>}></Route>
                <Route path="/confirmarsenha" element={<Confirmarsenha/>}></Route>
                <Route path="/exibir" element={<Exibir/>}></Route>
                <Route path="/loginform" element={<Login_Form/>}></Route>
                <Route path="/loginsignup" element={<Login_Signup/>}></Route>
                <Route path="/reuniao" element={<Reuniao/>}></Route>
                <Route path="/salas" element={<Salas/>}></Route>
                <Route path="/painel" element={<Painel/>}></Route>
                <Route path="/visualizar" element={<Visualizar/>}></Route>
                <Route path="/agendar" element={<Agendar/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>


            </Routes>
        </BrowserRouter>
    )
}