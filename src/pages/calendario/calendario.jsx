import React, { useState } from 'react';
import { Header } from "../../components/header";
import { Link } from 'react-router-dom';

export function Calendario() {
 
  const [selectedDay, setSelectedDay] = useState(null);

  const handleClick = (day) => {
    if (selectedDay === day) {
      setSelectedDay(null);
    } else {
      setSelectedDay(day);
    }
  };

  return (
    <>
      <Header />
      <div className='flex justify-center'>
        <h1 className='text-5xl font-black pt-10'>Outubro</h1>
        <h2></h2>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-7 pt-[2%] gap-5">

          <div className="p-4 flex items-center justify-center text-2xl font-semibold size-16">Dom</div>
          <div className="p-4 flex items-center justify-center text-2xl font-semibold size-16">Seg</div>
          <div className="p-4 flex items-center justify-center text-2xl font-semibold size-16">Ter</div>
          <div className="p-4 flex items-center justify-center text-2xl font-semibold size-16">Qua</div>
          <div className="p-4 flex items-center justify-center text-2xl font-semibold size-16">Qui</div>
          <div className="p-4 flex items-center justify-center text-2xl font-semibold size-16">Sex</div>
          <div className="p-4 flex items-center justify-center text-2xl font-semibold size-16">Sab</div>

          {[...Array(31)].map((_, index) => {
            const day = index + 1;
            const isUnavailable = [6, 7, 11].includes(day);
            return (
              
              <div
                key={day}
                className={`bg-gray-200 border border-gray-300 p-4 flex items-center justify-center text-xl cursor-pointer rounded-md ${selectedDay === day ? 'text-white bg-blue-600' : isUnavailable ? 'text-white bg-red-500 cursor-not-allowed' : 'hover:text-red-500 hover:bg-gray-300'
                  }`}
                onClick={() => !isUnavailable && handleClick(day)}
                // Definindo o comportamento do cursor como padrão
                style={{ pointerEvents: isUnavailable ? 'none' : 'auto' }}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
      <Link to="/reuniao" className='flex justify-center pt-[5%]'>
        <button className='bg-lime-500 text-white text-xl font-bold border border-lime-600 px-10 py-3 rounded-md'>Agendar reunião</button>
      </Link>
      <div className='absolute top-40 right-20 flex flex-col gap-5'>
        <div className='flex items-center gap-2'>
          <div className='size-10 bg-red-500'></div>
          <p className='text-xl'>Ocupada</p>
        </div>
       
        <div className='flex items-center gap-2'>
          <div className='size-10 bg-gray-400'></div>
          <p className='text-xl'>Disponível</p>
        </div>
      </div>
    </>
  );
}
