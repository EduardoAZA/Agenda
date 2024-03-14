import { Link } from "react-router-dom";

export function HeaderSimple () {
    return(
            <header className="bg-indigo-500 p-10 h-[10vh] flex items-center justify-between">
                <div>
                    <Link to="/" className=" w-40 font-bold text-3xl text-indigo-50">AGENDA+</Link>
                </div>
            </header>
    )
}