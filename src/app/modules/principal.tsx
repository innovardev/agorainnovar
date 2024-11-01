'use client'
import { useState } from 'react';
import Image from 'next/image';
import logofalabella from '../../public/logofalabella.jpeg';
import logoshopy from "../../public/logoshopy.png";
import logoagora from "../../public/innovar.png";

const Principal = () => {
  const [token, setToken] = useState<string>();

  const handleToken = () => {
    console.log('token, ', token);
  }

  return (
    <div className="container mx-auto p-36">
      <div>
        <div className="flex justify-center items-center">
          {/* <img src="https://i.imgur.com/1234567.png" alt="Logo de Innovar Agora" className="w-full md:w-auto" /> */}
          <Image
            src={logoagora}
            alt="Logo de Innovar Agora"
            width={500}
            height={200}
            className="w-full md:w-auto"
            priority
          />
        </div>
        <div className='container mx-auto p-6 '>
          <h1 className="text-pretty text-zinc-900  text-center font-light mb-4">Escoge la plataforma que deseas actualizar</h1>
          <div className="grid gap-4 grid-cols-2 pb-3">
            <div className="flex justify-end items-end">
              <Image
                src={logoshopy}
                alt="Logo de Innovar Agora"
                width={50}
                height={50}
                className="w-full md:w-auto"
                priority
              />
            </div>
            <div className="flex justify-start items-start">
              <Image
                src={logofalabella}
                alt="Logo de Innovar Agora"
                width={50}
                height={50}
                className="w-full md:w-auto"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="mb-4">
              <input type="text" id="token" className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="No desconfiamos de ti ;), pero es necesario que ingreses el TOKEN" onChange={(e) => setToken((e.target as HTMLInputElement).value)} />
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-xl" onClick={handleToken}>GENERAR INVENTARIO</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Principal;
