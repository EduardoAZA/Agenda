import { Header } from "../../components/header";
import { Titulo } from "../../components/titulo";
import { Link } from "react-router-dom";

export function Exibir() {
    return (
        <>
            <Header />
            <Titulo titulo="Visualização da Sala" />
            <div className="grid grid-cols-3 gap-6 auto-rows-[300px] m-[3%]">
                <div>
                    <img src="harry.jpg" className="w-[100%] h-[100%] rounded-xl" alt="" />
                </div>

                <div>
                    <img src="harry.jpg" className="w-[100%] h-[100%] rounded-xl" alt="" />
                </div>
                <div>
                    <img src="harry.jpg" className="w-[100%] h-[100%] rounded-xl" alt="" />
                </div>
            </div>

            <div className="flex justify-center">
                <h1 className="text-4xl font-bold pt-[2%]">Gostou da sala? Verifique a disponibilidade da mesma e reserve seu horário!</h1>
            </div>

            <Link to="/calendario" className="flex justify-center pt-[3%]">
                <button className="bg-blue-500 flex py-7 px-8 items-center justify-center gap-5 rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className=" "  viewBox="0 0 24 24" width="52" height="52"><path d="M19 0h-2v5h-1V2H6V0H4v5H3V2H0v18h22V2h-3zM8 16.092H4v-4h4zm0-5H4v-4h4zm5 5H9v-4h4zm0-5H9v-4h4zm5 5h-4v-4h4zm0-5h-4v-4h4z" /></svg>
                    <h1 className="text-2xl font-bold text-white">Disponibilidade</h1>
                </button>
            </Link>


        </>
    )
}