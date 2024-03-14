import { Header } from "../../components/header"

export function Visualizar() {
    return (
        <>
            <Header />
            <div className="flex">
                <div className="flex w-1/2 flex-col gap-16 pl-[10%] pt-[2%]">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-bold">Titulo</h3>
                        <h3 className="text-2xl font-medium capitalize p-2 bg-gray-300 w-[80%] rounded-md">...</h3>
                    </div>

                    <div className="flex flex-col gap-8 ">
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" id="checkbox" className="size-6" />
                            <label htmlFor="checkbox" className="text-2xl font-medium">Ativo</label>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-medium">Sala</h3>
                            <h3 className="text-2xl font-medium capitalize p-2 bg-gray-300 w-[80%] rounded-md">...</h3>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-medium">Data</h3>
                        <h3 className="text-2xl font-medium capitalize p-2 bg-gray-300 w-[80%] rounded-md">...</h3>
                    </div>
                </div>
                <div className="flex w-1/2 flex-col gap-10 pl-[10%] pt-[2%]">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-medium">Link</h3>
                        <h3 className="text-2xl font-medium capitalize p-2 bg-gray-300 w-[80%] rounded-md">...</h3>
                    </div>

                    <div className="flex flex-col gap-4 ">
                        <h3 className="text-2xl font-medium">Assunto</h3>
                        <textarea className="h-36 w-[80%] border rounded-md p-2 bg-gray-300 resize-none">...</textarea>
                    </div>

                    <div className="flex flex-col gap-4 pt-4">
                        <h3 className="text-2xl font-medium">Horários</h3>
                        <h3 className="text-2xl font-medium capitalize p-2 bg-gray-300 w-[80%] rounded-md">...</h3>
                    </div>
                </div>
            </div>

            <div className="flex flex-row-reverse pr-[7%] pt-[2%]">
                <button className=" rounded-xl  px-10 py-5 bg-lime-500 flex items-center justify-center">
                    <p className="text-indigo-50 text-xl font-bold ">Agendar</p>
                    <svg className="size-12 pb-2 pl-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                </button>
            </div>
            <div className="w-full pl-[10%] pr-[7%] pt-[2%]">
                <table class="table-fixed w-full">
                    <thead className="border">
                        <tr>
                            <th className="text-left p-3 bg-gray-300 border border-black">Nome</th>
                            <th className="text-left p-3 bg-gray-300 border border-black">IP</th>
                            <th className="text-left p-3 bg-gray-300 border border-black">Data</th>
                            <th className="text-left p-3 bg-gray-300 border border-black">Objeto</th>
                            <th className="text-left p-3 bg-gray-300 border border-black">Atividade</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border">
                            <td className="p-3 border border-stone-500">Alguém</td>
                            <td className="p-3 border border-stone-500">255.255.255.255</td>
                            <td className="p-3 border border-stone-500">22/02/2000</td>
                            <td className="p-3 border border-stone-500">Reuniões</td>
                            <td className="p-3 border border-stone-500">Criou</td>
                        </tr>   
                    </tbody>
                </table>
            </div>

        </>
    )
}