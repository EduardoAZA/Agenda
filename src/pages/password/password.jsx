import { Header } from "../../components/header"
import { Titulo } from "../../components/titulo"

export function Password() {
    return (
        <>
            <Header />
            <Titulo titulo="Alteração de senha" />
            <div className="h-[80vh] flex items-center justify-center ">
                <div className="size-4/5 flex items-center justify-center">
                    <div className=" size-4/5">
                        <form action="" className="flex flex-col h-full items-center gap-16" >
                            <input type="text" placeholder="Nova senha" className="py-7 rounded-xl px-2 bg-gray-300 placeholder-gray-600 focus:bg-gray-100  text-center w-4/5 placeholder:font-bold text-2xl" />
                            <input type="text" placeholder="Nova senha" className="py-7 rounded-xl px-2 bg-gray-300 placeholder-gray-600 focus:bg-gray-100  text-center w-4/5 placeholder:font-bold text-2xl" />
                            <input type="text" placeholder="Antiga senha" className="py-7 rounded-xl px-2 bg-gray-300 placeholder-gray-600 focus:bg-gray-100 text-center w-4/5 placeholder:font-bold text-2xl" />

                            <div>
                                <button type="submit" className="pt-5">
                                    <h1 className="text-3xl bg-lime-400 text-white font-black px-10 py-6 rounded-2xl flex flex-row items-center gap-x-10 pl-12" >
                                        Salvar
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="h-8 w-8"><path d="M14 3h2.997v5h-2.997v-5zm9 1v20h-22v-24h17.997l4.003 4zm-17 5h12v-7h-12v7zm14 4h-16v9h16v-9z" /></svg>
                                    </h1>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}