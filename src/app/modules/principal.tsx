'use client'
import { useState } from 'react';
import Image from 'next/image';
import logofalabella from '../../public/logofalabella.jpeg';
import logoshopy from "../../public/logoshopy.png";
import logoagora from "../../public/innovar.png";

const Principal = () => {
  const [token, setToken] = useState<string>();
  const [succes, setSucces] = useState<boolean>(false);

  const handleToken = () => {
    if (token === 'SecurePassword1n0v4r') {
      setSucces(true)
    } else {
      console.error('token invalido estamos opteniendo su direccion ip')
    }
  }

  const handlerSaturno = async () => {
    try {
      const response = await fetch('/api/saturno');
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data: any = await response.text();
      const header = [
        'Handle', 'Title',
        'Option1_Name', 'Option1_Value', 'Option2_Name', 'Option2_Value', 'Option3_Name', 'Option3_Value',
        'SKU', 'HS Code', 'COO', 'Location',
        'Incoming', 'Unavailable', 'Committed', 'Available', 'On hand'
      ];
      const csv = jsonToCsv(data, header);
      downloadCsv(csv, 'inventarioshopy.csv');
    } catch (error: any) {
      console.error("Error al consumir la API SOAP:", error);
    }
  };

  function jsonToCsv(resjs: any, header: string[]): string {
    // Parsear el JSON y verificar la estructura
    const restojson = JSON.parse(resjs);
    if (restojson && Array.isArray(restojson.VCL)) {
      const data = restojson.VCL;
      const headerRow = header.map(fieldName => `${fieldName}`).join(',').replace(/_/g, ' ');
  
      const rows = data.map((row: any) => {
        const rowValues = header
        .map(fieldName => `${row[fieldName] || ''}`)
        .join(',')
        .replace(/"/g, '')
        // Eliminar la coma final si existe
        return rowValues.endsWith(',') ? rowValues.slice(0, -1) : rowValues;
      });
  
      const csv = [headerRow, ...rows].join('\n');
      return csv;
    } else {
      console.error('resjs no contiene un array válido en la propiedad VCL.');
      return '';
    }
  }

  function downloadCsv(csv: string, filename: string) {
    if (!csv) {
      console.error("No hay datos para descargar.");
      return;
    }

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });


    // Para otros navegadores
    const link = document.createElement('a');
    if (link.download !== undefined) {
      // Crear un objeto URL para el Blob
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

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
        <div className='container mx-auto p-11 '>
          <h1 className="text-pretty text-zinc-900  text-center font-light mb-4">Escoge la plataforma que deseas actualizar</h1>
          <div className="grid gap-3 grid-cols-2 pb-10">
            <div className="flex justify-center items-center">
              <Image
                src={logoshopy}
                alt="Logo de Innovar Agora"
                height={50}
                className="w-full md:w-auto"
                priority
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={logofalabella}
                alt="Logo de Innovar Agora"
                height={50}
                className="w-full md:w-auto"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            {succes ?
              (
                <div>
                  <div className="flex justify-center items-center">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-5 px-16 rounded-xl" onClick={handlerSaturno}>GENERAR INVENTARIO</button>
                  </div>
                </div>
              )

              :
              (
                <div>
                  <div className="mb-4">
                    <input type="text" id="token" className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="No desconfiamos de ti ;), pero es necesario que ingreses el TOKEN" onChange={(e) => setToken((e.target as HTMLInputElement).value)} />
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-5 px-16 rounded-xl" onClick={handleToken}>VALIDAR TOKEN</button>
                  </div>
                </div>

              )
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default Principal;
