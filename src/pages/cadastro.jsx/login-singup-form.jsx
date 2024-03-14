import { HeaderSimple } from "../../components/header-simple"
import { Link } from "react-router-dom"

export function Login_Signup() {
  return (
    <>
      <HeaderSimple />
      <div className="flex flex-col w-screen h-[90vh]">
        <div className=" h-full flex items-center justify-center flex-row ">

          <div className="size-4/6 grid grid-cols-3 shadow-2xl rounded-3xl ">

            <div className="bg-indigo-500 flex flex-col items-center gap-32 rounded-l-3xl ">

              <div className='p-12'>
                <h1 className='text-indigo-50 text-3xl font-extrabold'>Bem-vindo</h1>
              </div>

              <div className='flex flex-col items-center'>
                <p className="text-indigo-50 text-xl font-bold ">Não possui uma conta ainda?</p>
                <p className="text-indigo-50 text-xl font-bold">Faça a sua agora!</p>
              </div>


              <Link to="/loginform" className="p-2">
                <button className="rounded-md p-4 bg-indigo-50 text-indigo-500 font-bold w-52 hover:bg-indigo-100"> Cadastro</button>
              </Link>

            </div>

            <div className="col-span-2 flex items-center flex-col bg-gray-200 rounded-r-3xl">
              <div ><h1 className='text-5xl font-extrabold text-indigo-500 py-10'>Login</h1></div>

              <form action="" className='w-full items-center flex flex-col'>

                <div className='flex flex-col py-24 gap-4 w-3/5'>
                  <input type="text" name="" id="" className='py-4 rounded-xl px-2 bg-gray-300 placeholder-gray-600 focus:bg-gray-100' placeholder='Email' />
                  <input type="text" name="" id="" className='py-4 rounded-xl px-2 bg-gray-300 placeholder-gray-600 focus:bg-gray-100' placeholder='Senha' />
                </div>

                <Link to="/">
                  <button className="rounded-md p-4 text-indigo-50 bg-indigo-500 font-bold w-52 hover:bg-indigo-600"> Login</button>
                </Link>

              </form>


            </div>

          </div>
        </div>
      </div></>

  )
}

