import { faArrowRotateLeft, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../../components/header";
import { Titulo } from "../../components/titulo";
import { Link } from "react-router-dom";

export function Confirmarsenha() {
    return (
        <div>
            <Header />
            <Titulo titulo="Alteração de senha" />
            <div className="flex items-center justify-center flex-col">
                <div className=" w-[1200px] p-10 mt-5 h-[600px] bg-gray-200 rounded-2xl flex flex-col items-center justify-center text-center">
                    <h1 className="text-indigo-500 text-3xl font-extrabold">Sua senha foi alterada com sucesso!!</h1>
                    <h1 className="text-indigo-500 text-3xl font-extrabold">Agora tome muito cuidado e anote-a onde não vai esquecer, sem compartilhá-la com terceiros.</h1>
                    <img src="/harry.jpg" className="max-w-[50%] rounded-md mt-8" alt="" />
                </div>
                <div className=" w-full flex justify-center pt-8">
                    <Link to="/profile" className="rounded-md p-5 bg-indigo-500 text-indigo-50 font-bold w-52 hover:bg-indigo-600 flex  justify-center">
                     
                        <p className="text-indigo-50 text-xl font-bold ">Voltar</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
