import { Header } from "../../components/header";
import { Titulo } from "../../components/titulo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export function Profile() {
    return (
        <>
            <Header />
            <Titulo titulo="Perfil" />
            <div className="w-full h-full flex flex-col items-center">
                <div className="h-[60vh] w-[80vw] flex items-center justify-center flex-col">

                    <div className="flex flex-col items-center w-5/6 h-5/6 gap-12">
                        <div className="flex w-full gap-12">
                            <div className=" w-2/5 flex items-center justify-center">
                                <img src="harry.jpg" className="rounded-full w-72 h-72" alt="" />
                            </div>
                            <div className="flex flex-col gap-10 w-[100%] justify-center ">
                                <input type="text" name="" id="" className='py-6 rounded-xl px-2 bg-gray-300 placeholder-gray-600 focus:bg-gray-100 font-bold text-xl' placeholder='ID' />
                                <input type="text" name="" id="" className='py-6 rounded-xl px-2 bg-gray-300 placeholder-gray-600 focus:bg-gray-100 font-bold text-xl' placeholder='Nome' />
                                <input type="text" name="" id="" className='py-6 rounded-xl px-2 bg-gray-300 placeholder-gray-600 focus:bg-gray-100 font-bold text-xl' placeholder='Setor' />
                            </div>
                        </div>
                        <div className="w-full">
                            <input type="text" name="" id="" className='py-6 rounded-xl px-2 bg-gray-300 placeholder-gray-600 focus:bg-gray-100 w-full font-bold text-xl' placeholder='Email' />
                        </div>
                    </div>


                </div>
                <div className="flex w-4/6 justify-between ">
                    <div className="w-64">
                        <Link to="/confirmarsenha" className=" rounded-xl w-full py-5 bg-red-500 flex items-center justify-center">
                            <p className="text-indigo-50 text-xl font-bold ">Alterar senha</p>
                            <svg className="size-12 pb-2 pl-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z" /></svg>
                        </Link>
                    </div>
                    <div className="w-64">
                        <button className=" rounded-xl w-full py-5 bg-lime-500 flex items-center justify-center">
                            <p className="text-indigo-50 text-xl font-bold ">Salvar</p>
                            <svg className="size-12 pb-2 pl-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}