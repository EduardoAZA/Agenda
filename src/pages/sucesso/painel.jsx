import { Link } from "react-router-dom"

export function Painel() {
    return (
      <div className="flex flex-col w-screen h-screen">
        <div className=" h-full flex items-center justify-center flex-row ">
          <div className="bg-gray-300 size-4/6 shadow-2xl rounded-3xl flex flex-col items-center">
            <h1 className="text-5xl font-extrabold text-indigo-500 py-10">Cadastrado com sucesso!</h1>
            <div className="w-4/5 mt-4"><p className=" text-center text-2xl font-bold text-indigo-500">Parabens!Você deu seu primeiro passo para começar a usar o <span>Agenda+</span>, seu cadastro foi concluido com sucesso. </p></div>
            <img src="pagina-de-login.png" className="w-72 h-68  " alt="" />
            <p className=" text-xl font-bold text-indigo-500">Para acessar sua conta,basta clicar no botão abaixo</p>
            <div className="p-6"><button className="rounded-md p-4 bg-indigo-500 text-indigo-50 font-bold w-52 hover:bg-indigo-600">Login</button></div>
          </div>         
        </div>
      </div>
    )
  }
  
  