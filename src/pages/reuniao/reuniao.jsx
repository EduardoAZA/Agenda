import { Header } from "../../components/header";
import { Titulo } from "../../components/titulo";

export function Reuniao() {
    return (
        <>
            <Header />
            <Titulo titulo="Reuniões" />
            <div className="pt-16 pl-40 ">
                <select className="bg-gray-300 text-black rounded-md py-2 px-3">
                    <option disabled selected >Minhas reuniões</option>
                    <option value="visa">1</option>
                    <option value="mc">2</option>
                    <option value="amex">3</option>
                </select>
            </div>
            <div className="flex flex-col items-center">
                <div className="pt-6 w-4/5 flex justify-end gap-10">
                    <button className="bg-red-500 text-white py-2 px-3 rounded-md">Exportar relatório</button>
                    <select className="bg-gray-300 text-black rounded-md py-2 px-3">
                        <option disabled selected >Minhas reuniões</option>
                        <option value="visa">1</option>
                        <option value="mc">2</option>
                        <option value="amex">3</option>
                    </select>
                    <button className="bg-blue-300 text-white py-2 px-3 rounded-md flex items-center">
                        <p>Visualizar</p>
                        <svg className="w-8 h-8 pl-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
                        </button>
                </div>
                <div className="pt-6  w-4/5">
                    <table class="table-fixed w-full">
                        <thead className="border">
                            <tr>
                                <th className="text-left p-5 bg-indigo-500 border border-black">ID</th>
                                <th className="text-left p-5 bg-indigo-500 border border-black">Titulo</th>
                                <th className="text-left p-5 bg-indigo-500 border border-black">Data</th>
                                <th className="text-left p-5 bg-indigo-500 border border-black">Horário</th>
                                <th className="text-left p-5 bg-indigo-500 border border-black">Sala</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border">
                                <td className="p-5 border">1</td>
                                <td className="p-5 border">teste 1</td>
                                <td className="p-5 border">22/02/2000</td>
                                <td className="p-5 border">11:55 - 12:55</td>
                                <td className="p-5 border">Starwars</td>
                            </tr>
                            <tr className="border">
                                <td className="p-5 border">2</td>
                                <td className="p-5 border">teste 2</td>
                                <td className="p-5 border">10/12/2022</td>
                                <td className="p-5 border">10:00 - 11:00</td>
                                <td className="p-5 border">Harry Potter</td>
                            </tr>
                            <tr className="border">
                                <td className="p-5 border">3</td>
                                <td className="p-5 border">teste 3</td>
                                <td className="p-5 border">11/12/2022</td>
                                <td className="p-5 border">16:00 - 17:00</td>
                                <td className="p-5 border">Matrix</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}