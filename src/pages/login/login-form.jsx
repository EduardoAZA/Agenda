import { HeaderSimple } from "../../components/header-simple";
import { Link } from "react-router-dom";

export function Login_Form() {
    return (
        <div>
            <HeaderSimple />
            <div className="flex flex-col h-[90vh]">

                <div className=" h-full flex items-center justify-center flex-row ">

                    <div className="size-4/6 grid grid-cols-3 shadow-2xl rounded-3xl ">

                        <div className="bg-indigo-500 flex flex-col items-center gap-32 rounded-l-3xl ">

                            <div className='p-12'>
                                <h1 className='text-indigo-50 text-3xl font-extrabold'>Bem-vindo</h1>
                            </div>

                            <div className='flex flex-col items-center'>
                                <p className="text-indigo-50 text-xl font-bold ">Ja possui uma conta?</p>
                                <p className="text-indigo-50 text-xl font-bold">Faça seu login!</p>
                            </div>


                            <Link to="/loginsignup" className="p-2">
                                <button to="/loginform"className="rounded-md p-4 bg-indigo-50 text-indigo-500 font-bold w-52 hover:bg-indigo-100">Login</button>
                            </Link>

                        </div>

                        <div className="col-span-2 flex items-center flex-col bg-gray-200 rounded-r-3xl">
                            <div><h1 className='text-5xl font-extrabold text-indigo-500 py-10'>Cadastro</h1></div>

                            <form action="" className='w-full items-center flex flex-col'>

                                <div className="flex flex-col">
                                    <div className="flex gap-6 ">

                                        <div className="relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute mt-4 ml-2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                            </svg>
                                            <input type="text" className="py-4 pl-10 rounded-xl px-2 bg-gray-300 placeholder-gray-600 focus:bg-gray-100 placeholder:font-black" placeholder="Nome" />
                                        </div>

                                        <div className="relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute mt-4 ml-2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                            </svg>
                                            <input type="text" className="py-4 pl-10 rounded-xl px-2 bg-gray-300 placeholder-gray-600 focus:bg-gray-100 placeholder:font-black" placeholder="Setor" />
                                        </div>
                                    </div>


                                    <div className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute mt-[52px] ml-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                        <input type="text" className="w-full pl-10 mt-9 py-4 rounded-xl px-2 bg-gray-300 placeholder-gray-600 focus:bg-gray-100 placeholder:font-black" placeholder="Email" />
                                    </div>
                                    <div className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute mt-[52px] ml-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>
                                        <input type="text" className="w-full pl-10 mt-9 py-4 rounded-xl px-2 bg-gray-300 placeholder-gray-600 focus:bg-gray-100 placeholder:font-black" placeholder="Senha" />
                                    </div>

                                    <div className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute mt-[52px] ml-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>

                                        <input type="text" className=" w-full pl-10 mt-9 py-4 rounded-xl px-2 bg-gray-300 placeholder-gray-600 focus:bg-gray-100 placeholder:font-black" placeholder="Confirmar senha" />
                                    </div>

                                </div>

                                <Link to="/loginsignup" className="m-10">
                                    <button className="rounded-md p-4 text-indigo-50 bg-indigo-500 font-bold w-52 hover:bg-indigo-600">Cadastrar</button>
                                </Link>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}