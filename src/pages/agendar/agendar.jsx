import { Header } from "../../components/header"


export function Agendar() {
    return (
        <div>
            <Header />
            <form className="min-h-5/6 w-full flex">
                <div className="w-1/2 h-full flex flex-col gap-10 pl-[10%] pt-[4%]">
                    <div><h1 className="text-3xl font-bold">Titulo</h1></div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-medium">Sala</h3>
                        <select className="bg-gray-300 text-black rounded-md py-3 px-3 w-[80%]">
                            <option>Starwars</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-medium">Horário</h3>
                        <div className="flex gap-4 items-center">
                            <h3 className="text-2xl font-medium">das</h3>
                            <h3 className="text-2xl font-medium p-2 bg-gray-300 w-[10%]  rounded-md">10:00</h3>
                            <h3 className="text-2xl font-medium">às</h3>
                            <h3 className="text-2xl font-medium p-2 bg-gray-300 w-[10%] rounded-md">11:00</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-medium">Repetição</h3>
                        <select className="bg-gray-300 text-black rounded-md py-3 px-3 w-[80%]">
                            <option>Nunca</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-medium">Descrição da reunião</h3>
                        <textarea className="h-36 w-[80%] border rounded-md p-2 bg-gray-300"></textarea>
                    </div>
                </div>
                <div className="w-1/2 h-full gap-10 flex flex-col pr-[10%] pt-[4%]">
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" id="checkbox" className="size-6" />
                        <label htmlFor="checkbox" className="text-2xl font-medium"> Reunião com cliente</label>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-medium">Nome cliente</h3>
                        <h3 className="text-2xl font-medium capitalize p-2 bg-gray-300 w-[80%] rounded-md">joaquim inacio silveira</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-medium">Justificativa agendamento prioritário</h3>
                        <textarea className="h-36 w-[80%] border rounded-md p-2 bg-gray-300"></textarea>
                    </div>
                    <div className="flex flex-row-reverse pt-[19%] mr-[12%]">
                        <div className="w-64 ">
                            <button className=" rounded-xl w-[80%] py-5 bg-lime-500 flex items-center justify-center">
                                <p className="text-indigo-50 text-xl font-bold ">Agendar</p>
                                <svg className="size-12 pb-2 pl-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                            </button>
                        </div>
                    </div>
                    
                   
                </div>
            </form>
        </div>
    )
}