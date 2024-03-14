import { Link } from "react-router-dom";

export function Header() {
    return (
            <header>
                <nav className="flex items-center justify-between p-6 lg:px-8 h-[10vh] bg-indigo-500" >
                    <div className="flex lg:flex-1">
                        <Link to="/" className="w-40 font-bold pl-2 text-3xl text-indigo-50" >
                            AGENDA+
                        </Link>
                    </div>
                    <div>
                        <Link to="/agendar" className=" mr-32 bg-lime-500 text-xl font-bold p-4 text-white rounded-xl">Agendar reunião</Link>
                    </div>

                    <div className="flex gap-x-8">
                        <Link to="/reuniao"className="text-xl font-semibold leading-6 text-indigo-50">Reunião</Link>
                        <div className="w-px h-6 bg-slate-200"/>
                        <Link to="/salas" className="text-xl font-semibold leading-6 text-indigo-50">Salas</Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-8">
                        <Link to="/profile" className="text-xl font-semibold leading-6 text-indigo-50">Usuário</Link>
                        <div className="w-px h-6 bg-slate-200"/>
                        <Link to="/loginform">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6"><path fill="#ffffff" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"/></svg>
                        </Link>
                    </div>
                </nav>
            </header>
        

    )
}


