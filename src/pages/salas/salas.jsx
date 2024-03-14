import { HeaderSimple } from "../../components/header-simple";
import { Header } from "../../components/header";
import { Titulo } from "../../components/titulo";
import { Link } from "react-router-dom";

export function Salas() {
    return (
        <>
            <Header/>
            <Titulo titulo="Conheça as salas disponíveis para agendamento"/>
            <div className="flex items-center justify-center pt-16"> 
                <div className="size-3/5 grid grid-cols-2 gap-20 gap-x-40">
                    <Link to="/exibir" className=" flex flex-col">
                        <img src="harry.jpg" className=" w-full h-60 rounded-3xl" alt="" />
                        <h1 className='text-2xl font-extrabold text-black pt-2'>Sala Starwars</h1>
                    </Link>
                    <Link to="/exibir" className="flex flex-col">
                        <img src="harry.jpg" className=" w-full h-60 rounded-3xl" alt="" />
                        <h1 className='text-2xl font-extrabold text-black pt-2'>Sala Harry Potter</h1>
                    </Link>
                    <Link to="/exibir" className="flex flex-col">
                        <img src="harry.jpg" className=" w-full h-60 rounded-3xl" alt="" />
                        <h1 className='text-2xl font-extrabold text-black pt-2'>Sala Matrix</h1>
                    </Link>
                    <Link to="/exibir" className="flex flex-col">
                        <img src="harry.jpg" className=" w-full h-60 rounded-3xl" alt="" />
                        <h1 className='text-2xl font-extrabold text-black pt-2'>Sala Spider-man</h1>
                    </Link>
                </div>
            </div>
        </>
    )
}